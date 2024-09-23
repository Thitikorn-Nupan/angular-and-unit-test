import {Component, OnInit} from '@angular/core';

interface user {
  name: string;
  age: number
  status:boolean
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  public title = 'Users Table';
  public declare users : user[]

  ngOnInit(): void {
    this.users = []
    let u1 : user = {
     name : "alex",
     age : 15,
     status : true,
    }
    let u2 : user = {
      name : "mark",
      age : 17,
      status : true,
    }
    this.users.push(u1,u2)
  }

}
