import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { SubteamComponent } from './pages/index/subteam/subteam.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IndexComponent,
    SubteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
