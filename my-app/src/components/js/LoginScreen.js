import React, { useState } from 'react';
import '../css/LoginScreen.css';
import audio from '../../static/audio/audiowow.mp3';

function LoginScreen() {
  const [form, setForm] = useState({email: '', password: ''});

  const emailValidate = (email) => {
    if (email?.toString().includes('@') && email?.toString().includes('.')) {
      return true;
    } else {
      return false;
    }
  }

  const passwordValidate = (password) => {
    if (password?.toString().length > 6) {
      return true;
    } else {
      return false;
    }
  }

  const inputValidate = () => {
    return emailValidate(form.email) && passwordValidate(form.password);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.email) {
      alert('Digite a conta');
      return;
    }
    if (!inputValidate()) {
      alert('Email ou senha inválidos');
    } else {
      alert('Logou')
    }
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log('inputs', form);
  }

  return (
    <div id="login">

      <div className="div-static">
        {/* Logo wow */}
        <div className="div-logo">
          <img width="250" height="120" src="https://logosmarcas.net/wp-content/uploads/2021/02/World-of-Warcraft-Logo.png" alt="logo wow shadowlands" />
        </div>
        {/* Music */}
        <div className="div-audio">
          <audio className="audio-master" src={audio} preload="auto" autoplay></audio>
        </div>
      </div>

      {/* Login */}
      <div className="div-master-buttons">
        {/* Buttons left */}
        <div className="div-buttons-left">
          <buttons className="button-laterals">Create Account</buttons>
          <buttons className="button-laterals">My Account</buttons>
          <buttons className="button-laterals">Community Site</buttons>
        </div>

        <form className="div-login">
          <div className="inputs-login">
            <label className="login-label">Email or Phone</label>
            <input name="email" onChange={handleChange} className="input-label" type="email" />
          </div>

          <div className="inputs-login">
            <label className="login-label">Password</label>
            <input name="password" onChange={handleChange} className="input-label" type="password" />
          </div>

          <div>
            <button className="button-login" type="submit" onClick={handleSubmit}>
              Log In
            </button>
          </div>

          <div className="div-checkbox">
            <input className="input-checkbox" type="checkbox" id="remember-Account" />
            <span className="checkbox-button"></span>
            <label className="label-checkbox" for="remember-Account">Remember Account</label>
          </div>

        </form>

        {/* Buttons right */}
        <div className="div-buttons-right">
          <buttons className="button-laterals">System</buttons>
          <buttons className="button-laterals">Cinematics</buttons>
          <buttons className="button-laterals">Credits</buttons>
          <buttons className="button-quit">Quit</buttons>
        </div>
      </div>

      {/* footer */}
      <div className="div-footer">
        <div>
          <footer className="footer-um">
            <p>Version 1.0.0 (35944) (test x1)</p>
            <p>Dez 13 2022</p>
          </footer>
        </div>
        <div>
          <footer className="footer-dois">
            <p>Copyright 2022-2022  João Batista. All Rights Reserved.</p>
          </footer>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default LoginScreen;