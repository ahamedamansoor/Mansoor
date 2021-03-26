import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  summary = [
  {
   point: 'Strong Analytical ability and Logical thinking'
},
  {
   point: 'Strong time management, organizational and multi-tasking skills coupled with the ability to work ' +
     'independently and with minimal supervision'
},
  {
   point: 'Awareness of latest technologies and ability to learn and adapt new technologies'
},
  {
   point: 'Good understanding of Software Development Life Cycle'
}
];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
