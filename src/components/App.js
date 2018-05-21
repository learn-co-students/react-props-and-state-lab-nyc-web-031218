import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  componentDidMount = () => {
    return fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => this.setState({pets}))
  }

  changeFilters = (typeStr) => {
    if(typeStr !== "all"){
      this.setState({filters: {type: typeStr}})
      fetch(`/api/pets?type=${typeStr}`)
        .then(resp => resp.json())
        .then(pets => this.setState({pets}))
    }
    else{
      this.setState({filters: {type: typeStr}})
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(pets => this.setState({pets}))
  }}



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeFilters={this.changeFilters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
