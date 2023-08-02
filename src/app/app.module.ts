import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsComponent,
    PortfolioComponent,
    MenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
