import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mySignupForm!: FormGroup;
  constructor(private service:SignupService,private rut:Router) { }

  ngOnInit(): void {

    this.mySignupForm = new FormGroup({
      name:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  submit(){
    if(this.mySignupForm.valid){
      
      this.service.saveusers(this.mySignupForm.value).subscribe(res=>{
        console.log(res);
        if(res.status==200){
          
        }else{
          
        }
        
      })

    }
  
  }

}
