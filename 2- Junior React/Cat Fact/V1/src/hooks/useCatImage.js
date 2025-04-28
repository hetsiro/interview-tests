import { useEffect, useState } from "react";
import { getImage } from "../helpers/getImage";



export const useCatImage = ( fact ) => {

    const [ image, setImage ] = useState(null);
    
    const refreshFact = () => {
        if( !fact ) return;
        getImage( fact )
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