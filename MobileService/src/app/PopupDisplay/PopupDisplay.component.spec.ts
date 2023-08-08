
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupDisplayComponent } from './PopupDisplay.component';
import { ActivatedRoute, convertToParamMap, RouterLink } from '@angular/router';

describe('PopupDisplayComponent', () => {
  let component: PopupDisplayComponent;
  let fixture: ComponentFixture<PopupDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDisplayComponent ],
      imports:[RouterLink],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ /* mock your route params here */ }),
          },
        },
      },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
