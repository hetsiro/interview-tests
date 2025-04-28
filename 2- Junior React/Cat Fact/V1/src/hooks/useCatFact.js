import { useEffect, useState } from "react";
import { getFacts } from "../helpers/getFacts";



export const useCatFact = () => {

    const [ fact, setFact ] = useState(null);
    
    const refreshFact = () => {
        getFacts()
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