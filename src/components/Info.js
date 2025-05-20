import data from "../db/pokemons.json";
import { useParams } from "react-router-dom";

export default function Info() {
    const id = useParams().id;
    const pokemon = data.pokemons.find(p => p.id === parseInt(id));
    return (
        <div>
            <div className="img-wrapper">
            <img src={pokemon.img}
                alt={pokemon.name}></img>
            </div>
            <h2>
                {pokemon.name}
            </h2>
            <table>
            <tbody>
                <tr>
                <td>height</td>
                <td>{pokemon.height} dm</td>
                </tr>
                <tr>
                <td>weight</td>
                <td>{pokemon.weight} hg</td>
                </tr>
                <tr>
                <td>types</td>
                <td>{pokemon.types}</td>
                </tr>
                <tr>
                <td>base experience</td>
                <td>{pokemon.baseExperience}</td>
                </tr>
                <tr>
                <td>abilities</td>
                <td>{pokemon.abilities}</td>
                </tr>
                <tr>
                <td>hp</td>
                <td>{pokemon.hp}</td>
                </tr>
                <tr>
                <td>attack</td>
                <td>{pokemon.attack}</td>
                </tr>
                <tr>
                <td>defense</td>
                <td>{pokemon.defense}</td>
                </tr>
                <tr>
                <td>special-attack</td>
                <td>{pokemon.specialAttack}</td>
                </tr>
                <tr>
                <td>special-defense</td>
                <td>{pokemon.specialDefense}</td>
                </tr>
                <tr>
                <td>speed</td>
                <td>{pokemon.speed}</td>
                </tr>
            </tbody>
            </table>

        </div>      
    )
}