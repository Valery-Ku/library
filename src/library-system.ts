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
      console.log(`Книга "${title}"
Задача: Создать систему управления библиотекой
Вам необходимо создать систему управления библиотекой. Ваша задача включает в себя следующие шаги:
1.  Создайте абстрактный класс Book, который содержит следующие свойства:
    
    *   title: название книги
        
    *   author: автор книги
        
    *   year: год издания
        
    *   checkout(): абстрактный метод, который будет переопределен в дочерних классах
        
2.  Данные о книге должны передаваться в конструктор класса при создании экземпляра. Все поля класса должны быть защищенными.
    
3.  Создайте интерфейс IBook, описывающий класс Book.
    
4.  В интерфейсе необходимо предусмотреть свойство, дающее возможность получать название книги.
    
5.  Создайте два класса LibraryBook и DigitalBook, которые наследуют класс Book. Эти классы должны реализовывать метод checkout() и интерфейс IBook.
    
6.  Метод checkout() в классе LibraryBook должен выводить сообщение, что книга выдана на руки, а в классе DigitalBook - что книга загружена на устройство.
    
7.  Создайте класс Library, который содержит массив книг. В этом классе должны быть следующие методы:
    
    *   addBook(book: Book): добавляет книгу в библиотеку
        
    *   checkoutBook(title: string): осуществляет выдачу книги по названию
        
8.  В классе Library необходимо избавиться от зависимости от класса Book через интерфейс.
    
9.  Не забывайте, что прямой доступ к данным в инстантах классов должен быть запрещен. Вся работы с данными в классах должна производиться только через методы классов.
    
10.  Метод checkoutBook(title: string) должен выполнять поиск книги по названию и вызывать у найденной книги метод checkout(). Выбор действия, если книга не найдена, остается за вами.
    
11.  Для проверки напишите код, создающий две книги, одну электронную и одну бумажную. Добавьте эти книги в библиотеку. Используя экземпляр класса Library выполните метод checkoutBook() для обеих книг, используя их названия. Например: libraryInstant.checkoutBook(‘Война и мир’). В консоли должны быть выведены соответствующие для каждой книги сообщения.

не найдена в библиотеке.`);
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