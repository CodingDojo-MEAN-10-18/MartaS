import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorNewComponent } from './authors/author-new/author-new.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorService } from './services/author.service';
// import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorEditComponent,
//    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
