import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-selector',
  templateUrl: './wheel-selector.component.html',
  styleUrls: ['./wheel-selector.component.scss'],
})
export class WheelSelectorComponent implements OnInit {
  @Input() selected_value : number = 0 ;
  @Input() offset : number = 0 ;
  @Input() min : number = 0 ;
  @Input() max : number = 0 ;

  wheelArray = Array(5).fill(1).map((x, i) => i) ;

  constructor() { }

  ngOnInit() {}

  selectValue(val : number) {
    this.selected_value = val ;
  }
}
