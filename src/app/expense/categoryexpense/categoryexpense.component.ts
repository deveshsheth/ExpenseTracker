import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-categoryexpense',
  templateUrl: './categoryexpense.component.html',
  styleUrls: ['./categoryexpense.component.css']
})
export class CategoryexpenseComponent implements OnInit {
  selectedYear: number;
  years: number[] = [];
  expense: any = {};
  userid: any = {}
  constructor(public categoryservice: CategoryService, private route: ActivatedRoute, public expservice: ExpenseService, private loginservice: LoginService, private toastr: ToastrService, private rut: Router) {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1950; year--) {
      this.years.push(year);
    }
   }

  ngOnInit(): void {
    this.expservice.listexpsense(this.loginservice.users.userid).then(res => {
      this.expense = res.data
       console.log(this.expense);
       console.log(this.expense.expenseid);
    })
  }

}
