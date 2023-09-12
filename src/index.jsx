import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('app');
const root = createRoot(container);

const g = "Mr."

// App.getDerivedStateFromProps = (props, state) => ({
//         greet: `${g} ${props.name}`,
//       })

class Test extends Component {
  state = {
    name: 'yagnesh',
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <App name={name} />
        <button type='button' onClick={() => {
            this.setState({name: "Rohit"})
        }}>Change Name</button>
        <h1>{name}</h1>
      </div>
    );
  }
}

root.render(<Test />);
