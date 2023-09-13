import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

// Mounting

// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate


// unMounting
// 

// Error


export default class App extends PureComponent {

  // derive state from props;
  // bnd methods
  // analytics
  // call only once while init
  constructor(props) {
    super(props);
    this.state = {
      greet: `Mr. ${props.name}`,
      count:  0,
      listData: []
    }
    this.changeGreet = this.changeGreet.bind(this)
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  static getDerivedStateFromProps(props) {
    return {
      greet: `Mr. ${props.name}`,
    }
  }

  mouseMove = () => {
    console.log("mouse move");
  }

  // dom manipulation
  // event register
  // on page load data load
  // call only once
  async componentDidMount() { 
    document.addEventListener("mousemove", this.mouseMove)
    this.interval = setInterval(() => { 
      console.log("interval");
     }, 1000)
     try {
      const res = await fetch("https://fakestoreapi.com/products", {
        signal: this.signal
      })
     } catch (error) {
      
     }
   }

  //  shouldComponentUpdate(nextProps, nextState) { 
  //   return shallowCompare(this,nextProps, nextState);
  //  }

  changeGreet() {
    this.setState({greet: 'Mr. Virat'})
  }



  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return 10;
  }


  // dom manipulation
  componentDidUpdate(prevProps, prevState, snapshot) { 
    console.log(snapshot);

  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove);
    clearInterval(this.interval)
    if(this.controller) {
      this.controller.abort();
    }
   }

  render() {
    console.log("Render app");
    const { greet, count } = this.state
    return (
      <div>
        <h1>{greet}</h1>
        <h2>{count}</h2>
        <button type='button' onClick={this.changeGreet}>Chnage greet message</button>
        <button type='button' onClick={() => {
          this.setState(({ count }) => ({ count: count + 1}))
        }}>Change Count</button>
      </div>
    )
  }
}
