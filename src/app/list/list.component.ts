import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase , AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {

  itemList: AngularFireList<any>;
  itemArray = []

  constructor(public db:AngularFireDatabase) {  
    this.itemList = db.list('list');
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let x = action.payload.toJSON()
        x['$key'] = action.key
        this.itemArray.push(x as ListItemClass)
      })
    })

      console.log(this.itemArray)    
   }

  ngOnInit() {
  }

}


export class ListItemClass {
    $key : string;
    name : string;
    email : string;
    cin : string;
    adresse : string;
    sujet : string;
}
