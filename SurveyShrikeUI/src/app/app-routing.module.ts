import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSurveyModule} from "./features/create-survey/create-survey.module";


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CreateSurveyModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
