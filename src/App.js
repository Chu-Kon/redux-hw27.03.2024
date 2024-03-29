import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookToCart, removeBookFromCart, removeFromBooks, addNewBook } from './store/slices/booksSlice';
import { addToCart, removeFromCart } from './store/slices/cartSlice';

function App() {
  const books = useSelector((state) => state.books.books);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [newBookName, setNewBookName] = useState('');

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  const handleRemoveFromBooks = (bookId) => {
    dispatch(removeFromBooks(bookId));
  };

  const handleAddNewBook = () => {
    if (newBookName.trim() !== '') {
      const newBook = {
        id: Math.random(), 
        name: newBookName.trim(),
      };
      dispatch(addNewBook(newBook));
      setNewBookName('');
    }
  };

  console.log('Корзина:', cart);

  return (
    <div className="App">
      <h1>Магазин книг</h1>
      <h2>Список книг:</h2>

      <div>
        <input type="text" value={newBookName} onChange={(e) => setNewBookName(e.target.value)} />
        <button onClick={handleAddNewBook}>Добавить новую книгу</button>
      </div>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name}
            <button onClick={() => handleAddToCart(book)}>Купить</button>
            <button onClick={() => handleRemoveFromBooks(book.id)}>Удалить книгу</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Корзина:</h2>
        <ul>
          {cart.map((book) => (
            <li key={book.id}>
              Книга: {book.name}
              <button onClick={() => handleRemoveFromCart(book.id)}>Удалить из корзины</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
