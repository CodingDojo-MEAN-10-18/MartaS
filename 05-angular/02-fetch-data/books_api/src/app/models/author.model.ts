export class Author {
  id: number;
  fname: string;
  lname: string;
  country: string;
  birthdate: Date;
  books: string[];

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
