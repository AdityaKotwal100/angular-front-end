import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get_result : any;
  user_ID : string;
  password : string;

  constructor (private http: HttpClient) { }

  ngOnInit(): void {}

  @ViewChild('userID', {static:true}) id_no;
  @ViewChild('psw', {static:true}) psw;

  validate(uname : string, psw : string) : boolean{
    var passw=  "^(?=.*[a-z]).{5,8}$";
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

    if(this.validate(this.user_ID,this.password))
  {
    this.http.get('http://192.168.1.101:3000/students/?format=json').subscribe(data => {
      this.get_result= data;
      console.log(this.get_result);
      console.log(this.user_ID);
      console.log(this.password);

      for(var i=0;i<this.get_result.length();i++)
      {
        if(this.get_result[i].user_ID == this.user_ID)
        {
          if(this.get_result[i].psw == this.password)
          {
            alert("Credentials matched!");
            break;
          }

          else
          {
            alert("Password wrong!");

            break;
          }

        }
        else
        alert("Username/Password wrong!");
      }
    });
  }
  


  }

}
