import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  stepperArray : Array<number> = [0,1,2,3,4] ;

  stepNumber : number = 0 ;

  checkFeelPain : boolean = false ;

  constructor() { }

  ngOnInit() {
  }

  goToNextStep() {
    this.stepNumber += 1;
  }

}
