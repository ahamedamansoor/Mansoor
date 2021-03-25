import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
// @ts-ignore
import chart from './chart.json';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  canvas: any;
  proList = [];
  famList=[];
  constructor() { }

  ngOnInit(): void {
    this.proList = chart.proficient;
    this.famList = chart.Familiar;
    this.canvas = document.getElementById('myChart');
    const ctx = this.canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chart.chart1,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
