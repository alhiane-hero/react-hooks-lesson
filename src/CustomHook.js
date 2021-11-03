import {useState} from 'react';
import {useForm} from './UseForm';

function CustomHook() {

    // النكرار
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // hook for get form inputs values:
    const [values, handleChange] = useForm({username: '', email: '', password: ''});
    // const [{username, email, password}, handleChange] = useForm({
    //     username: '',
    //     email: '',
    //     password: ''
    // })

    return (
        <div className='CustomHook'>
            <h3>Username: {values.username}</h3>
            <h3>Email: {values.email}</h3>
            <h3>Password: {values.password}</h3>

            <input type='text' value={values.username}
            name='username' autoComplete='off'
            placeholder='Enter Username' 
            onChange={handleChange} />

            <input type='email' value={values.email}
            name='email' autoComplete='off'
            placeholder='Enter Email' 
            onChange={handleChange} />

            <input type='password' 
            value={values.password} name='password'
            placeholder='Enter Password' 
            onChange={handleChange} />
        </div>
    );
}

export default CustomHook;
