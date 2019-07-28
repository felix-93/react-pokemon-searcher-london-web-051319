import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import API from '../adapters/API'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: "",
    highHP: false
  }

  componentDidMount = () => {
    API.fetchPokemon().then(pokemons => this.setState({pokemons}))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  filterPokemon = () => this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
                                          .filter(pokemon => this.state.highHP ? pokemon.stats[5].value > 70 : true)

  createPokemon = newPokemon => {
    API.postPokemon(newPokemon)
      .then(pokemon => this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      }))
  }

  highHPtoggle = () => {
    this.setState({
      highHP: !this.state.highHP
    })
  }


  render() {
    const pokemons = this.filterPokemon()
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <button onClick={this.highHPtoggle}> Only high HP </button>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={pokemons} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
