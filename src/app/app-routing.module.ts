import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateformComponent } from "../app/createform/createform.component"
import { DetailsComponent } from "../app/details/details.component"
import { UserdetailsComponent } from "../app/userdetails/userdetails.component"
import { from } from 'rxjs';

const routes: Routes = [
  
    {path:"",component:CreateformComponent},
    {path:"details",component: DetailsComponent},
    { path: "user/:id", component: UserdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
