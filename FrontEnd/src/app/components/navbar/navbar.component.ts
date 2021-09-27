import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  public identity
  public token

  constructor(public _userService: UserService, private _router: Router) {
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this._router.navigate(['/login'])
  }

  companys(){
    this._router.navigate(['/companys'])
  }

  employees(){
    this._router.navigate(['/employees'])
  }

  products(){
    this._router.navigate(['/products'])
  }
}
