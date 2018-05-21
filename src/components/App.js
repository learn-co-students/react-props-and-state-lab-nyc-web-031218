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

  componentDidMount() {
    fetch('/api/pets')
    .then(res => res.json())
    .then(json => {
      return this.setState({
        pets: [...json]
      })
    })
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  onFindPetsClick = () => {
    const filter = this.state.filters.type;
    let url = null;

    if (filter === 'all') {
      url = '/api/pets'
    } else if (filter === 'cat') {
      url = '/api/pets?type=cat'
    } else if (filter === 'dog') {
      url = '/api/pets?type=dog'
    } else if (filter === 'micropig') {
      url = '/api/pets?type=micropig'
    }

    fetch(url)
    .then(res => res.json())
    .then(json => {
      return this.setState({
        pets: [...json]
      })
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
              <Filters filters={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} filter={this.state.filters.type} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
