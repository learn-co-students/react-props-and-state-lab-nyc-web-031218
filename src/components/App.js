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

  onChangeType = (e) => {
    console.log(e);
    this.setState({
      filters: {
        type: e.toLowerCase()
      }
    })
  };

  onFindPetsClick = () => {
    if (this.state.filters.type.toLowerCase() === "all") {
      fetch('/api/pets').then(r => r.json()).then(json => {
        this.setState({pets: json})
      })
    }
    else if (this.state.filters.type.toLowerCase() === "cat") {
      fetch('/api/pets?type=cat').then(r => r.json()).then(json => {
        this.setState({pets: json})
      })
    }
    else if (this.state.filters.type.toLowerCase() === "dog") {
      fetch('/api/pets?type=dog').then(r => r.json()).then(json => {
        this.setState({pets: json})
      })
    }
    else if (this.state.filters.type.toLowerCase() === "micropig") {
      fetch('/api/pets?type=micropig').then(r => r.json()).then(json => {
        this.setState({pets: json})
      })
    }
  };

  onAdoptPet = (id) => {
    console.log(id)
    if (!this.state.adoptedPets.includes(id))
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  };

  render() {
    console.log(this.state);
    console.log(this.state.adoptedPets);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
