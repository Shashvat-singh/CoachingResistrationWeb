import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-list-of-coaching',
  templateUrl: './list-of-coaching.component.html',
  styleUrls: ['./list-of-coaching.component.css']
})
export class ListOfCoachingComponent implements OnInit {
data:any;

  constructor(private coach:ApiService) { }

  ngOnInit(): void {
    this.coach.getList().subscribe((result)=>{
      console.log(result);
      this.data=result
    })
  }
  delForm(item:any){
    this.coach.delForm(item).subscribe((result)=>{
      this.data.splice(item-1,1)
    })
  }

}
