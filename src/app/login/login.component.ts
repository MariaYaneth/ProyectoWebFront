import { Component, OnInit } from '@angular/core';
import { User } from '../User';
//import {UserService} from '../User.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    loginUser(event){
      event.preventDefault()
      const target = event.target
      const username =  target.querySelector("#username").value
      const password = target.querySelector("#password").value
      console.log(username, password)
    }
}

