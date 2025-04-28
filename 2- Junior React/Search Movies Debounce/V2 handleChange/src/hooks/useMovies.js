import { useMemo, useState } from "react";
import { getMappedMovies } from "../helpers/getMappedMovies";
import { fetchMovies } from "../helpers/fetchMovies";

export const useMovies = ( error ) => {

    const [ sort, updateSort ] = useState(false);
    const [ movies, setMovies ] = useState();
    const [ loading, updateLoading ] = useState(false);

    const getMovies = async(search) => {

        if( error ) return;

        const API_KEY = "21b408ac";

        updateLoading(true);
        
        // Fetch de películas
        const url = `http://www.omdbapi.com/?apikey=${ API_KEY }&s=${ search }`

        const data = await fetchMovies(url);
        setMovies(getMappedMovies( data ));
        updateLoading(false);
    }

    
    const sortedMoviesByTitle = useMemo(() => {

        if( !( movies?.length > 0) ) return;

        const sortedMoviesByTitle = [...movies];

        if( sort ){
            return sortedMoviesByTitle.sort(( a , b ) => a.title.localeCompare(b.title))
        } else {
            return movies;
        }
        
    },[ sort, movies ])
    
  return {
        movies: sortedMoviesByTitle,
        getMovies,
        loading,
        updateLoading,
        updateSort
    }
}
