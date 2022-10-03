import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dailyexpense',
  templateUrl: './dailyexpense.component.html',
  styleUrls: ['./dailyexpense.component.css']
})
export class DailyexpenseComponent implements OnInit {
  expense: any = {};
  userid: any = {}
  constructor(private expservice :ExpenseService,private loginservice: LoginService, private toastr: ToastrService, private rut: Router) { }

  ngOnInit(): void {

    this.userid = { "userid": this.loginservice.users.userid }


    this.expservice.listExpenseDaily(this.loginservice.users.userid).then(res => {
      this.expense = res.data
      console.log(this.expense);
      
    })

  }

}
