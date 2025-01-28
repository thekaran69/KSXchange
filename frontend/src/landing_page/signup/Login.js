
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://ksxchange-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json(); // Parse response as JSON

      if (res.success) {
        // Set a cookie with user information
        Cookies.set("user", JSON.stringify({ email }), { expires: 2, path: '/' });
        alert("Login successful!");
        window.location.href = "https://ksxchange-dashboard.vercel.app/";
      } else {
        alert(res.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  }

  return (
    <div className="container mt-5 Login">
      <h1 className="mt-2">Login</h1>
      <form onSubmit={submit}>
        <input
          className="input"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button className="button" type="submit">
          Submit
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
      <br />
      <p className="para">Or,</p>
      <Link className="Login-link" to="/signup">
        Create account
      </Link>
    </div>
  );
};

export default Login;

// import React, { useState } from "react"
// import axios from "axios"
// import { Link, useNavigate } from "react-router-dom"
// import Cookies from "js-cookie"
// import "./Login.css"

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()

//   async function submit(e) {
//     e.preventDefault()

//     // try {
//     //   const res = await axios.post("https://ksxchange-backend.vercel.app/login", {
//     //     // const res = await axios.post("http://localhost:3002/login", {
//     //     email,
//     //     password,
//     //   })
     
//     // try {
//     //   const response = await fetch("https://ksxchange-backend.vercel.app/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //       email,
//     //       password,
//     //     }),
//     //   });

//     //   const res = await response.text(); 
//     //   if (res === "exist") {
//     //     // Set a cookie with user information
//     //     Cookies.set("user", JSON.stringify({ email }), { expires: 2, path: '/' });
//     //     alert("Login successful!")
//     //     window.location.href = "https://ksxchange-dashboard.vercel.app/";
//     //     // window.location.href = "http://localhost:3001/";

//     //   } else if (res === "notexist") {
//     //     alert("User does not exist. Please sign up.")
//     //   } else {
//     //     alert("User does not exist. Please sign up.")
//     //   }
//     // } catch (error) {
//     //   console.error("Error during login:", error)
//     //   alert("An error occurred while logging in. Please try again.")
//     // }
//     try {
//       const response = await fetch("https://ksxchange-backend.vercel.app/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
    
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
    
//       const res = await response.json(); // Parse response as JSON
    
//       if (res.success) {
//         // Set a cookie with user information
//         Cookies.set("user", JSON.stringify({ email }), { expires: 2, path: '/' });
//         alert("Login successful!");
//         window.location.href = "https://ksxchange-dashboard.vercel.app/";
//       } else {
//         alert(res.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred while logging in. Please try again.");
//     }
//   }

//   return (
//     <div className="container mt-5 Login">
//       <h1 className="mt-2">Login</h1>
//       <form>
//         <input
//           className="input"
//           type="email"
//           name="email"
//           onChange={(e) => {
//             setEmail(e.target.value)
//           }}
//           placeholder="Email"
//         />
//         <br />
//         <input
//           className="input"
//           type="password"
//           name="password"
//           onChange={(e) => {
//             setPassword(e.target.value)
//           }}
//           placeholder="Password"
//         />
//         <br />
//         <button className="button" type="submit" onClick={submit}>
//           Submit
//           <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
//             <path
//               fillRule="evenodd"
//               d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </form>
//       <br />
//       <p className="para">Or,</p>
//       <Link className="Login-link" to="/signup">
//         Create account
//       </Link>
//     </div>
//   )
// }

// export default Login


// import React, { useState } from 'react';
// import {Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://ksxchange-backend.vercel.app/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const res = await response.text(); // Use .text() instead of .json()

//       console.log("Server Response:", res);

//       if (res === "exist") {
//         // Set a cookie with user information
//         Cookies.set("user", JSON.stringify({ email }), { expires: 2, path: '/' });
//         alert("Login successful!");
//         window.location.href = "https://ksxchange-dashboard.vercel.app/";
//       } else if (res === "notexist") {
//         alert("User does not exist. Please sign up.");
//       } else {
//         alert("User does not exist. Please sign up.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred while logging in. Please try again.");
//     }
//   }

//   return (
//     <div className="container mt-5 Login">
//       <h1 className="mt-2">Login</h1>
//       <form onSubmit={submit}>
//         <input
//           className="input"
//           type="email"
//           name="email"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <br />
//         <input
//           className="input"
//           type="password"
//           name="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <br />
//         <button className="button" type="submit">
//           Submit
//         </button>
//       </form>
//       <Link to="/signup">Don't have an account? Sign up here</Link>
//     </div>
//   );
// };

// export default Login;

