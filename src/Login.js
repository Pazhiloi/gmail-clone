import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css'
const Login = () => {
  const dispatch = useDispatch()

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({user}) => {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
    })
    .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://itc.ua/wp-content/uploads/2020/10/newgmaillogo.0.jpg"
          alt=""
        />
        <Button variant='contained' onClick={signIn}>Login</Button>
      </div>
    </div>
  );
};

export default Login;