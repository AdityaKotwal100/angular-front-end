import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  breakfast : any[] = [{name : 'a', price : 1},{name : 'b', price : 1},{name : 'c', price : 1},{name : 'd', price : 1}];
  
  lunch : any[] = [{name : 'a', price : 1},{name : 'b', price : 1},{name : 'c', price : 1},{name : 'd', price : 1}];
 
  dinner : any[] = [{name : 'a', price : 1},{name : 'b', price : 1},{name : 'c', price : 1},{name : 'd', price : 1}];
  

  //modify items not the time table 
  //api response will be list of items 
  constructor() { }

  ngOnInit(): void {
  }

}
