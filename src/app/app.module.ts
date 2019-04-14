import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './components/about/about.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { SupportComponent } from './components/support/support.component';

import { FullstoryServerService } from './services/fullstory-server.service'

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ConfigureComponent,
    InstructionsComponent,
    PlaygroundComponent,
    SupportComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    FullstoryServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
