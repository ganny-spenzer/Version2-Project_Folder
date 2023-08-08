/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiceCentreDescriptionComponent } from './serviceCentreDescription.component';
import { ActivatedRoute, convertToParamMap, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

describe('ServiceCentreDescriptionComponent', () => {
  let component: ServiceCentreDescriptionComponent;
  let fixture: ComponentFixture<ServiceCentreDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCentreDescriptionComponent,HeaderComponent,FooterComponent],
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
    fixture = TestBed.createComponent(ServiceCentreDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
