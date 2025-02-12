import './Pokemon.css';
function Pokemon({name, imageURL}){
return(
    <div className="pokemonWrapper">
        <div className="pokemonName">{name}</div>
        <img  className="pokemonImage" src={imageURL} alt={name} />
    </div>
)

}

export default Pokemon;