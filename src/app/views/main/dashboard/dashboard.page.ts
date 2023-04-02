import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [6, 3, 10, 8, 7, 6, 2],
        type: 'line',
      },
    ],
  };

  selectedDate = new Date();
  isToday : boolean = true;

  ngOnInit() {
  }

  isEqualToday(selectedDate:any) {
    if(selectedDate.getFullYear() === new Date().getFullYear() && selectedDate.getMonth() === new Date().getMonth() && selectedDate.getDate() === new Date().getDate()) {
      this.isToday = true;
      return ;
    }

    this.isToday = false ;
  }
  goToPrevious() {
    this.selectedDate = new Date(this.selectedDate.getTime() - 1000 * 3600 * 24) ;

    this.isEqualToday(this.selectedDate) ;
  }

  goToNext() {
    this.selectedDate = new Date(this.selectedDate.getTime() + 1000 * 3600 * 24) ;

    this.isEqualToday(this.selectedDate) ;
  }
}
