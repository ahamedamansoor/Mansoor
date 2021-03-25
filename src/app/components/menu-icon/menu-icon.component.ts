import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../../service/main-service.service';


@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {
  isMenuOpen = false;
  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit(): void {
  }


  OnMenuClick(data){
    this.mainService.isMenuOpen.next(this.isMenuOpen);
    this.mainService.isMenuOpen.subscribe(data => {
      this.isMenuOpen = !data;
      if(data){
        this.router.navigate([{outlets: { menu: null } }]);
      } else {
        this.router.navigate([{ outlets: { menu: ['main-menu'] } }],{skipLocationChange: true});
      }
    });
  }


}
