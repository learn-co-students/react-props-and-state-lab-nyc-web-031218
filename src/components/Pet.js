import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  state={adopted: false}

  onClick = () => {
    this.setState({adopted: true})
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name:{this.props.name} (gender: {this.props.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age} </p>
            <p>Weight: {this.props.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.state.adopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.onClick} className="ui primary button">Adopt pet</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
