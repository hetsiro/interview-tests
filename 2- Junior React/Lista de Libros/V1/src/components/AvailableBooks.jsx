import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../store/slice/librarySlice';

export const AvailableBooks = () => {

    const { sortedBooks } = useSelector((state) => state.library);
    const dispatch = useDispatch();

    const onHandleAddToList = (book) => {
        dispatch(addToList(book));
      }

  return (
    <section >
        <h3><strong style={{ color: '#2ecc71' }}>{sortedBooks.length}</strong> Libros disponibles</h3>
        <ul className='books-list'>
        {sortedBooks.map((book) => {
            return (
            <li key={book.ISBN}>
                <img src={book.cover} alt={book.title} className='book-cover' onClick={() => onHandleAddToList(book)} />
            </li>
            )
        })}
        </ul>
    </section>
  )
}
