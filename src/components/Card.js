import pokemon from "../db/pokemons.json";
import { Link } from 'react-router-dom';

export default function Card() {
    return (
        <div id = "card-wrapper">
            {pokemon.pokemons.map(pokemon => (
                <main>
                    <Link className="card" key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                        <div className="img-wrapper">
                            <img src={pokemon.img}
                                alt={pokemon.name}/>
                        </div>
                        <div className="info-wrapper">
                            <h2>{pokemon.name}</h2>
                            <p>height: {pokemon.height} dm</p>
                            <p>weight: {pokemon.weight} hg</p>
                            <p>types: {pokemon.types}</p>
                        </div>
                    </Link>
                </main>
            ))}
        </div>
    )
}

