import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import  "./PokemonList.css";

function PokemonList() {
  const [pokemonview, setPokemonView] = useState([]);
  const default_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokedexURL, setPokedexURL] = useState(default_URL);
  const [nextURL, setNextURL] = useState(default_URL);
  const [prevURL, setPrevURL] = useState(default_URL);
  
  const pokemonApi_URL = "https://pokeapi.co/api/v2/pokemon";
  


  async function downloadPokemonList() {
    const response = await axios.get(pokedexURL);
    console.log("pokemon list", response.data)

    setNextURL(response.data.next);
    setPrevURL(response.data.previous);

    const pokemonList = response.data.results;
    const pokemonListPromise = pokemonList.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonListData = await axios.all(pokemonListPromise);
    console.log("pokemon list data", pokemonListData);

    const pokemonFinalList = pokemonListData.map((pokemonata) => {
      const pokemonData = pokemonata.data;
      return {
        Id: pokemonData.id,
        Name: pokemonData.name,
        Image: pokemonData.sprites.other.dream_world.front_default,
        types: pokemonData.types.map((type) => type.type.name),
      };
    });
    console.log("pokemon final list", pokemonFinalList);
    setPokemonView(pokemonFinalList);
  }

  useEffect(() => {
    downloadPokemonList();
  }, [pokedexURL]);
  return (
    <>
        <h3 className="listName">Pokemon List</h3>
        <div className="buttonWrapper">
            <button className="Btn" id="prevBtn" onClick={() => setPokedexURL(prevURL)}>Prev</button>
        <button className="Btn"  id="nextBtn" onClick={() => setPokedexURL(nextURL)}>Next</button>
        </div>
      <div className="pokemonListWrapper">
    
        {pokemonview.map((pk) => ( 
          <Pokemon  id={pk.Id} key={pk.Id} name={pk.Name} imageURL={pk.Image}   />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
