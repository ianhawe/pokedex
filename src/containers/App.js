import React, { Component } from "react";
import CardList from "../components/CardList";
import { pokemons } from "../pokemons";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !pokemons.length ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <h1>Pokedex!</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList pokemons={filteredPokemon} />
        </Scroll>
      </div>
    );
  }
}
export default App;
