import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from '../service/expense.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  expense: any = {};
  userid: any = {}
  paymenttype:any={}
  constructor(private expservice :ExpenseService,private loginservice: LoginService, private toastr: ToastrService, private rut: Router) {}

  ngOnInit(): void {
  }

  onSelected(value:any): void {
  
		this.paymenttype = value;

     this.expservice.listExpensePaymentType(this.paymenttype,this.loginservice.users.userid).then(res => {
        this.expense = res.data
       // console.log(this.expense);
      })  

    console.log("month..  "+this.paymenttype+"userid..  "+this.loginservice.users.userid);
    
	}

}
