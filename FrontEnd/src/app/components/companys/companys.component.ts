import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.scss'],
  providers: [UserService]
})
export class CompanysComponent implements OnInit {
  public userModel: User
  public identity: any
  public companys: any

  constructor(private _userService: UserService) {
    this.userModel = new User('','',0,'','','','','',)
  }

  ngOnInit(): void {
    this.allCompanys()
  }

  allCompanys(){
    this._userService.allcompany().subscribe(
      response =>{
        this.companys = response.companys
        this.userModel = new User('','',0,'','','','','',)
      }
    )
  }

  addCompany(){
    this._userService.addcompany(this.userModel).subscribe(
      response=>{
        this.allCompanys()
      }
    )
  }

  editCompany(){
    this._userService.editcompany(this.userModel).subscribe(
      response=>{
        this.allCompanys()
      }
    )
  }

  deleteCompany(id: String){
    this._userService.deletecompany(id).subscribe(
      response=>{
        this.allCompanys()
      }
    )
  }

  findCompany(id: String){
    this._userService.findcompany(id).subscribe(
      response =>{
        this.userModel = response.companyF
      }
    )
  }
}
