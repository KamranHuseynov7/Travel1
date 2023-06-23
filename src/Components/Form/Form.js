import React, { useState } from 'react'
import "./Form.css";

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    

    const onChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const validate = () => {
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

            setEmailError(false);
          } else {
            setEmailError(true);
        }

        if (password.length > 6) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    }

    const submit = () => {
        validate()
        if (emailError === false && passwordError === false && email !== "" && password !== "") {
            console.log("submit", email, password);
        }
    }



    return (
        <div className='container1'>

            <div className="header1">
                <h1>Login</h1>
            </div>
            <div className="main1">

                <input  className='input' type="email" placeholder="Email Adress" name="email" value={email} onBlur={() => validate()} onChange={(e) => onChange(e)} />
                {emailError &&  <h4 className='h4'>Please enter a valid email address</h4>}
                <input className='input' type="text" placeholder="Password" name="password" value={password} onBlur={() => validate()} onChange={(e) => onChange(e)} />
                {passwordError && <h4 className='h4'>Wrong Password</h4>}
                <button disabled={!email || !password} onclick={() => submit()} class="btn">Sumbit</button>



            </div>
        </div>
    )
}

export default Form;