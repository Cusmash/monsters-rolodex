import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component { //React.Component si no se llama arriba
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  } 

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={e => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    )
  }
}

export default App;
