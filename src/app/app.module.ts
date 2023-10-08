import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BigCardComponent } from './components/HeroSection/big-card/big-card.component';
import { SmallCardComponent } from './components/HeroSection/small-card/small-card.component';
import { PostComponent } from './pages/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleHomeComponent } from './components/HeroSection/title-home/title-home.component';
import { TitlePostComponent } from './components/HeroSection/title-post/title-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BigCardComponent,
    SmallCardComponent,
    PostComponent,
    HomeComponent,
    TitleHomeComponent,
    TitlePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
