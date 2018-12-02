import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Author } from '../../models';
import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author: Author = new Author();
  errors: string[] = [];

  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor(
    private readonly authorService: AuthorService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.author);
    this.authorService.createAuthor(this.author).subscribe(newAuthor => {
      this.createAuthor.emit(this.author);
      console.log('new author', newAuthor);
      this.author = new Author;
      this.router.navigateByUrl('/');
    },
      error => {
        console.log('error', error);
        this.errors = error.error;
      }
    );
  }

}
