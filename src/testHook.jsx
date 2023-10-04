import React, { useEffect, useState, useRef } from 'react';

// Mounting

// Constructor
// GetDerivedStateFromProps
// render
// componendDidMount

// Updating
// GetDerivedStateFromProps
// shouldComponentUpdate
// render
// snapshotBeforeUpdate(Not Possible)
// componentDidUpdate

// Unmounting
// componentWillUnmont

// Error(Not Possible)
// getDerivedStateFromError
// componentDidCatch

function Child({ name }) {
  const [greet, setGreet] = useState(`hello ${name}`);
  const [count, setCount] = useState(0);
  const h1Ref = useRef();

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      console.log('Component did update for greet');
      setGreet(new Date().valueOf())
    }
  }, [greet]);

  useEffect(() => {
    if (mounted.current) {
      console.log(count);
      console.log(greet);
    }
  }, [count]);

  // componentDidMount
  useEffect(() => {
    console.log('Component did mount');
    h1Ref.current.style.color = 'red';
    const mouseMove = () => {
      console.log('mouse moved');
    };
    document.addEventListener('mousemove', mouseMove);

    mounted.current = true;

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const changeGreet = () => {
    setGreet(`halo ${name}`);
    setCount(15)
  };

  const increment = () => {
    setCount(val => val + 1);
  };

  const decrement = () => {
    setCount(val => val - 1);
  };

  console.log('child render');

  return (
    <div>
      <h1 ref={h1Ref} id="heading">
        {greet}
      </h1>
      <button type="button" onClick={changeGreet}>
        Change Greet Message
      </button>

      <button type="button" onClick={increment}>
        +
      </button>
      {count}
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

function TestHook() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(val => val + 1);
  };

  const decrement = () => {
    setCount(val => val - 1);
  };

  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      {count}
      <button type="button" onClick={decrement}>
        -
      </button>
      {count < 5 && <Child name="Yagnesh" />}
    </div>
  );
}

export default TestHook;
