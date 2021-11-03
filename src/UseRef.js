import {useRef} from 'react';

function UseRef() {

    const nameInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();

    const handelSubmit = event => {
        event.preventDefault();
        // prevent reload;
        console.log(nameInput);
        // {current: input};
        console.log(nameInput.current); 
        // <input type='text' placeholder="Name..." />
        console.log(nameInput.current.value);
        // name value;
        console.log(emailInput.current.value);
        // email value;
        console.log(passInput.current.value);
        // password value;
    }

    return (
        <form className='UseRefForm'>
            <input type='text' placeholder='Name...' ref={nameInput} />
            <input type='email' placeholder='Email...' ref={emailInput} />
            <input type='password' placeholder='Password...' ref={passInput} />
            <input type='submit' onClick={handelSubmit} />
        </form>
    );
}

export default UseRef;
