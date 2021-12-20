import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ActualitesComponent } from './actualites/actualites.component';
import { Act1Component } from './act1/act1.component';
import { Act2Component } from './act2/act2.component';
import { Act3Component } from './act3/act3.component';

const config = {
  apiKey: "AIzaSyDY1KLumabdRwUHGZaQw3jR5-QNC1E9T_A",
  authDomain: "commune-angular-firebase.firebaseapp.com",
  databaseURL: "https://commune-angular-firebase.firebaseio.com",
  projectId: "commune-angular-firebase",
  storageBucket: "commune-angular-firebase.appspot.com",
  messagingSenderId: "772744847777",
  appId: "1:772744847777:web:b1e17c27571f31eada6be0",
  measurementId: "G-E5WVPPGQRK"
};

const routes:Routes = [
  { path:'' , redirectTo:'home' , pathMatch:'full'},
  { path:'home' , component:HomeComponent},
  { path:'contact-form' , component:ContactFormComponent },
  { path:'login' , component:LoginComponent },
  { path:'list' , component:ListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    LoginComponent,
    ListComponent,
    ActualitesComponent,
    Act1Component,
    Act2Component,
    Act3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
