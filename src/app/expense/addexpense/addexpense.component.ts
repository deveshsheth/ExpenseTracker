import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
myExpenseForm!:FormGroup
myCategoryForm!:FormGroup

  constructor() { }

  ngOnInit(): void {
  
    this.myExpenseForm = new FormGroup({
      expensename:new FormControl('',Validators.required),
      amount:new FormControl('',Validators.required),
      expensedate:new FormControl('',Validators.required),
      expensecategory: new FormControl('',Validators.required),
      paymenttype:new FormControl('',Validators.required),
      comment: new FormControl('',Validators.required)
    })

    this.myCategoryForm = new FormGroup({
      categoryname:new FormControl('',Validators.required),
    })

    this.futureDateDisabled();

  }

  expenseSubmit(){
    console.log(this.myExpenseForm.value);
  }

  categorySubmit(){
    console.log(this.myCategoryForm.value);
  }

  maxDate:any;

  futureDateDisabled(){
    var dtToday:any = new Date();

    var month:any = dtToday.getMonth() + 1;
    var day:any = dtToday.getDate();
    var year:any = dtToday.getFullYear();

    if (month < 10)
      month = '0' + month;
    if (day < 10)
      day = '0' + day;

    this.maxDate = year + '-' + month + '-' + day;
    
  }

}
