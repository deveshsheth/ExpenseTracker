import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expense } from 'src/app/interface/expense';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.css']
})
export class EditexpenseComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  myUpdateForm!: FormGroup;
  listcategory: any = {};
  expenseData!: Expense;
  id:any ={};
  userid: any = {}
  constructor(public categoryservice: CategoryService, public formbuilder:FormBuilder,
    private route: ActivatedRoute, public expservice: ExpenseService, private loginservice: LoginService, private toastr: ToastrService, private rut: Router) { }

  ngOnInit(): void {
    this.userid = this.loginservice.users.userid 
    
    this.myUpdateForm=this.formbuilder.group({
      expenseid:['',[Validators.required]],
      expensename:['',[Validators.required]],
      amount:['',[Validators.required]],
      expensedate:['',[Validators.required]],
      expensecategory:['',[Validators.required]],
      paymenttype:['',[Validators.required]],
      comment:['',[Validators.required]],
      userid:['',[Validators.required]]
    })
    this.futureDateDisabled()
    this.id = this.route.snapshot.params['expenseid'];
    console.log(this.id);

    this.expservice.getexpense(this.id).subscribe(res => {
      this.expenseData = res.data;
      // debugger;
      this.myUpdateForm.patchValue({
        expenseid:this.expenseData.expenseid,
        expensename:this.expenseData.expensename,
        amount:this.expenseData.amount,
        expensedate:this.expenseData.expensedate,
        expensecategory:this.expenseData.expensecategory,
        paymenttype:this.expenseData.paymenttype,
        comment:this.expenseData.comment,
        userid:this.userid
      })

      console.log(this.expenseData.expensecategory);
    })

   
    this.categoryservice.listcategory().then(res => {
      this.listcategory = res.data;   
    })


  }
  expSubmit(){
    if(this.id){
      this.expservice.updateExpense(this.myUpdateForm.value).subscribe(res => {
        this.toastr.success(res.message,'Success');
        this.rut.navigateByUrl('expenses')
      })
        //console.log(this.myUpdateForm.value);
        
    }
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
