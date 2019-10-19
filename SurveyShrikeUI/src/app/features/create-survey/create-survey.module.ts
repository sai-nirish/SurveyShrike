import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSurveyRoutingModule } from './create-survey-routing.module';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';


@NgModule({
  declarations: [CreateSurveyComponent],
  imports: [
    CommonModule,
    CreateSurveyRoutingModule
  ]
})
export class CreateSurveyModule { }
