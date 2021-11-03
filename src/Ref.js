import React, {Component, createRef} from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.nameInput = createRef(); // ref form name input;
        this.emailInput = createRef(); // ref form email input;
        this.passInput = createRef(); // ref form password input;
    }
    
    handelSubmit = event => {
        event.preventDefault();
        console.log(this.nameInput);
        // {current: input};
        console.log(this.nameInput.current); 
        // <input type='text' placeholder="Name..." />
        console.log(this.nameInput.current.value);
        // name value;
        console.log(this.emailInput.current.value);
        // email value;
        console.log(this.passInput.current.value);
        // password value;
    }

    render() {
    return (
        <form className='RefForm'>
            <input type='text' placeholder='Name...' ref={this.nameInput} />
            <input type='email' placeholder='Email...' ref={this.emailInput} />
            <input type='password' placeholder='Password...' ref={this.passInput} />
            <input type='submit' onClick={this.handelSubmit} />
        </form>
    );
    }
}

export default Ref;