import { useState } from "react";
import { getMappedMovies } from "../helpers/getMappedMovies";

export const useMovies = ( error ) => {

    const [ searchSubmitted, setSearchSubmitted ] = useState('');
    const [ isSearched, setIsSearched ] = useState(false);
    const [ movies, setMovies ] = useState();
    const [ loading, setLoading ] = useState(false);

    const getMovies = (search) => {

        if( error ) return;

        const apiKey = "21b408ac";

        setSearchSubmitted(search);
        setIsSearched(true);
        setLoading(true);
        
        // Fetch de películas
        const url = `http://www.omdbapi.com/?apikey=${ apiKey }&s=${ search }`

        fetch(url)
            .then(( response ) => response.json())
            .then(( data ) => {
                setMovies(getMappedMovies( data ));
                setLoading(false);
            })
    }

    
    const sortByTitle = ( sort ) => {

        const sortedMoviesByTitle = [...movies];

        if( sort ){
            sortedMoviesByTitle.sort(( a , b ) => a.title.localeCompare(b.title))
        } else {
            sortedMoviesByTitle.sort(( a , b ) => b.title.localeCompare(a.title))
        }

        setMovies(sortedMoviesByTitle);
        
    }
    
  return {
    searchSubmitted,
    isSearched,
    movies,
    getMovies,
    loading,
    sortByTitle
  }
}
