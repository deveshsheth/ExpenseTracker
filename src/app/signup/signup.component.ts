import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mySignupForm!: FormGroup;
  constructor(private service:SignupService,private rut:Router,private toastr: ToastrService) { }

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
          this.toastr.success(res.data.name, res.message);
          this.rut.navigateByUrl('')
        }else{
          this.toastr.warning(res.message,'Warning');
        }
        
      })

    }else{
      this.toastr.error('Please Enter Details','Error');
    }
  
  }

}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

