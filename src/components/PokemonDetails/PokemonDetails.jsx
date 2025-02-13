import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";

function PokemonDetails() {
  const [pokemonAllDetails, setPokemonAllDetails] = useState([]);

  const { id } = useParams();

  console.log("id is ", id);
  const pokemonDetails_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  async function getPokemonDetails() {
    const response = await axios.get(pokemonDetails_URL);
    const pokemonDetails = response.data;
    console.log("pokemon details", pokemonDetails);

    // const showPokemonDetails = pokemonDetails.map((detail) => {
    //   const pokemonDetails = detail;
    //   return {
    //     id: pokemonDetails.id,
    //     name: pokemonDetails.name,
    //     frontImage: pokemonDetails.sprites.front_default,
    //     backImage: pokemonDetails.sprites.back_default,
    //     weight: pokemonDetails.Weight,
    //   };
    // });

    setPokemonAllDetails(pokemonDetails);
  }

  console.log('pokemon all details are ', pokemonAllDetails)

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <div className="pokemonDetailsWrapper">
      <h1 className="pokemonDetailsTitle">Pokemon Details</h1>
      <div className="pokemonName">Name: {pokemonAllDetails.name}</div>
     <div className="pokemonAttributes">
     <div className="pokemonHeight">Height:{pokemonAllDetails.height} </div>
     <div className="pokemonWeight"> Weight: {pokemonAllDetails.weight}</div>
     </div>
     <div className="pokemonImages">
     <img className="pokemonBackImg" src={pokemonAllDetails.sprites.back_default} alt={pokemonAllDetails.name} />
     <img className="pokemonFrontImg" src={pokemonAllDetails.sprites.front_default} alt={pokemonAllDetails.name} />
     </div>
    </div>
  );
}

export default PokemonDetails;
