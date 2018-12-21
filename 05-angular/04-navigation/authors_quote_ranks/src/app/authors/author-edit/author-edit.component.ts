import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Author } from '../../models';
import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})

export class AuthorEditComponent implements OnInit {

  @Input()
  author: Author = new Author();
  errors: string[] = [];

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id');
      console.log(id);

      this.authorService.getAuthor(id).subscribe(author => {
        this.author = author;
        console.log('clicked on this author:', this.author);
      });
    });
  }

  onEdit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('clicked on author:', this.author);
    this.authorService.updateAuthor(this.author).subscribe(updatedAuthor => {
      console.log('updated author', updatedAuthor);
      this.author = new Author;

    },
      error => {
        console.log('error', error);
        this.errors = error.error;
      });
      this.router.navigateByUrl('/');
  }
}
