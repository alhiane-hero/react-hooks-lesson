import React, {useState, useEffect, useRef} from 'react';

function Example() {

    const id = useRef();

    const [count, setCount] = useState(0);

    useEffect(() => {
        id.current = window.setInterval(_ => {
            setCount(count + 1);
        }, 1000);
        return clearInterval;
    });

    const clearInterval = _ => {
        window.clearInterval(id.current);
    }

    return (
        <div className='Example'>
            <p>{count}</p>
            <button onClick={clearInterval}>Stop</button>
        </div>
    );
}

export default Example;
