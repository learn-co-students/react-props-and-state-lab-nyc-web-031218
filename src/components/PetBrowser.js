import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => {
      return (
        <Pet key={pet.id} isAdopted={!!(this.props.adoptedPets.find(p => p === pet.id))} onAdoptPet={this.props.onAdoptPet} pet={pet} />
      )
    })

    return (
      <div className="ui cards">
        <code>{pets}</code>
      </div>
    );
  }
}

export default PetBrowser;
