import Pokemon from './Pokemon';

const PokemonList = props => {
    return (
        <div>
            {props.pokemonList.map((poke,i)=> {
                return <Pokemon poke={poke} key={i} />
            })}
        </div>
    )
}

export default PokemonList;