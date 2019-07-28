const pokemonURL = "http://localhost:3000/pokemon"

const fetchPokemon = () => fetch(pokemonURL).then(resp => resp.json())

const postPokemon = (newPokemon) => {
    debugger
    return fetch(pokemonURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(convertPokemon(newPokemon))
    }).then(resp => resp.json())
}

const convertPokemon = convertPokemon => {
    const pokemon = {
        name: convertPokemon.name,
        sprites: {front: convertPokemon.frontUrl, back: convertPokemon.backUrl},
        stats: [{name: "hp", value: convertPokemon.hp}]
    }
    debugger
    return pokemon
}

export default  {
    fetchPokemon,
    postPokemon
}