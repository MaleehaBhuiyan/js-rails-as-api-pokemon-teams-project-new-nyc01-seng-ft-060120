const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", function(){

    //variables 
    const main = document.querySelector("main")
    //console.log(main)


    //fetch request 

    const getPokemonData = () => {
    fetch(POKEMONS_URL)
    .then(response => response.json())
    .then(pokemonData => console.log(pokemonData))
    } 
    

    //functions 

    const renderPokemons = (pokemonData, trainerData) => {
        pokemonData.forEach(pokemon => {
            const div = document.createElement("div")
            div.className = "card"
            div.dataset.data.id = `{pokemon.id}`


            <div class="card" data-id="1"><p>Prince</p>
                <button data-trainer-id="1">Add Pokemon</button> 
                <ul>
                    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
            <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
                <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
                <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
            <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
                </ul>
            </div>
  
        });
    }


    //event listeners 


    //execution 

    getPokemonData()


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
