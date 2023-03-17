export class Bookstore {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
    this.comics = [];
  }

  getName() {
    return this.name;
  }

  getBooks() {
    return this.books;
  }

  getComics() {
    return this.comics;
  }

  setBook(book) {
    this.books.push(book);
  }

  setComic(comic) {
    this.comics.push(comic);
  }
}
