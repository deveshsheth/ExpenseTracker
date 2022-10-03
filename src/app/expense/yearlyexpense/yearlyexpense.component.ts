import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-yearlyexpense',
  templateUrl: './yearlyexpense.component.html',
  styleUrls: ['./yearlyexpense.component.css']
})
export class YearlyexpenseComponent implements OnInit {
  selectedYear: number;
  years: number[] = [];
  expense: any = {};
  userid: any = {}
  expensedate:any={}
  constructor(private expservice :ExpenseService,private loginservice: LoginService, private toastr: ToastrService, private rut: Router) {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1950; year--) {
      this.years.push(year);
    }
   }
   
  ngOnInit(): void {
  }

  onSelected(value:any): void {  
      this.expensedate = value;

     this.expservice.listExpenseYear(this.expensedate,this.loginservice.users.userid).then(res => {
        this.expense = res.data
       // console.log(this.expense);
      })  

    
		
   // console.log("month..  "+this.expensedate+"userid..  "+this.loginservice.users.userid);
    
	}

}
