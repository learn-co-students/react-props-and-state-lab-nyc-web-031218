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

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }})
    }

  onFindPetsClick = () => {
    switch (this.state.filters.type) {
      default:
        fetch('/api/pets')
        .then(res => res.json())
        .then(json => this.setState({
          pets: json
        }))
        break

      case "dog":
        fetch('/api/pets?type=dog')
        .then(res => res.json())
        .then(json => this.setState({
          pets: json
        }))
        break

      case "cat":
        fetch('/api/pets?type=cat')
        .then(res => res.json())
        .then(json => this.setState({
          pets: json
        }))
        break

      case "micropig":
        fetch('/api/pets?type=micropig')
        .then(res => res.json())
        .then(json => this.setState({
          pets: json
        }))
        break
    }
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleChange={this.handleChange} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
