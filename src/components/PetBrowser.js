import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const petJSX = this.props.pets.map(pet =>{
      return <Pet key={pet.id} name={pet.name} gender={pet.gender} type={pet.type} age={pet.age} weight={pet.weight}></Pet>
    })
    return (
      <div className="ui cards">
        {petJSX}
      </div>
    );
  }
}

export default PetBrowser;
