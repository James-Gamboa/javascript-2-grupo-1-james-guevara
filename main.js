class Bookstore {
  #bookstoreName;
  // @ts-ignore
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }


  // getters
  get getBooks() {
    return this.#books;
  }

  get getComics() {
    return this.#comics;
  }

  get getName() {
    return this.#bookstoreName
  }

  // setters
  // @ts-ignore
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }

  // @ts-ignore
  set setAddress(address) {
    this.#address = address;
  }

  // @ts-ignore
  set setBooks(book) {
    this.#books.push(book);
  }

  // @ts-ignore
  set setComics(comic) {
    this.#comics.push(comic);
  }
}

class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;
  
  constructor(title, author, price, stock, year) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#stock = stock;
    this.#year = year;
  }

  getInfo() {
    return {
      title: this.#title,
      auhor: this.#author,
      price: this.#price,
      year: this.#year,
      stock: !this.#stock ? 'No hay ejemplares disponibles' : this.#stock
    }
  }

  // setters
  // @ts-ignore
  set setStock(stock) {
    this.#stock = stock;
  }

  // @ts-ignore
  set setYear(year) {
    this.#year = year;
  }
}

class Comic extends Book {
  #illustrator;
  #publisher;
  #volume;
  constructor(title, author, price, stock, year, illustrator, publisher, volume) {
    super(title, author, price, stock, year);
    this.#illustrator = illustrator;
    this.#publisher = publisher;
    this.#volume = volume;
  }

  getInfo () {
    const info = super.getInfo(); 
    return {
      ...info,
      illustrator: this.#illustrator,
      publisher: this.#publisher,
      volume: this.#volume
    }
  }
}

const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');

// const addBook = () => {
//   const book = new Book('El principito', 'Antoine de Saint', 100, 10, 1943);
//   bookstore1.setBooks = book.getInfo();
//   console.log('Add book')
// } 

// const addComic = () => {
//   const comic = new Comic('Batman', 'bob kane', 200, 5, '1939', 'Bob kane', 'DC Comics', 1);
//   bookstore1.setComics = comic.getInfo();
//   console.log('Add Comic')
// }

// const showProducts = () => {
//   console.log('Books')
//   console.log(bookstore1.getBooks);

//   console.log('Comics')
//   console.log(bookstore1.getComics);
// }

const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

const printBookstoreName = () => {
  // @ts-ignore
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="title">
      ${bookstore1.getName}
    </h2>`
  )
}

function createMenu() {
  const ul = document.createElement('ul');

  for (const item of menu) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
  // @ts-ignore
  sidebar.appendChild(ul);
}

printBookstoreName();
createMenu();

// ** TAREA **
// Crear una función que se encargué de crear el menu, iterando sobre la lista menu (línea 125)
// Debe generarse un element html tipo ul, y dentro de ese ul un li para cada elemento lista; Puede ver el ejemplo de lo que debe crear en el html 
