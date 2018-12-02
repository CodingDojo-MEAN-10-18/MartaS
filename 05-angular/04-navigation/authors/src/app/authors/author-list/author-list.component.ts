import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services';
import { Author } from '../../models';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = [...authors];
      console.log('author list log', this.authors);
    });
  }


  onCreate(author: Author) {
    console.log('creating author', author);
     this.authors.push(author);
     console.log('author array', this.authors);
  }


  onDelete(id: number) {
    console.log('deleting author', id);
    this.authorService.removeAuthor(id).subscribe(deletedAuthor => {
      console.log('removed author', deletedAuthor);
      this.authors = this.authors.filter(author => author._id !== deletedAuthor._id);
    });
  }

}
