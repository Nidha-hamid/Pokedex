import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="pokemon/:id" element={<PokemonDetails/>} />
    </Routes>
  )
}

export default App;
