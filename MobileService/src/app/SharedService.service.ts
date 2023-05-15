import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  selectedCity: string | undefined;
  selectedBrand: string | undefined;


constructor() { }

}
