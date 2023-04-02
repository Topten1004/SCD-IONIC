import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-calendar',
  templateUrl: './reminder-calendar.component.html',
  styleUrls: ['./reminder-calendar.component.scss'],
})

export class ReminderCalendarComponent implements OnInit {

  constructor() { }

  months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  weeks = ["Mo", "Tu", "We", "Th", "Fr", 'Sa', "Su"] ;

  cur_month = new Date().getMonth() ;
  cur_year = new Date().getFullYear() ;

  prefixEmptyNumbers : Array<number> = [] ;
  prefixFillNumbers :  Array<number> = [] ;
  perfectWeekCount : Array<number> = [] ;
  suffixFillNumbers : Array<number> = [] ;
  suffixEmptyNumbers : Array<number> = [] ;

  ngOnInit() {
    this.setNewCalendarData() ;
  }

  makePrefixEmptyNumbers() {
    if(!this.startDayOfWeek()) {
      this.prefixEmptyNumbers = [] ;
      return ;
    }

    this.prefixEmptyNumbers = Array(this.startDayOfWeek()).fill(1).map((x, i) => i) ;
  }

  makePrefixFillNumbers() {
    this.prefixFillNumbers = Array(7 - this.prefixEmptyNumbers.length).fill(1).map((x, i) => i) ;
  }

  makePrefixDaysRow() {
    this.makePrefixEmptyNumbers() ;
    this.makePrefixFillNumbers() ;
  }

  getPerfectWeekCount() {
    this.perfectWeekCount = Array(Math.floor((this.daysInMonth() - this.prefixFillNumbers.length) / 7)).fill(1).map((x, i) => i);
  }

  makeSuffixDaysRow() {
    let restDays = this.daysInMonth() - this.prefixFillNumbers.length - this.perfectWeekCount.length * 7 ;

    if(!restDays) {
      this.suffixEmptyNumbers = [] ;
      this.suffixFillNumbers = [] ;

      return ;
    }

    this.suffixFillNumbers = Array(restDays).fill(1).map((x, i) => i) ;
    this.suffixEmptyNumbers = Array(7 - restDays).fill(1).map((x, i) => i) ;
  }

  getDateFromLoop(numberOfWeek : number , numberOfDay : number) {
    return numberOfWeek * 7 + (numberOfDay + 1) + this.prefixFillNumbers.length ;
  }

  setNewCalendarData() {
    this.makePrefixDaysRow();
    this.getPerfectWeekCount() ;
    this.makeSuffixDaysRow() ;
  }

  nextDateMonth() {
    if(this.cur_month === 11) {
      this.cur_month = 0;
      this.cur_year += 1;
    } else {
      this.cur_month += 1;
    }

    this.setNewCalendarData() ;
  }

  previousDateMonth() {
    if(this.cur_month === 0) {
      this.cur_month = 11;
      this.cur_year -= 1;
    } else {
      this.cur_month -= 1;
    }

    this.setNewCalendarData();
  }

  daysInMonth() {
    return new Date(this.cur_year, this.cur_month, 0).getDate();
  }

  weeksInMonth() {
    let lastDate = new Date(this.cur_year + "-" + this.cur_month + "-" + this.daysInMonth()) ;
    let adjustedDate = lastDate.getDate() + lastDate.getDay();

    let prefixes = ['0', '1', '2', '3', '4', '5'];
    return (parseInt(prefixes[0 | adjustedDate / 7])+1);
  }

  startDayOfWeek() {
    return new Date(this.cur_year + "-" + (this.cur_month + 1 )).getDay() ;
  }

  getDaysArray() {
    return new Array(this.daysInMonth()).fill(1).map((x, i) => i);
  }
}
