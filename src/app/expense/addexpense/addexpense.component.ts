import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  myExpenseForm!: FormGroup
  myCategoryForm!: FormGroup
  listcategory: any = {}
  userid: any = {}
  constructor(private loginservice: LoginService, private service: CategoryService, private serviceexpense: ExpenseService, private rut: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.userid = this.loginservice.users.userid 
    this.myExpenseForm = new FormGroup({

      expensename: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      expensedate: new FormControl('', Validators.required),
      expensecategory: new FormControl('', Validators.required),
      paymenttype: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      userid: new FormControl(this.userid, Validators.required)
    })

    this.service.listcategory().then(res => {
      this.listcategory = res.data;

    })

    this.myCategoryForm = new FormGroup({
      categoryname: new FormControl('', Validators.required),
    })

    this.futureDateDisabled();

  }

  expenseSubmit() {
    console.log(this.myExpenseForm.value);
    if(this.myExpenseForm.valid){
      this.serviceexpense.saveexpense(this.myExpenseForm.value).subscribe(res => {
        if(res.status==200){
          this.toastr.success(res.message,'Success');
          this.rut.navigateByUrl('/expenses')
        }


      })
    }
  }

  categorySubmit() {
    if (this.myCategoryForm.valid) {
      this.service.savecategory(this.myCategoryForm.value).subscribe(res => {
        if (res.status == 200) {
          this.toastr.success(res.message, 'Success');
        } else {
          this.toastr.warning(res.message, 'Warning');
        }
      })
    }else{
      this.toastr.error('Please Enter Details','Error');
    }
    // console.log(this.myCategoryForm.value);
  }

  maxDate: any;

  futureDateDisabled() {
    var dtToday: any = new Date();

    var month: any = dtToday.getMonth() + 1;
    var day: any = dtToday.getDate();
    var year: any = dtToday.getFullYear();

    if (month < 10)
      month = '0' + month;
    if (day < 10)
      day = '0' + day;

    this.maxDate = year + '-' + month + '-' + day;

  }

}
