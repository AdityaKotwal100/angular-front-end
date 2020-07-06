import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  logout() {
    this.router.navigate(['/login']);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }



}
