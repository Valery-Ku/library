import React from 'react';
import { Library, LibraryBook, DigitalBook } from './library-system';

const App: React.FC = () => {
  React.useEffect(() => {
    //Код проверки 
    const library = new Library();
    const book1 = new LibraryBook('Война и мир', 'Лев Толстой', 1869);
    library.addBook(book1);
    const book2 = new DigitalBook('Преступление и наказание', 'Фёдор Достоевский', 1866);
    library.addBook(book2);
    library.checkoutBook('Война и мир');
    library.checkoutBook('Преступление и наказание');
    library.checkoutBook('Неизвестная книга');
  }, []);

  return <div>Результаты выведены консоль браузера</div>;
};

export default App;