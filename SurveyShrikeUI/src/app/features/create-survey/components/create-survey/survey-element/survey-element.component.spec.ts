import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyElementComponent } from './survey-element.component';

describe('SurveyElementComponent', () => {
  let component: SurveyElementComponent;
  let fixture: ComponentFixture<SurveyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
