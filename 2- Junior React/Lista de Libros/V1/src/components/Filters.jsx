import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByFilters } from '../store/slice/librarySlice';

export const Filters = () => {

  const { genres } = useSelector((state) => state.library)
  const dispatch = useDispatch();
  const inputGenresRef = useRef();
  const inputPagesRef = useRef();
  const inputSearchRef = useRef();

  const onHandleFilter = () => {
    const inputGenres = inputGenresRef.current.value;
    const inputPages = inputPagesRef.current.value;
    const inputSearch = inputSearchRef.current.value;
    dispatch(searchByFilters({ inputGenres, inputPages, inputSearch }));
  }

  return (
    <form>
      <fieldset className='container-fieldset'>
        <legend>Filtros de búsqueda</legend>
        <div>
          <label htmlFor='genre-select'>Filtrar por género:</label>
          <select name='genres' onChange={onHandleFilter} ref={inputGenresRef}>
            {genres.map((genre) =>
              <option key={genre} value={genre} >{genre}</option>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="page-select">Filtrar por páginas:</label>
          <input type="text" placeholder="43" onChange={onHandleFilter} ref={inputPagesRef} />
        </div>
        <div>
          <label htmlFor="page-select">Filtrar por nombre:</label>
          <input type='text' placeholder='Harry Potter' onChange={onHandleFilter} ref={inputSearchRef} />
        </div>
      </fieldset>
    </form>
  )
}
