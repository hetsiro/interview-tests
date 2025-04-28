
export const getImage = ( fact ) => {

    const firstWord = fact.split(" ")[0];
    const UrlImage = `https://cataas.com/cat/says/${firstWord}?json=true`;

    return fetch(UrlImage)
        .then((response) => {
            if (!response.ok) throw new Error('Al parecer la página generadora de imágenes de gatitos está caída :(')
            return response.json();
        })
        .then((data) => {
            return data.url;
        })
        .catch((error) => { throw new Error('URL incorrecto', error.message) })
}