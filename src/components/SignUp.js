import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const host = "x-note-seven.vercel.app";


const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    const response = await fetch(`${host}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authorizeToken);
      navigate("/");
      props.showAlert("Account created successfully", 'success');
    } else {
      if (json.error === "User already exists") {
        props.showAlert("Email already in use", "danger");
      } else {
        props.showAlert("Invalid details", "danger");
      }
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>
        Create an account to use xNote
      </h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text" className="form-control" id="name" name='name'
          minLength={3} required onChange={onchange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email" className="form-control" id="email" name='email'
          required onChange={onchange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password" className="form-control" id="password" name="password"
          required minLength={5} onChange={onchange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input
          type="password" className="form-control" id="cpassword" name="cpassword"
          required minLength={5} onChange={onchange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SignUp;
