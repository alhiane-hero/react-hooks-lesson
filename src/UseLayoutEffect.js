/*
    => The Differnce between useEffect and useLayoutEffect:
    - is in the time when the function are invoked(call);
    => useEffect hook is invoked after the DOM is painted(مرسوم);
    => useLayoutEffect ook is invoked before changes are painted on DOM;
*/

/*
    - with useEffect:
        => 1: all logics between func and return run first;
        => 2: return;
        => 3: hooks(useEffect);
*/

import {useState, useEffect, useRef, useLayoutEffect} from 'react';

export default function UseLayoutEffect() {

    const [percentage, setPercentage] = useState(50);
    const [height, setHeight] = useState(null);
    const shapeRef = useRef(null);

    // الدوم موجود و مرسوم
    // useEffect(_ => {
    //     console.log(shapeRef);
    //     console.log(`offset height = ${shapeRef.current.offsetHeight}`);
    //     console.log(`height = ${height}`);

    //     window.setTimeout(_ => {
    //         setHeight(shapeRef.current.offsetHeight);
    //     }, 2000);

    // }, [percentage]);

    // الدوم موجود لكنه لم يرسم بعد
    // لن يعرض الدوم إلا بعد نهاية عمل هذه
    useLayoutEffect(_ => {
        console.log(shapeRef);
        console.log(`offset height = ${shapeRef.current.offsetHeight}`);
        console.log(`height = ${height}`);

        setHeight(shapeRef.current.offsetHeight);

    }, [percentage]);

    const handleChange = value => {
        setPercentage(value);
    }

    const style = {
        width: '100px',
        height: `${percentage}%`,
        background: height !== null ? 'green' : 'yellow',
        color: 'white'
    }

    const mainStyle = {
        height: `200px`,
        background: 'red',
    }

    // work first than hooks => we don't have dom yet;
    console.log(shapeRef.current); // null
    console.log(height); // null

    return (
        <div className='UseLayoutEffect'>
            <main style={mainStyle}>
                <div ref={shapeRef} style={style}>
                    {height}
                </div>
            </main>
            <ShapeSizer handleChange={handleChange} />
        </div>
    );
}

function ShapeSizer(props) {
    return (
        <input type='range' min='0' max='100' 
        onChange={e => props.handleChange(e.target.value)}/>
    );
}
