import React, { Component,  } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Child from './child';

const container = document.getElementById('app');
const root = createRoot(container);


// App.getDerivedStateFromProps = (props, state) => ({
//         greet: `${g} ${props.name}`,
//       })



class Test extends Component {
  state = {
    name: 'yagnesh',
    count: 0,
  };

  static getDerivedStateFromError(error) {
    return {
      error
    }
  }

  componentDidCatch(error, info) {
    console.log(info.componentStack);
    // api call
  }

  render() {
    console.log("Render Test");
    const { name, count, error } = this.state;
    return (
      <div>
        {error ? <div>{error.message}</div> : <App name={name} />}
        <Child name={name} />
        <button type='button' onClick={() => {
            this.setState({name: "Rohit"})
        }}>Change Name</button>
        <h1>{name}</h1>

        <h2>{count}</h2>

        <button type='button' onClick={() => {
            this.setState(({count}) => ({ count: count + 1}))
        }}>Change Count </button>
      </div>
    );
  }
}

root.render(<Test />);
