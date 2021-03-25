import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
// @ts-ignore
import progress from './home.json';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  progessValue = [];
  sideNavList = [];
  aboutInfo = [];
  chart1 = {};
  data = {
    isSkill: false,
    isNav: false
  };


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate([{outlets: { menu: null } }],{skipLocationChange: true});
    this.progessValue = progress.Progress;
    this.sideNavList = progress.sideNavList;
    this.aboutInfo = progress.About;
    this.chart1 = progress.chart1;
  }


}
