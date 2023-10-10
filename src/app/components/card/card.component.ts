import { Component, Input } from '@angular/core';
import { UnitLocation } from 'src/app/types/unit-location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() unit!: UnitLocation;


}
