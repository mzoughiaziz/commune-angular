import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';

  constructor(private fire:AngularFireAuth  ,private router: Router) { }

  ngOnInit() {
  }

  Login(){
    this.fire.auth.signInWithEmailAndPassword(this.username , this.password)
    .then(user => {
      console.log(this.username , this.password)
      this.router.navigate(['list'])
    }).catch(error =>{
      console.error(error)
    })
  } 

}
