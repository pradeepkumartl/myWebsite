import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FeedComponent } from './feed/feed.component';
import {SignupModule} from './signup/signup.module';
import { MarketComponent } from './market/market.component';
import { LoginValidatorDirective } from './login-validator.directive';
import { LoginFieldsValidatorDirective } from './login-fields-validator.directive';
import { LoginWelcomeDirective } from './directives/login-welcome.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ProfileComponent,
    SidenavComponent,
    FeedComponent,
    MarketComponent,
    LoginValidatorDirective,
    LoginFieldsValidatorDirective,
    LoginWelcomeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
