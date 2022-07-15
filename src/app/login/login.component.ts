import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm!:FormGroup
  constructor(private service:LoginService,private rut:Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.myLoginForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  submit(){
    if(this.myLoginForm.valid){
      this.service.loginusers(this.myLoginForm.value).subscribe(res=>{
        this.service.users=res.data
        
        if(res.status==200){
          this.toastr.success(res.message,'Welcome '+res.data.name+'..!!');
          this.rut.navigateByUrl('/dashboard')
        }else{
          this.toastr.error(res.message,'Error');
        }
      })
    }
    
  }

}
