import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentdate',
  templateUrl: './currentdate.component.html',
  styleUrls: ['./currentdate.component.css']
})
export class CurrentdateComponent implements OnInit {
  Date1 : Date=new Date();
  LocalDate:string=new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  }

}
 