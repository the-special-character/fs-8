import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(({count}) => ({ count: count + 1 }))
  }

  decrement = () => {
    this.setState(({count}) => ({ count: count - 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button type="button" onClick={this.increment}>+</button>
        {count}
        <button type="button" onClick={this.decrement}>-</button>
      </div>
    )
  }
}
