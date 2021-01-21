import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
            .then(res => setPokemonList(res.data.results))
    }, [])

    return (
        <div>
            {pokemonList.map(poke => {
                return <Link to={`/pokemon/${poke.name}`} key={poke.name} ><h2>{poke.name}</h2></Link>
            })}
        </div>
    )
}

export default PokemonList;