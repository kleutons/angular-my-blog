import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleBlogComponent } from './components/HeroSection/title-blog/title-blog.component';
import { BigCardComponent } from './components/HeroSection/big-card/big-card.component';
import { SmallCardComponent } from './components/HeroSection/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleBlogComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
