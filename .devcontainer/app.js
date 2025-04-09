function getJoke(){
 
    fetch('https://official-joke-api.appspot.com/random_joke', // fetch the data from this website.
    
    //js object    
        {
        headers: {                       //object name
            'Accept': 'application/json' //key:value pair
        }
    }//end of object
    )
    .then(response => response.json())   //wait for the joke to come back and json() turns into js object
    .then(data => {
        document.getElementById('joke'). innerHTML = `<strong>${data.setup}</strong> <br>😄 <em>${data.punchline}</em>`;
    })
    .catch(error => {
        document.getElementById('joke').innerHTML= 'Opps! Something went wrong';
        console.log(error);
    });
}