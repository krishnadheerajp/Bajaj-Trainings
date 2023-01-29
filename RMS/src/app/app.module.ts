import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
declarations: [
AppComponent,
MenuComponent,
EventsComponent,
HomeComponent,
AboutComponent,
GalleryComponent,
ContactComponent
],
imports: [
BrowserModule,
routes
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }