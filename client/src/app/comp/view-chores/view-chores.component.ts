import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-chores',
  templateUrl: './view-chores.component.html',
  styleUrls: ['./view-chores.component.css']
})
export class ViewChoresComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  allMotherChores:any;
  allFatherChores:any;
  allBBrotherChores:any;
  allLBrotherChores:any;
  ngOnInit() {
    this.http.get('/api/family/allchores').subscribe(data=>{
      console.log(data)
      this.allMotherChores = data[0].Mother;
      this.allFatherChores = data[0].Father;
      this.allBBrotherChores = data[0].BigBrother;
      this.allLBrotherChores = data[0].LittleBrother;
    })
  }

  addChores(){
    this.router.navigate(['/edit_chores']);

  }

}
