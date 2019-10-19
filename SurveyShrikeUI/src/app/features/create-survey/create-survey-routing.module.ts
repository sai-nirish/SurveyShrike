import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import {CreateSurveyComponent} from "./components/create-survey/create-survey.component";


const routes: Routes = [
  {
    path:'create-survey',
    pathMatch: 'full',
    component: CreateSurveyComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'create-survey'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSurveyRoutingModule { }
