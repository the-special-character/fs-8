import React, { memo, useCallback, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Todo from './Todo';

const container = document.getElementById('app');
const root = createRoot(container);

const Child1 = memo(({ msg }) => {
  console.log('Child 1 component');
  return (
    <div>
      <h1>Child 1 component</h1>
      <p>{msg.title}</p>
    </div>
  );
});

Child1.displayName = "Child1"

const Child2 = memo(({increment,decrement }) => {
  console.log('Child 2 component');
  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
});

Child2.displayName = "Child2"

function App() {
  const [count, setCount] = useState(0)
  const [greet, setGreet] = useState('hello');

  const increment = useCallback(() => {
    setCount(val  => val + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(val  => val - 1);
  }, []);

  const msg = useMemo(
    () => ({ title: `${greet} from app` }),
    [greet],
  );

  const changeGreetMsg = () => {
    setGreet("bounjour")
  }

  return (
    <div>
      
      <h1>{count}</h1>
      
      <Child2 increment={increment} decrement={decrement} />
      <Child1 msg={msg} />

      <button type='button' onClick={changeGreetMsg}>Change Greet Message</button>
    </div>
  );
}

root.render(<App />);
