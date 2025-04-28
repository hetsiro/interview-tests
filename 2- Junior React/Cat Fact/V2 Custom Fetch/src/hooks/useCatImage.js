import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";



export const useCatImage = ( fact ) => {

    const [ image, setImage ] = useState(null);
    
    const refreshFact = () => {
        if( !fact ) return;

        const firstWord = fact.split(" ", 3).join(" ");
        const UrlImage = `https://cataas.com/cat/says/${firstWord}?json=true`;

        getFetch( UrlImage, 'url' )
            .then(( data ) => setImage( data ))
            .catch(( error ) => {throw new Error(`Error al refrescar facts ${error.message}`)})
    }
    
    useEffect(() => {
        refreshFact();
    }, [ fact ])

    return {
        image
    }
}