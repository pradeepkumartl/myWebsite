import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanHomepageActivateGuardService } from './can-homepage-activate-guard.service';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {path:'home/:user',
  component:HomepageComponent,
    children:[
      {
        path:'profile',
        component: ProfileComponent,
        canActivate:[CanHomepageActivateGuardService]
      },
      {
        path: 'market',
        component: ProfileComponent
      }
    ]
  },
  {path:'login', component: LoginComponent},
  {path:'signup', 
    component: SignupComponent
  },
  {path:'', redirectTo:'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanHomepageActivateGuardService]
})
export class AppRoutingModule { }
