import {useState, useEffect} from 'react';
import PokemonList from './Components/PokemonList';
import axios from 'axios'
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(res => setPokemonList(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <PokemonList pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
