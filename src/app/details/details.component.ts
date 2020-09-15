import { Component, OnInit } from '@angular/core';
import { CreateformService } from "../createform/createform.service";
import { Router } from '@angular/router'
import { PlatformLocation, JsonPipe } from '@angular/common';
import { from } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
users:any
  constructor(
    private service : CreateformService,
    private router: Router,
    private platformLocation: PlatformLocation
  ) { }

  ngOnInit() {
this.getusers()
  }

  getusers(){
    this.service.getuser().subscribe( data => {
      let res = JSON.parse(JSON.stringify(data));
      this.users = res.result;
      console.log(this.users);
    })
  }

  delete(role){
    console.log(role);
    this.service.deleteuser({email:role.email}).subscribe( data => {
      alert("Record Deleted Successfully");
      this.getusers();
    })
  }

  get(role){
    console.log(role);
    let url = new URL(this.platformLocation.href)
    window.open(`${url.origin}/user/${role.email}`, '_blank')
 
  }

}
