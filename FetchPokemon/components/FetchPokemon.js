import React,{useState} from 'react'

const FetchPokemon =() =>{
    const [state,setState] = useState({
        pokemon:[]
    })
    const ClickHandler =()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
            setState({
                pokemon:response.results
            });
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <div>
            <button onClick={ClickHandler}>Fetch Pokemon</button>
            {state.pokemon.map((index,i)=>(<li key={i}>{index.name}</li>))}
        </div>
    )
}

export default FetchPokemon;
