import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormPatchingService {

  constructor() { }

  sampleData(): {} {
    return {
      'firstName': 'Gurpreet',
      'lastName': 'Singh',
      'address': '123 main st'
    }
  }
}
