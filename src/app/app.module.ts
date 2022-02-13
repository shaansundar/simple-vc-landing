import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchpadComponent,
    BlogsComponent,
    LandingPageComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
