import { Link } from 'react-router-dom';
import './Pokemon.css';
function Pokemon({name, id, imageURL}){

   
return(
    <Link to={`/pokemon/${id}`} className="pokemonWrapper">
        <div className="pokemonName">{name}</div>
        <img  className="pokemonImage" src={imageURL} alt={name} />
    </Link>
)

}

export default Pokemon;