function getJoke(){
 
    fetch('https://icanhazdadjoke.com/', 
    {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke'). innerHTML = data.joke;
    })
    .catch(error => {
        document.getElementById('joke').innerHTML= 'Opps! Something went wrong';
        console.log(error);
    });
}