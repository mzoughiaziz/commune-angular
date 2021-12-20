import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase , AngularFireList } from 'angularfire2/database';

import {Router} from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  data = {
  name : '',
  email :'',
  cin : '',
  adresse : '',
  sujet : ''

}

itemList: AngularFireList<any>;

  constructor(public db:AngularFireDatabase , public router:Router) { 

    this.itemList = db.list('list');

  }

  ngOnInit() {
    console.log(this.data.name)

   

  }

  insertReclamation(){
    this.itemList.push({
      name : this.data.name,
      email :this.data.email,
      cin : this.data.cin,
      adresse : this.data.adresse,
      sujet : this.data.sujet
    })

    this.router.navigate(['/home'])


  }

}
