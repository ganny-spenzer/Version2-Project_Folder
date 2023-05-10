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
import { ProductComponent } from './product/product.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { NewoffersComponent } from './newoffers/newoffers.component';
import { SelectBrandComponent } from './SelectBrand/SelectBrand.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupDisplayComponent } from './PopupDisplay/PopupDisplay.component';


@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      FooterComponent,
      LoginComponent,
      RegistrationComponent,
      UpcomingComponent,
      ProductComponent,
      ProductdescriptionComponent,
      AboutComponent,
      ContactComponent,
      NewoffersComponent,
      SelectBrandComponent,
      PopupDisplayComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
