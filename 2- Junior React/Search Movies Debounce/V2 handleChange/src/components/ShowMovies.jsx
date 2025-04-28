import React from 'react'
import { ListOfMovies } from './ListOfMovies';

export const ShowMovies = React.memo(({ movies = [], search, loading }) => {

    const hasMovies = movies.length > 0;

    return (
        loading
            ? <h3>Loading...</h3>
            : hasMovies
                ? <ListOfMovies movies={ movies } />
                : <h1>{`No hay resultados con el nombre ${search}`}</h1>
  )
})
