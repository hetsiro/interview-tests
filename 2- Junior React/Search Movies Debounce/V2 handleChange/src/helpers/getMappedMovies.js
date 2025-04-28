
export const getMappedMovies = ( data ) => {

    if(data.Search?.length > 0)
    {
        const moviesMapped = data.Search.map(( movie ) => (
        {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            url: movie.Poster
        }))

        return moviesMapped;
    }
        return data;
}
