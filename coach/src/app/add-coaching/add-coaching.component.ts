import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-add-coaching',
  templateUrl: './add-coaching.component.html',
  styleUrls: ['./add-coaching.component.css']
})
export class AddCoachingComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(''),
    course: new FormControl(''),
    address: new FormControl(''),
    website: new FormControl(''),
    fees: new FormControl('')
  })

  constructor(private coach: ApiService) { }
  alert: boolean = false;

  ngOnInit(): void {
  }
  subForm() {
    this.coach.postList(this.addForm.value).subscribe((result) => {
      this.alert = true
    })
    this.addForm.reset({})
  }
  closeAle() {
    this.alert = false
  }

}
