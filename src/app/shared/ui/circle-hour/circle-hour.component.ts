import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-hour',
  templateUrl: './circle-hour.component.html',
  styleUrls: ['./circle-hour.component.scss'],
})
export class CircleHourComponent implements OnInit {
  @Input() borderColor : string = '';
  @Input() value : string = '0';
  @Input() suffix : string = '' ;

  constructor() { }

  ngOnInit() {}

}
