import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router: Router,private toastr: ToastrService) { }

  login(){
    this.accountService.login(this.user).subscribe(
      response => {
        this.router.navigate(['/members']);
      });
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['/']);
  }
}
