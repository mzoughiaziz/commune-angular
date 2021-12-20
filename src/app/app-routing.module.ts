import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { Act1Component } from './act1/act1.component';
import { Act2Component } from './act2/act2.component';
import { Act3Component } from './act3/act3.component';


const routes:Routes = [
  { path:'' , component:HomeComponent},
  { path:'home' , component:HomeComponent},
  { path:'contact-form' , component:ContactFormComponent },
  { path:'login' , component:LoginComponent },
  { path:'list' , component:ListComponent },
  { path:'actualites' , component:ActualitesComponent },
  { path:'act1' , component:Act1Component },
  { path:'act2' , component:Act2Component },
  { path:'act3' , component:Act3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ContactFormComponent , LoginComponent]