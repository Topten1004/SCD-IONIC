import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor() { }

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
