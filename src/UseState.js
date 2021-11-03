import {useState} from 'react';

function UseState() {
  // function top level that you shoud use hooks in it;

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [{count1, count2}, setCount] = useState({count1: 0, count2: 0});

  // currentState => [{count1, count2}]; => ... => {count1, count2};

    return (
        <div className='UseState'>
            <p>You clicked {count1} times</p>
            <button onClick={() => setCount(currentState => ({...currentState,
            count1: currentState.count1 + 1}))}>
                Click me
            </button>
            <p>You clicked {count2} times</p>
            <button onClick={() => setCount(currentState => ({...currentState,
            count2: currentState.count2 + 1}))}>
                Click me
            </button>
            <p>You clicked {count3} times</p>
            <button onClick={() => setCount3(count3 + 1)}>
                Click me
            </button>
        </div>
    );
}

export default UseState;
