import React, { Component } from 'react';

// Mounting

// -> constructor
// -> getDerivedStateFromProps
// -> render

// Updating

// unMounting

// Error

export default class App extends Component {
  state = {
    count: 0,
    data: null
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     greet: `Mr. ${props.name}`,
  //     count: 0,
  //   };

  //   // api

  //   // analytics
  //   // this.increment = this.increment.bind(this);
  //   // this.decrement = this.decrement.bind(this)
  // }

  // this will call whenever props or state value change
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    
    return {
      greet: `Mr. ${props.name}`,
    }
  }

  // call only once
  async componentDidMount() { 
    console.log(document.getElementById("heading"));
    document.addEventListener("copy", () => {
      console.log("Coppied");
    })
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await res.json();
      console.log(json);
      this.setState({data: json})
    } catch (error) {
      
    }

   }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    console.log("render");
    const { count, greet, data } = this.state;
    // const { name } = this.props;
    // if(count > 3) {
    //   throw Error("something went wrong...")
    // }
    return (
      <div>
        {count < 5 && <h1 id='heading'>{greet}</h1>}
        {data && <h2>{data.title}</h2>}
        <button type="button" onClick={this.increment}>
          +
        </button>
        {count}
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ greet: 'Mrs. Hello' });
          }}
        >
          Change Greet
        </button>
      </div>
    );
  }
}
