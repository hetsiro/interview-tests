import { ShowMovies } from './components/ShowMovies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { useEffect } from 'react';
import { useDebounce } from './helpers/useDebounce';
import './App.css';

export const App = () => {

    const { search, updateSearch, error } = useSearch();
    const { movies, getMovies, loading, updateLoading, updateSort } = useMovies( error );

    const debouncedSearch = useDebounce(search, 1500)
    

    const handleChange = ( event ) => {
        updateLoading(true);
        updateSearch( event.target.value );
    }
    
    const handleSubmit = ( event ) => {
        event.preventDefault();
    }

    const handleSort = () => {
        updateSort(( sort ) => !sort );
    }

    useEffect(() => {
        getMovies(debouncedSearch);
    }, [debouncedSearch])
    

    return (
        <div className="search">
            <header>
            <form onSubmit={ handleSubmit }>
                <input type='text' value={ search } onChange={ handleChange } placeholder='Shrek 2, Interestellar, Stars Wars'></input>
                <button type='button' onClick={ handleSort } >Ordenar por título</button>
            </form>
            </header>

            <main>
            {
                error
                ? <h3 style={{ color: 'red' }}>{ error }</h3>
                : <ShowMovies movies={ movies } search={ debouncedSearch } loading={ loading } />
            }
            </main>
        </div>
    )
}
