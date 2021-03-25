import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isMenuOpen = new BehaviorSubject(false);
  constructor() { }
}
