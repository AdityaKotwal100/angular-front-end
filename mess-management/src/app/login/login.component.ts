import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get_result : any;
  user_ID : string;
  password : string;
  show_register : boolean = true;
  constructor (private http: HttpClient, private router: Router) { }

  ngOnInit(): void {}

  @ViewChild('userID') id_no;
  @ViewChild('psw') psw;
  @ViewChild('psw1') psw1;
  @ViewChild('cpw') cpw;


  register_form(){
    this.show_register = !this.show_register;
  }


  confirm_password() : void{
    if(this.psw1.nativeElement.value != this.cpw.nativeElement.value)
    alert('Passwords do not match.');
  }

  validate(uname : string, psw : string) : boolean{
    //var passw=  "^(?=.*[a-z]).{5,8}$";
    var passw=  "^(?=.*).{4,8}$";
    var un = "^(?=.{5}$)(?![_.])(?!.*[_.]{2})[0-9._]+(?<![_.])$";
    var a = 0, b=0;
    if (psw.match(passw))
    a = 1;
    if (uname.match(un))
    b = 1;

    if(a == 1 && b == 1)
    return true;
    else if(a==0 && b==0)
    alert('Invalid username and password.');
    else if(a==0 && b==1)
    alert('Invalid password.');
    else if(a==1 && b==0)
    alert('Invalid username.');
    

    return false;

    }
    
  verify() : void{

    this.user_ID = this.id_no.nativeElement.value;
    this.password = this.psw.nativeElement.value;

    if(this.validate(this.user_ID,this.password)== true)
  {
    this.http.get('http://localhost:8000/students/?format=json').subscribe(data => {
      this.get_result= data;
      console.log(this.get_result);
      console.log(this.user_ID);
      console.log(this.password);

      var flag =0;

      for(var i=0;i<this.get_result.length;i++)
      {
        if(this.get_result[i].student_id == this.user_ID)
        {
          if(this.get_result[i].student_password == this.password)
          {
            //alert("Credentials matched!");
            flag = 1;
            this.router.navigate(['/menu']);
            break;
          }

          else
          {
            alert("Password wrong!");

            break;
          }

        }
      }

      if(flag==0)
      alert("Username/Password wrong!");

    });
  }
  


  }

}
