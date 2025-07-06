import React, { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
const host = "http://localhost:5000"


const Login = () => {
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
     //save auth token and redirect
     localStorage.setItem('token',json.authorizeToken)
     navigate("/")
    }
    else{
      alert("invalid cfredentials")
    }

  }

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email'
          onChange={onchange} value={credentials.email}
          aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name='password' onChange={onchange}
          value={credentials.password} id="password" />
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
  )
}

export default Login
