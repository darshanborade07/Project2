import './Login.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [user1, setUser1] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setUser1({ ...user1, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/User/Login', null, {
      params: {
        email: user.email,
        password: user.password
      }
    })
      .then(response => {
        const role = response.data;

        toast.success("Login Successful!");
        if (role === 'ROLE_OWNER') {
          window.location.href = '/owner';
        }
        else{
          window.location.href = '/home';
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/User/Login', null, {
      params: {
        email: user1.email,
        password: user1.password
      }
    })
      .then(response => {
        const role = response.data;
        
        if (role === 'ROLE_CUSTOMER') {
          window.location.href = '/customer';
          toast.success("Login Successful!");
        }
        else{
          window.location.href = '/home';
          toast.warning("Access Denied !!");
        }
        
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };




  return (
    <div>
      <div className="split left">
        <div className="centered">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Login As Owner</h3>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={user.email} onChange={handleChange} required />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} required />
            
            <button type="submit">Log In</button>
            <ToastContainer position='top-center'/>
            <div className="social">
              <div className="go"><i className="fab fa-google"></i> Google</div>
              <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
            </div>
          </form>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="background">
            <div className="shape1"></div>
            <div className="shape1"></div>
          </div>
          <form onSubmit={handleSubmit1}>
            <h3>Login As Customer</h3>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={user1.email} onChange={handleChange1} required />
            
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={user1.password} onChange={handleChange1} required />
            
            <button type="submit">Log In</button>
            <ToastContainer position='top-center'/>
            <div className="social">
              <div className="go"><i className="fab fa-google"></i> Google</div>
              <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;