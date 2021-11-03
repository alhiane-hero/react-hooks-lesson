import {useCallback, useState} from 'react';

// useCallback => memoized function return;

const functionsCounter = new Set();

function UseCallback() {

    const [counter, setCounter] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    // const increament = _ => {
    //     setCounter(counter + 1);
    // }
    // const decreament = _ => {
    //     setCounter(counter - 1);
    // }
    // const increamentOtherCounter = _ => {
    //     setOtherCounter(otherCounter + 1);
    // }
    // functionsCounter.add(increament);
    // functionsCounter.add(decreament);
    // functionsCounter.add(increamentOtherCounter);
    // // رغم أن السيت لا يقبل القيم المكررة لكن في كل مرة تتغير الحالة يضيف نفس الدوال لإنه لا يتذكر قيمهم قبل تحديث الحالة;
    // // memoized يعيد نداء هنا يآتي دور هذا الخطاف لكي يتذكر;
    // console.log(functionsCounter);
    // console.log(functionsCounter.size);
    // /*
    //     - Set(3) {ƒ, ƒ, ƒ};
    //     - clicked => Set(6) {ƒ, ƒ, ƒ, ƒ, ƒ, f};
    // */

    const increament = useCallback(_ => {
        setCounter(counter + 1);
    }, [counter]);
    const decreament = useCallback(_ => {
        setCounter(counter - 1);
    }, [counter]);
    const increamentOtherCounter = useCallback(_ => {
        setOtherCounter(otherCounter + 1);
    }, [otherCounter]);

    functionsCounter.add(increament);
    functionsCounter.add(decreament);
    functionsCounter.add(increamentOtherCounter);

    console.log(functionsCounter);
    console.log(functionsCounter.size);

    /*
        - Set(3) {ƒ, ƒ, ƒ};
        - Set(3) {ƒ, ƒ, ƒ};
    */

    return (
        <div className='UseCallback'>
            <div>Counter: {counter}</div>
            <div>otherCounter: {otherCounter}</div>
            <button onClick={increament}>Increament Counter</button>
            <button onClick={decreament}>Decreament Counter</button>
            <button onClick={increamentOtherCounter}>Increament CtherCounter</button>
        </div>
    );
}

export default UseCallback;
