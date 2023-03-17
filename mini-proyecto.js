import { Bookstore } from "./bookstore.js";
(function () {
  // @ts-ignore
  const bookstore1 = new Bookstore("Bookstore", "Calle 1");
  const sidebar = document.getElementById("sidebar");
  const menu = ["Show Books", "Show Comics", "Add book", "Add Comic"];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  };
  const printBookstoreName = () => {
    // @ts-ignore
    sidebar.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="title">
        <i class="fas fa-book"></i> ${bookstore1.getName()}
      </h2>`
    );
  };
  const createMenu = () => {
    return menu
      .map((elem, index) => {
        return `<li class="menu-item"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`;
      })
      .join("");
  };

  const displayMenu = () => {
    // @ts-ignore
    sidebar.insertAdjacentHTML(
      "beforeend",
      `<ul class="menu">${createMenu()}</ul>`
    );
  };

  const menuFunctionality = () => {
    const items = document.querySelectorAll(".menu-item");
    items.forEach((item) => {
      item.addEventListener("click", (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu

        // @ts-ignore
        const { id } = event.target;

        switch (id) {
          case "0":
            showBooks();
            break;
          case "1":
            showComics();
            break;
          case "2":
            addBook();
            break;
          case "3":
            addComic();
            break;
          default:
            alert("Esa opción no existe");
            break;
        }
      });
    });
  };

  class Book {
    constructor(title, author, price, stock, year) {
      this.title = title;
      this.author = author;
      this.price = price;
      this.stock = stock;
      this.year = year;
    }
  }

  const addBook = () => {
    const title = prompt("Titulo");
    const author = prompt("Autor");
    const price = prompt("Precio");
    const stock = prompt("Stock");
    const year = prompt("Año");

    if (!title || !author || !price || !stock || !year) {
      alert("Introduzca los datos para todos los campos");
      return;
    }

    // @ts-ignore
    const existingBook = bookstore1
      .getBooks()
      .find((book) => book.title === title && book.author === author);
    if (existingBook) {
      alert("Este libro ya existe en la librería");
      return;
    }
    // @ts-ignore
    const book = new Book(title, author, price, stock, year);
    // @ts-ignore
    bookstore1.setBook(book);
  };

  class Comic {
    constructor(title, publisher, price, stock, issue, year) {
      this.title = title;
      this.publisher = publisher;
      this.price = price;
      this.stock = stock;
      this.issue = issue;
      this.year = year;
    }
  }

  const addComic = () => {
    const title = prompt("Título");
    const publisher = prompt("Editorial");
    const price = prompt("Precio");
    const stock = prompt("Stock");
    const issue = prompt("Número de edición");
    const year = prompt("Año");

    if (!title || !publisher || !price || !stock || !issue || !year) {
      alert("Por favor, ingrese todos los detalles del cómic.");
      return;
    }

    const existingComic = bookstore1
      .getComic()
      .find(
        (comic) =>
          comic.title === title &&
          comic.publisher === publisher &&
          comic.issue === issue
      );
    if (existingComic) {
      alert("Este cómic ya existe en la librería");
      return;
    }

    const comic = new Comic(title, publisher, price, stock, issue, year);
    bookstore1.setComic(comic);
  };

  const showBooks = () => {
    console.log("Show Books");
    const books = bookstore1.getBooks();
    const mainContent = document.getElementById("main-content");
    // @ts-ignore
    mainContent.innerHTML = "";
    if (books.length > 0) {
      books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
          <h3 class="book-title">Titulo:${book.title}</h3>
          <p class="book-author">Autor:${book.author}</p>
          <p class="book-price">Precio:${book.price}</p>
          <p class="book-stock">Stock:${book.stock}</p>
          <p class="book-year">Año:${book.year}</p>
        `;
        // @ts-ignore
        mainContent.appendChild(bookElement);
      });
    } else {
      // @ts-ignore
      mainContent.innerHTML = "<p>No hay libros en la librería</p>";
    }
  };

  const showComics = () => {
    console.log("Show Comics");
    const comics = bookstore1.getComic();
    const mainContent = document.getElementById("main-content");
    // @ts-ignore
    mainContent.innerHTML = "";
    if (comics.length > 0) {
      comics.forEach((comic) => {
        const comicElement = document.createElement("div");
        comicElement.classList.add("comic");
        comicElement.innerHTML = `
          <h3 class="comic-title">Titulo:${comic.title}</h3>
          <p class="comic-publisher">Editorial:${comic.publisher}</p>
          <p class="comic-price">Precio:${comic.price}</p>
          <p class="comic-stock">Stock:${comic.stock}</p>
          <p class="comic-issue">Edición:${comic.issue}</p>
          <p class="comic-year">Año:${comic.year}</p>
        `;
        // @ts-ignore
        mainContent.appendChild(comicElement);
      });
    } else {
      // @ts-ignore
      mainContent.innerHTML = "<p>No hay cómics en la tienda</p>";
    }
  };

  initialize();
})();
