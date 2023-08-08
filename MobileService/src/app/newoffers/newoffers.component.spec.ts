/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewoffersComponent } from './newoffers.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, convertToParamMap, RouterLink } from '@angular/router';

describe('NewoffersComponent', () => {
  let component: NewoffersComponent;
  let fixture: ComponentFixture<NewoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoffersComponent,HeaderComponent,FooterComponent ],
      imports:[HttpClientModule,RouterLink],
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
    fixture = TestBed.createComponent(NewoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
