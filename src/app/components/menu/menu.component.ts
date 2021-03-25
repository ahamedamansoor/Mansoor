import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {MainService} from '../../service/main-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              private mainService: MainService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  closeMenu(route) {
    this.mainService.isMenuOpen.next(true);
    this.router.navigate([{outlets: {menu: null}}]).then(data => {
      this.router.navigate([route]);
    })
  }
}
