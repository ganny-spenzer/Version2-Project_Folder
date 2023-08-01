import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { NewoffersComponent } from './newoffers/newoffers.component';
import { SelectBrandComponent } from './SelectBrand/SelectBrand.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupDisplayComponent } from './PopupDisplay/PopupDisplay.component';
import { ServiceCentreListsComponent } from './serviceCentreLists/serviceCentreLists.component';
import { HeaderComponent } from './header/header.component';
import { ServiceCentreDescriptionComponent } from './serviceCentreDescription/serviceCentreDescription.component';
import { GaneshGuard } from './ganesh.guard';
import { AdminComponent } from './Admin/Admin.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { PartnerComponent } from './Partner/Partner.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      FooterComponent,
      LoginComponent,
      RegistrationComponent,
      UpcomingComponent,
      ProductdescriptionComponent,
      AboutComponent,
      ContactComponent,
      NewoffersComponent,
      SelectBrandComponent,
      PopupDisplayComponent,
      ServiceCentreListsComponent,
      HeaderComponent,
      ServiceCentreDescriptionComponent,
      AdminComponent,
      AdminproductComponent,
      PartnerComponent,
      TestComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [GaneshGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
