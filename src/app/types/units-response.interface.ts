import { UnitLocation } from './unit-location.interface';

export interface UnitsResponse {
  current_country_id: number;
  locations: UnitLocation[];
  wp_total: number;
  total: number;
  success: boolean;
}
