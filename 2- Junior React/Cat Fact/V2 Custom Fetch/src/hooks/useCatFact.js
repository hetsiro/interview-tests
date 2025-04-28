import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";



export const useCatFact = () => {

    const [ fact, setFact ] = useState(null);
    const UrlFact = "https://catfact.ninja/fact";
    
    const refreshFact = () => {
        getFetch(UrlFact, 'fact')
            .then(( data ) => setFact( data ))
            .catch(( error ) => {throw new Error(`Error al refrescar facts ${error.message}`)})
    }
    
    useEffect(() => {
        refreshFact();
    }, [])

    return {
        fact,
        refreshFact
    }
}