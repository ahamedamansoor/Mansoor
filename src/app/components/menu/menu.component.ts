import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {MainService} from '../../service/main-service.service';
// @ts-ignore
import data from './menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  navData = [];
  isMenuOpen: boolean;
  constructor(private router: Router,
              private mainService: MainService) { }

  ngOnInit(): void {
   this.navData = data.navData;
   this.mainService.isMenuOpen.subscribe(data => {
     this.isMenuOpen = data;
    });
  }

  ngAfterViewInit() {

  }

  closeMenu(route) {
    this.mainService.isMenuOpen.next(false);
    this.router.navigate([route]);
  }
}
