import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
  resForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    pass : new FormControl('')
  })

  alert:boolean = false;

  constructor(private coach:ApiService) { }

  ngOnInit(): void {
  }
  subRes(){
    this.coach.resiForm(this.resForm.value).subscribe((result)=>{
      console.log(result)
      this.alert=true
    })
    this.resForm.reset({})
  }
  closeAle(){
    this.alert=false
  }

}
