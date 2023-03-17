import { Bookstore } from "./bookstore.js";
import { Book } from "./book.js";
import { Comic } from "./comic.js";

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
      `<h1 class="title">
      <i class="fa-sharp fa-regular fa-book"></i> ${bookstore1.getName()}
      </h1>`
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

  const createInput = (type, name) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    return input;
  };

  const createLabel = (text, input) => {
    const label = document.createElement("label");
    label.innerHTML = text;
    label.appendChild(input);
    return label;
  };

  const addBook = () => {
    const form = document.createElement("form");

    const titleInput = createInput("text", "title");
    const titleLabel = createLabel("Título:", titleInput);
    form.appendChild(titleLabel);

    const authorInput = createInput("text", "author");
    const authorLabel = createLabel("Autor:", authorInput);
    form.appendChild(authorLabel);

    const priceInput = createInput("text", "price");
    const priceLabel = createLabel("Precio:", priceInput);
    form.appendChild(priceLabel);

    const stockInput = createInput("text", "stock");
    const stockLabel = createLabel("Stock:", stockInput);
    form.appendChild(stockLabel);

    const yearInput = createInput("text", "year");
    const yearLabel = createLabel("Año:", yearInput);
    form.appendChild(yearLabel);

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Agregar libro";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const title = titleInput.value;
      const author = authorInput.value;
      const price = priceInput.value;
      const stock = stockInput.value;
      const year = yearInput.value;

      if (!title || !author || !price || !stock || !year) {
        alert("Por favor, ingrese todos los detalles del libro");
        return;
      }

      const existingBook = bookstore1
        .getBooks()
        .find((book) => book.title === title && book.author === author);
      if (existingBook) {
        alert("Este libro ya existe en la librería");
        return;
      }
      const book = new Book(title, author, price, stock, year);
      bookstore1.setBook(book);
      clearInputs();
    });
    form.appendChild(submitButton);

    const clearForm = () => {
      titleInput.value = "";
      authorInput.value = "";
      priceInput.value = "";
      stockInput.value = "";
      yearInput.value = "";
    };

    const clearButton = document.createElement("button");
    clearButton.innerHTML = "Limpiar formulario";
    clearButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearForm();
    });
    form.appendChild(clearButton);

    const mainContent = document.querySelector("#main-content");
    // @ts-ignore
    mainContent.innerHTML = "";
    // @ts-ignore
    mainContent.appendChild(form);

    function clearInputs() {
      const inputs = form.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
    }
  };

  const addComic = () => {
    const form = document.createElement("form");

    const titleInput = createInput("text", "title");
    const titleLabel = createLabel("Título:", titleInput);
    form.appendChild(titleLabel);

    const publisherInput = createInput("text", "publisher");
    const publisherLabel = createLabel("Editorial:", publisherInput);
    form.appendChild(publisherLabel);

    const priceInput = createInput("text", "price");
    const priceLabel = createLabel("Precio:", priceInput);
    form.appendChild(priceLabel);

    const stockInput = createInput("text", "stock");
    const stockLabel = createLabel("Stock:", stockInput);
    form.appendChild(stockLabel);

    const issueInput = createInput("text", "issue");
    const issueLabel = createLabel("Edición:", issueInput);
    form.appendChild(issueLabel);

    const yearInput = createInput("text", "year");
    const yearLabel = createLabel("Año:", yearInput);
    form.appendChild(yearLabel);

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Agregar cómic";
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const title = titleInput.value;
      const publisher = publisherInput.value;
      const price = priceInput.value;
      const stock = stockInput.value;
      const issue = issueInput.value;
      const year = yearInput.value;

      if (!title || !publisher || !price || !stock || !issue || !year) {
        alert("Por favor, ingrese todos los detalles del cómic");
        return;
      }

      const existingComic = bookstore1
        .getComics()
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
      clearInputs();
    });
    form.appendChild(submitButton);

    const clearForm = () => {
      titleInput.value = "";
      publisherInput.value = "";
      priceInput.value = "";
      stockInput.value = "";
      issueInput.value = "";
      yearInput.value = "";
    };

    const clearButton = document.createElement("button");
    clearButton.innerHTML = "Limpiar formulario";
    clearButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearForm();
    });
    form.appendChild(clearButton);

    const mainContent = document.querySelector("#main-content");
    // @ts-ignore
    mainContent.innerHTML = "";
    // @ts-ignore
    mainContent.appendChild(form);

    function clearInputs() {
      const inputs = form.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
    }
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
    const comics = bookstore1.getComics();
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
      mainContent.innerHTML = "<p>No hay cómics en la librería</p>";
    }
  };

  initialize();
})();
