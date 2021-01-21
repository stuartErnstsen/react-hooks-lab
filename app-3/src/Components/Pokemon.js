import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [props.match.params.name])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <button onClick={props.history.goBack}>BACK TO LIST</button>
        </div>
    )
}

export default Pokemon;