import { Link, useParams } from "react-router-dom";
import "./PokemonDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";

function PokemonDetails({ pokemonName }) {
  const [pokemonAllDetails, setPokemonAllDetails] = useState([]);

  const { id } = useParams();

  console.log("id is ", id);
  const pokemonDetails_URL = `https://pokeapi.co/api/v2/pokemon/`;

  async function getPokemonDetails() {
   try {
    const response = await axios.get(
      pokemonDetails_URL + (pokemonName ? pokemonName : id)
    );
    const pokemonDetails = response.data;
    console.log("pokemon details", pokemonDetails);

    setPokemonAllDetails(pokemonDetails);
   } catch (error) {
    console.log('Not a Valid Pokemon Name')
    
   }
  }

  console.log("pokemon all details are ", pokemonAllDetails);

  useEffect(() => {
    getPokemonDetails();
  }, [id, pokemonName]);

  return (
    <>
      <Link to="/" className="backBtn">
        Home
      </Link>
      <div className="pokemonDetailsWrapper">
        <h1 className="pokemonDetailsTitle">Pokemon Details</h1>
        <div className="pokemonName">Name: {pokemonAllDetails.name}</div>
        <div className="pokemonAttributes">
          <div className="pokemonHeight">
            Height:{pokemonAllDetails?.height}{" "}
          </div>
          <div className="pokemonWeight">
            {" "}
            Weight: {pokemonAllDetails?.weight}
          </div>
        </div>
        <div className="pokemonImages">
          <img
            className="pokemonBackImg"
            src={pokemonAllDetails?.sprites?.back_default}
            alt={pokemonAllDetails.name}
          />
          <img
            className="pokemonFrontImg"
            src={pokemonAllDetails?.sprites?.front_default}
            alt={pokemonAllDetails.name}
          />
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
