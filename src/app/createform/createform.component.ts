import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { CreateformService } from './createform.service'
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {
fname: any;
lname: any;
email: any;
phone: any;
imagename:any;
images = [];

  constructor(
    private router: Router,
    private service: CreateformService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }
  submit(){


    console.log(this.fname);
   var data = { 
      "firstname" : this.fname,
      "lastname" :this.lname,
      "email" : this.email,
      "phone" : this.phone,
      "imagename" : this.imagename,
      "image" : this.images
    }
    this.service.adduser(data).subscribe( data => {
      let users = data;
      let res = JSON.parse(JSON.stringify(users)) ;
      if(res.result == "Email alredy exists"){
        alert("Email alredy exists")
      }
      else if(res.result == "Inserted"){
        this.router.navigate(['details']);
        this.toastr.success("User addedd Successfully")
      }
    })
  
  
  }
  keypresshandler(event)
  {
       var charCode = event.charCode;
       //Non-numeric character range
       if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.imagename = event.target.files[0].name;
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  // console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                  //  this.myForm.patchValue({
                  //     fileSource: this.images
                  //  });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
