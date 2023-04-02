import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-range',
  templateUrl: './vertical-range.component.html',
  styleUrls: ['./vertical-range.component.scss'],
})
export class VerticalRangeComponent implements OnInit {
  @Input() bgColor : string = '' ;
  @Input() value : string = '' ;
  @Input() label : string = '' ;

  constructor() { }


  ngOnInit() {}

}
