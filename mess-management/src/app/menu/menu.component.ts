import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  breakfast : any[] = [{ item1 :'a',item2 :'b',item3 :'c', item4 :'d', item5 :'e', item6 :'f'}];
  lunch : any[] = [{ item1 :'a',item2 :'b',item3 :'c', item4 :'d', item5 :'e', item6 :'f'}];
  dinner : any[] = [{ item1 :'a',item2 :'b',item3 :'c', item4 :'d', item5 :'e', item6 :'f'}];
  show : boolean = false;

 

  
  constructor() { }

  ngOnInit(): void {
  }

  price(prices : any[]) : void {
    var x = prices[0].price1 + prices[0].price2 + prices[0].price3 + prices[0].price4 + prices[0].price5 + prices[0].price6;
    }

  custom() : void {
    this.show = !this.show;
    console.log(this.show);

  }
}
