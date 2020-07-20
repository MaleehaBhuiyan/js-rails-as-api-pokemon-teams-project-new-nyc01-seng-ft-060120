const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", function(){

    //variables 
    const main = document.querySelector("main")
    //console.log(main)


    //fetch request 

    // const getPokemonData = () => {
    // fetch(POKEMONS_URL)
    // .then(response => response.json())
    // .then(pokemonData => renderCard(pokemonData))
    // } 
    
    const getTrainersData = () => {
        fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(trainersData => renderTrainers(trainersData))

    }
    
    //functions 

    const renderTrainers = (trainersData) => {
        trainersData.forEach(trainer => {
         console.log(trainer.pokemons)
        })
    }

    //event listeners 


    //execution 

    // getPokemonData()
    getTrainersData()

})







/*
1) When a user loads the page, they should see all trainers, with their current team of Pokemon.
    - JS 
        √* Fetch

        √* select main 
        * .innerHTML copy and paste 
            - string interpolate 
            - render the whole card onto the DOM --> append  

    -Rails 
        * def index in controller 

2) Whenever a user hits "Add Pokemon" and they have space on their team, they should get a new Pokemon.


3) Whenever a user hits "Release Pokemon" on a specific Pokemon team, that specific Pokemon should be released from the team.


*/
