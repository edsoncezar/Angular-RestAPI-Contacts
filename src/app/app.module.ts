import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { contactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { UpdatecontactComponent } from './update-contact/update-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    contactComponent,
    UpdatecontactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contact', component: contactComponent },
      { path: 'updatecontact/:id', component: UpdatecontactComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
