import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {

  constructor(private userservice:UserService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  resetform=new FormGroup({
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirm:new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  resetsubmit(){
    let data={
      password:this.resetform.value.password
    }
    let token=this.activeRoute.snapshot.paramMap.get('token')
    console.log(token)
    this.userservice.resetpassword(data,token).subscribe((response:any) => {
      console.log(response.message);
    })}
}
