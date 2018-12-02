import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorNewComponent } from './authors/author-new/author-new.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full'
  },
  {
    path: 'authors',
  component: AuthorListComponent,
},
  {
    path: 'authors/new',
    component: AuthorNewComponent,
  },
  {
    path: 'authors/:id',
    component: AuthorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
