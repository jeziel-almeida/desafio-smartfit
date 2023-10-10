import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  results = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ) {}

  ngOnInit(): void {

    this.unitsService.getAllUnits().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error)
    })

    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  onClean(): void {
    this.formGroup.reset();
  }

}
