
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            // const res = await axios.post("https://ksxchange.onrender.com/login", {
            //     email,
            //     password,
            // });

            const res = await axios.post("https://ksxchange.onrender.com/login", {
                email,
                password,
            });

            console.log("Server Response:", res.data); // Debug response

            if (res.data === "exist") {
                alert("Login successful!");
                // navigate('/'); // Redirect to homepage
                window.location.href = "http://localhost:3001/";
            } else if (res.data === "notexist") {
                alert("User does not exist. Please sign up.");
            } else {
                alert("User does not exist. Please sign up.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred while logging in. Please try again.");
        }
    }

  return (
    <div className='container mt-5 Login'>
        <h1 className='mt-2'>Login</h1>
        <from>
            <input className='input' type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <br/>
            <input className='input' type='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
            <br/>
            {/* <input className='input_2'  type='submit' onClick={submit}/> */}
            <button class="button" type='submit' onClick={submit}>Submit
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clip-rule="evenodd"
            ></path>
            </svg>
            </button>
        </from>
        <br/>
        <p className='para'>Or,</p>
        {/* <br/> */}
        <Link className='Login-link' to='/signup'>Create account</Link>

        
    </div>
  )
}

export default Login;

