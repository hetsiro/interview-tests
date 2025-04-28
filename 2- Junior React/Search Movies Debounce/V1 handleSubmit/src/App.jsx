import React, { useState } from 'react'
import { ShowMovies } from './components/ShowMovies';
import './App.css';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

export const App = () => {

    const [ sort, setSort ] = useState(false);
    const { search, setSearch, error } = useSearch();
    const { searchSubmitted, isSearched, movies, getMovies, loading, sortByTitle } = useMovies( error );

    const handleChange = ( event ) => {
        setSearch( event.target.value );
    }
    
    const handleSubmit = ( event ) => {
        event.preventDefault();
        getMovies(search);
    }

    const handleSort = () => {
        sortByTitle(sort);
        setSort( !sort );
    }

    return (
        <div className="search">
            <header>
            <form onSubmit={ handleSubmit }>
                <input type='text' value={ search } onChange={ handleChange } placeholder='Shrek 2, Interestellar, Stars Wars'></input>
                <button type='button' onClick={ handleSort } >Ordenar por título</button>
                <button type='submit'>Buscar</button>
            </form>
            {
                error
                    ? <h3 style={{ color: 'red' }}>{ error }</h3>
                    : <h3 style={{ color: 'green' }}>Puedes buscar tu película</h3>
            }
            </header>

            <main>
            {
                isSearched && <ShowMovies movies={ movies } search={ searchSubmitted } loading={ loading } />
            }
            </main>
        </div>
    )
}
