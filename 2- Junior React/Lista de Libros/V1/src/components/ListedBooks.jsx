import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../store/slice/librarySlice';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';

export const ListedBooks = () => {

    const { actualList } = useSelector((state) => state.library);
    const [parent, actualListDD, setActualListDD] = useDragAndDrop([]);
    const dispatch = useDispatch();

    useEffect(() => {
      setActualListDD(actualList);
    }, [actualList])

   const onHandleRemoveFromlist = (book) => {
      dispatch(removeFromList(book));
    }

  return (
    <section>
        <h3><strong style={{ color: '#2ecc71' }}>{actualList.length}</strong> Libros añadidos a la lista de lectura</h3>
        <ul className='books-list' ref={parent}>
            {actualListDD.map((book) => {
                return (
                  <li key={book.ISBN}>
                    <img src={book.cover} alt={book.title} className='book-cover' onClick={() => onHandleRemoveFromlist(book)} />
                  </li>
                )
            })}
        </ul>
    </section>
  )
}
