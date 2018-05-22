import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  renderPets = () => {
    return this.props.pets.map(pet => {
     return <Pet key={pet.id} pet={pet} isAdopted={ this.props.adoptedPets.includes(pet.id) } onAdoptPet={this.props.onAdoptPet} />
    })
  }
  render() {
    console.log("pets props", this.props.pets)
    return (
      <div className="ui cards">
        { this.renderPets() }
      </div>
    );
  }
}

export default PetBrowser;
