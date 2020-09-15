import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformLocation, JsonPipe } from '@angular/common';
import { CreateformService } from "../createform/createform.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
userdata:any;
  constructor(
    private service : CreateformService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() { 
    this.route.params.subscribe(routerParam => {

    // if (routerParam.uuid) {
    this.service.getuserdata({email:routerParam.id}).subscribe( data => {
       let res = JSON.parse(JSON.stringify(data))
this.userdata = res.result
       console.log(this.userdata)
      })
    })
  }

}
