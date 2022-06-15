import React, {useState, useRef} from 'react';
import '../css/Login.css'

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    if(name.length > 3) {
        setNameIsValid(true);
    }

    if(nameIsValid) {
        setFormIsValid(true);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(`ID: ${name} password: ${password}`);

        setName('');
        setPassword('');
    }

    return (
        <form onSubmit={formSubmit}>
            <div className='form-box'>
                <div className='wrap'>Login Page.
                    <input type="text" className='id' value={name} onChange={nameHandler} />
                    <input type="password" className='password' value={password} onChange={passwordHandler} />
                    <button>Go</button>
                    <button type='button'>Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default Login;