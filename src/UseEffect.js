import {useState, useEffect} from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('');

    useEffect(_ => {
        console.log('useEffect 1');
        document.title = `You Clicked ${count} Times`;
        // cleanUp => for example: clean web socket before useEffect de somthing on it;
        return _ => {
            console.log('Clean Up')
        }
    }, [count]);

    useEffect(_ => {
        console.log('useEffect 2');
        document.title = title;
        // cleanUp => for example: clean database before useEffect de somthing on it;
        return _ => {
            console.log('Clean Up')
        }
    }, [title]);

    /*
        // only do what didMount do:
        useEffect(_ => {
            console.log('useEffect 2');
            document.title = title;
        }, []);
        // working when count is updated:
        useEffect(_ => {
            console.log('useEffect 1');
            document.title = `You Clicked ${count} Times`;
        }, [count]);
        // working when title is updated:
        useEffect(_ => {
            console.log('useEffect 2');
            document.title = title;
        }, [title]);
    */

    const handleCount = _ => {
        setCount(count + 1);
    }

    const handleTitle = _ => {
        setTitle("React Hooks - useEffect!");
    }

  return (
    <div className='UseEffect'>
        <p>You Clicked {count} Times</p>
        <button onClick={handleCount}>
            Increase Count
        </button>
        <button onClick={handleTitle}>
            Change Title
        </button>
    </div>
  );
}

export default UseEffect;
