import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.modules';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){

    let response = this.userService.getUsers()

      response.subscribe((res: any) => {
        this.userService.users = res.data
        console.log(res)
      })

     }

  login(){
    
    for(let user of this.userService.users){
      
    }

  }

}
