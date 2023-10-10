import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { UnitLocation } from 'src/app/types/unit-location.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  results: UnitLocation[] = [];
  filteredResults: UnitLocation[] = [];

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) { }

  ngOnInit(): void {

    this.unitsService.getAllUnits().subscribe({
      next: (data) => {
        this.results = data;
        this.filteredResults = data;
      },
      error: (error) => console.log(error)
    })

    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
  }



  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitsService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
  }

}
