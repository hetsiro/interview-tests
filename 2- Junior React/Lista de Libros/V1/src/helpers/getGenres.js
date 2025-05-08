
export const getGenres = ( books ) => {
    
    const uniqueGenres = [];

    books.forEach(( book ) => {
        
        if( !uniqueGenres.includes(book.genre) ) {
            uniqueGenres.push(book.genre);
        }

    });

    return uniqueGenres;
}