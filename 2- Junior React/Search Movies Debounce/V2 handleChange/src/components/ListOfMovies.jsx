import React from 'react'

export const ListOfMovies = ({ movies = [] }) => {

  return (
    movies?.map(( movie ) => (
        <ul key={ movie.id }>
            <li>
                <h4>{ movie.title }</h4>
                <p>{ movie.year }</p>
                <img src={ movie.url} alt={ movie.title } />
            </li>
        </ul>
        ))
  )
}
