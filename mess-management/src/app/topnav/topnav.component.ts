import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../global-variables'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  studentID : string;
  studentName : string;

  logout() {
    this.router.navigate(['/login']);
  }
  constructor(private router: Router) {

    this.studentName = GlobalVariables.StudentName;
    this.studentID = GlobalVariables.StudentID;

   }

  ngOnInit(): void {
    
  }



}
