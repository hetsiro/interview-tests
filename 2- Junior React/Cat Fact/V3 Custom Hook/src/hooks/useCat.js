import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";

export const useCat = ( url, resource, dependency ) => {

    const [ data, setData ] = useState(null);
    
    const refreshData = () => {
        if( url )
        getFetch( url, resource )
            .then(( data ) => setData( data ))
            .catch(( error ) => {throw new Error(`Error al refrescar facts ${error.message}`)})
    }
    
    useEffect(() => {
        refreshData();
    }, dependency)

    return {
        data,
        refreshData
    }
}