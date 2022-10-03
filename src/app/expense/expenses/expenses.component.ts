import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expense } from 'src/app/interface/expense';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expense: any = {};
  dtOptions: DataTables.Settings = {};
  userid: any = {}
  constructor(public categoryservice: CategoryService, private route: ActivatedRoute, public expservice: ExpenseService, private loginservice: LoginService, private toastr: ToastrService, private rut: Router) { }

  ngOnInit(): void {

  
    this.userid = { "userid": this.loginservice.users.userid }


    this.expservice.listexpsense(this.loginservice.users.userid).then(res => {
      this.expense = res.data
       console.log(this.expense);
       console.log(this.expense.expenseid);
    })
  
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

  delete(expenseid:any){
    this.expservice.deleteExpense(expenseid).subscribe(res => {
      this.toastr.success(res.message,'Success');
      this.rut.navigateByUrl('expenses')
    })
    
  }



}
