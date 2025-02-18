import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    
     <>
      <h1 className="pokedexTitle">POKEDEX</h1>
      <Search updateSearchTerm={setSearchTerm} />
{searchTerm ? <PokemonDetails key={searchTerm} pokemonName={searchTerm} /> : <PokemonList />}
     
     </>
    
  );
}

export default Pokedex;
