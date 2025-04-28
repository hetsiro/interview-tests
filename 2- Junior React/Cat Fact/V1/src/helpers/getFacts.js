
export const getFacts = () => {

    const UrlFact = "https://catfact.ninja/fact";

    return fetch(UrlFact)
        .then((response) => {
            if (!response.ok) throw new Error('Al parecer la página de gatitos está caída :(');
            return response.json();
        })
        .then((data) => {
            return data.fact;
        })
        .catch((error) => { throw new Error('URL incorrecto', error.message)})
}