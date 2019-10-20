import {NgModule} from '@angular/core';

import {CreateSurveyRoutingModule} from './create-survey-routing.module';
import {CreateSurveyComponent} from './components/create-survey/create-survey.component';
import {SharedModule} from "../../shared/shared.module";
import {SurveyElementComponent} from './components/create-survey/survey-element/survey-element.component';
import { QuestionElementComponent } from './components/create-survey/survey-element/question-element/question-element.component';


@NgModule({
  declarations: [CreateSurveyComponent, SurveyElementComponent, QuestionElementComponent],
  imports: [
    SharedModule,
    CreateSurveyRoutingModule
  ]
})
export class CreateSurveyModule {
}
