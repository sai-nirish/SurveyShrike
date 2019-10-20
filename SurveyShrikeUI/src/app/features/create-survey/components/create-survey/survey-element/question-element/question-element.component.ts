import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionType} from "../../../../models/question-type";

@Component({
  selector: 'app-question-element',
  templateUrl: './question-element.component.html',
  styleUrls: ['./question-element.component.scss']
})
export class QuestionElementComponent implements OnInit {

  @Input() questionType:QuestionType;

  @Output() questionData:EventEmitter<string[]>;

  constructor() { }

  ngOnInit() {
  }

}
