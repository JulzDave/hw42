import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-chores',
  templateUrl: './edit-chores.component.html',
  styleUrls: ['./edit-chores.component.css']
})
export class EditChoresComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }
  member: string;
  Mother:string;
  Father:string;
  BigBrother:string;
  LittleBrother:string;

  submitChore(ev) {
    this.member = ev.target.parentElement.parentElement.id;
    eval(this.member).children[2].children[2].value;
    debugger;
    if(this.member === "Mother"){
    this.http.put("/api/family/mother",{
    who: this.member,
    Mother: eval(this.member).children[2].children[2].value,
    Father: eval(this.member).children[2].children[2].value,
    BigBrother: eval(this.member).children[2].children[2].value,
    LittleBrother: eval(this.member).children[2].children[2].value
    }).subscribe(data=>{
      console.log(data)
    })
}
    if(this.member === "Father"){
    this.http.put("/api/family/father",{
    who: this.member,
    Mother: eval(this.member).children[2].children[2].value,
    Father: eval(this.member).children[2].children[2].value,
    BigBrother: eval(this.member).children[2].children[2].value,
    LittleBrother: eval(this.member).children[2].children[2].value
    }).subscribe(data=>{
      console.log(data)
    })
}
    if(this.member === "BigBrother"){
    this.http.put("/api/family/bigbrother",{
    who: this.member,
    Mother: eval(this.member).children[2].children[2].value,
    Father: eval(this.member).children[2].children[2].value,
    BigBrother: eval(this.member).children[2].children[2].value,
    LittleBrother: eval(this.member).children[2].children[2].value
    }).subscribe(data=>{
      console.log(data)
    })
}
    if(this.member === "LittleBrother"){
    this.http.put("/api/family/littlebrother",{
    who: this.member,
    Mother: eval(this.member).children[2].children[2].value,
    Father: eval(this.member).children[2].children[2].value,
    BigBrother: eval(this.member).children[2].children[2].value,
    LittleBrother: eval(this.member).children[2].children[2].value
    }).subscribe(data=>{
      console.log(data)
    })
}
alert(this.member.toString()+"'s status was updated")
  }


  allchores(){
    this.router.navigate(['/view_chores']);
  }

}
