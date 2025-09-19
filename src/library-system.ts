// Интерфейс IBook для описания книг
interface IBook {
  getTitle(): string;     // Метод для названия
  checkout(): void;       // Метод для выдачи книги
}

// Абстрактный класс Book
abstract class Book implements IBook {
  protected title: string;
  protected author: string;
  protected year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Метод для получения названия
  public getTitle(): string {
    return this.title;
  }

  // Абстрактный метод checkout
  abstract checkout(): void;
}

// Класс для бумажных книг
class LibraryBook extends Book {
  checkout(): void {
    console.log(`Книга "${this.title}" выдана на руки.`);
  }
}

// Класс для электронных книг
class DigitalBook extends Book {
  checkout(): void {
    console.log(`Книга "${this.title}" загружена на устройство.`);
  }
}

// Интерфейс для библиотеки
interface ILibrary {
  addBook(book: IBook): void;       // Добавляет книгу
  checkoutBook(title: string): void; // Ищет и выдаёт книгу по названию
}

// Класс Library
class Library implements ILibrary {
  private books: IBook[] = [];     // Приватный массив книг

  // Метод для добавления книги
  public addBook(book: IBook): void {
    this.books.push(book);
  }

  // Метод для выдачи книги по названию
  public checkoutBook(title: string): void {
    // Поиск книги по названию
    const foundBook = this.books.find((book) => book.getTitle() === title);
    
    if (foundBook) {
      // Если найдена
      foundBook.checkout();
    } else {
      // Если не найдена
      console.log(`Книга "${title}"`);
    }
  }
}

// Код для проверки (создание книг, добавление в библиотеку, выдача)
const library = new Library(); // Экземпляр библиотеки

// Создаём бумажную книгу
const book1 = new LibraryBook('Война и мир', 'Лев Толстой', 1869);
library.addBook(book1);  // Добавляем

// Создаём электронную книгу
const book2 = new DigitalBook('Преступление и наказание', 'Фёдор Достоевский', 1866);
library.addBook(book2);  // Добавляем

// Выдача по названию
library.checkoutBook('Война и мир');                //"Книга "Война и мир" выдана на руки."
library.checkoutBook('Преступление и наказание');  //"Книга "Преступление и наказание" загружена на устройство."

// Пример, когда не найдена
library.checkoutBook('Неизвестная книга'); //"Книга "Неизвестная книга" не найдена в библиотеке."

export { Book, LibraryBook, DigitalBook, Library };