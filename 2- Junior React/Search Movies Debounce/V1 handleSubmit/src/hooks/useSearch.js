import { useEffect, useState } from 'react'

export const useSearch = () => {
    
    const [ search, setSearch ] = useState('');
    const [ error, setError ] = useState('');

    useEffect(() => {

        if(search === '') {
            setError('Busca tu película');
            return;
        }

        if(search.length < 3) {
            setError('Debe tener al menos 3 letras');
            return;
        }
        
        setError(false);


    }, [search])

  return {
    search,
    setSearch,
    error
  }
}
