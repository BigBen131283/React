fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response);
        // (Erreur client) 400 bad request, 401 unauthorized, 404 not found
        // (Erreur server) 500 internal server error, 503 Service unavailable
        if(!response.ok) throw new Error(`Erreur ${response.status}`)
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })