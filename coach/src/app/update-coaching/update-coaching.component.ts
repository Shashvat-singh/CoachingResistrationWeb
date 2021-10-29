import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-coaching',
  templateUrl: './update-coaching.component.html',
  styleUrls: ['./update-coaching.component.css']
})
export class UpdateCoachingComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl(''),
    course: new FormControl(''),
    address: new FormControl(''),
    website: new FormControl(''),
    fees: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private coach: ApiService) { }
  dataform: any = {}
  alert: boolean = false;

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.coach.getForm(this.router.snapshot.params.id).subscribe((result) => {
      this.dataform = result
      console.log(result)
      this.updateForm = new FormGroup({
        name: new FormControl(this.dataform.name),
        course: new FormControl(this.dataform.course),
        address: new FormControl(this.dataform.address),
        website: new FormControl(this.dataform.website),
        fees: new FormControl(this.dataform.fees)
      })
    })
  }
  collForm() {
    this.coach.putForm(this.router.snapshot.params.id, this.updateForm.value).subscribe((result) => {
      console.log(result)
      this.alert = true
    })
  }
  closeAle() {
    this.alert = false
  }

}
