import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map((pet) => {
      let adoptionStatus = this.props.adoptedPets.includes(pet.id) ? true : false
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={adoptionStatus} />
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    );
  }
}

export default PetBrowser;
