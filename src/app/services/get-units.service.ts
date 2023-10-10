import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';
import { UnitLocation } from '../types/unit-location.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubject: BehaviorSubject<UnitLocation[]> = new BehaviorSubject<UnitLocation[]>([]);
  private allUnits$: Observable<UnitLocation[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: UnitLocation[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe({
      next: (data) => {
        this.allUnitsSubject.next(data.locations);
        this.filteredUnits = data.locations;
      },
      error: (error) => console.log(error)
    })
  }

  getAllUnits(): Observable<UnitLocation[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: UnitLocation[]) {
    this.filteredUnits = value;
  }
}
