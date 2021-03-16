import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user:any={}

  constructor(public accountService: AccountService) { }

  login(){
    this.accountService.login(this.user).subscribe(
      response => {
      },
      error =>{
        console.log(error);
      });
  }

  logout(){
    this.accountService.logout();
  }
}