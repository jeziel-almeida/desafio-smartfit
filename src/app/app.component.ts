import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnitLocation } from './types/unit-location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showList = new BehaviorSubject(false);
  unitsList: UnitLocation[] = [];

  constructor (
    private unitsService: GetUnitsService
  ) {}

  onSubmit() {
    this.unitsList = this.unitsService.getFilteredUnits();
    this.showList.next(true);
  }
}
