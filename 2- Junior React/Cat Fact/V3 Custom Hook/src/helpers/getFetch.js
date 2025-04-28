
export const getFetch = ( url, resource ) => {

    return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('Al parecer la página está caída :(');
            return response.json();
        })
        .then((data) => {
            return data[resource];
        })
        .catch((error) => { throw new Error(`URL incorrecto${error.message}`) })
}