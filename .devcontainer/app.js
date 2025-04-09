function getJoke(){
    const jokeDiv = document.getElementById('joke');
    jokeDiv.innerHTML = 'Getting a fresh joke... 🎭';

    //laughter sound function
    function playLaugh()
    {
        const audio =  new Audio('laugh.mp3');
        audio.volume=0.8;
        audio.play();
    }
    
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
        // Step 1: Show the setup immediately
        jokeDiv.innerHTML = `<strong>${data.setup}</strong>`;
        
        // Step 2: After 1.5s, reveal the punchline
        setTimeout(() => {
            jokeDiv.innerHTML +=`<br>😄 <em>${data.punchline}</em>`;
            playLaugh()
        }, 2500); //wait 2500ms (2.5s)
    })
    .catch(error => {
        jokeDiv.innerHTML= 'Opps! Something went wrong';
        console.error(error);
    });
}