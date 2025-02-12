import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css'

function Pokedex(){
    return<>
    <h1 className="pokedexTitle">POKEDEX</h1>
    <Search/>
    <PokemonList/>
    </>
}

export default Pokedex;