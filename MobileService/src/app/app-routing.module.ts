import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewoffersComponent } from './newoffers/newoffers.component';
import { PopupDisplayComponent } from './PopupDisplay/PopupDisplay.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectBrandComponent } from './SelectBrand/SelectBrand.component';
import { ServiceCentreDescriptionComponent } from './serviceCentreDescription/serviceCentreDescription.component';
import { ServiceCentreListsComponent } from './serviceCentreLists/serviceCentreLists.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { GaneshGuard } from './ganesh.guard';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'upcoming',
    component:UpcomingComponent
  },
  {
    path:'upcoming/:check',
    component:ProductdescriptionComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'newoffers',
    component:NewoffersComponent
  },
  {
    path:'selectBrand',
    component:SelectBrandComponent
  },
  {
    path:'popup',
    component:PopupDisplayComponent,
    canActivate:[GaneshGuard]

  },
    {
    path:'scentreList',
    component:ServiceCentreListsComponent
  },
  {
    path:'scentreDescrip/:id',
    component:ServiceCentreDescriptionComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
