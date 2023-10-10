import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { UnitLocation } from 'src/app/types/unit-location.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() unitsList: UnitLocation[] = [];

  constructor() {}

  ngOnInit(): void {

  }

}
