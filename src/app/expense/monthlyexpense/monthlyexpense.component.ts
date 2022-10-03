import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-monthlyexpense',
  templateUrl: './monthlyexpense.component.html',
  styleUrls: ['./monthlyexpense.component.css']
})
export class MonthlyexpenseComponent implements OnInit {
  expense: any = {};
  userid: any = {}
  expensedate:any={}
  constructor(private expservice :ExpenseService,private loginservice: LoginService, private toastr: ToastrService, private rut: Router) { }

  ngOnInit(): void {

  }

  onSelected(value:any): void {
  
		this.expensedate = value;

     this.expservice.listExpenseMonth(this.expensedate,this.loginservice.users.userid).then(res => {
        this.expense = res.data
       // console.log(this.expense);
      })  

    //console.log("month..  "+this.expensedate+"userid..  "+this.loginservice.users.userid);
    
	}

}
