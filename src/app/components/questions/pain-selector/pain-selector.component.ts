import { Component, OnInit } from '@angular/core';

import { painPoint } from './pain-selector.types';

@Component({
  selector: 'app-pain-selector',
  templateUrl: './pain-selector.component.html',
  styleUrls: ['./pain-selector.component.scss'],
})
export class PainSelectorComponent implements OnInit {

  constructor() { }

  painPoints : Array<painPoint> = [] ;

  ngOnInit() {}

  selectPainPoint(event : any) {
    this.painPoints.push({
      x : event.layerX,
      y : event.layerY
    })

    console.log(this.painPoints);
  }
}
