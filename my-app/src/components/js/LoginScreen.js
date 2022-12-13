import React from 'react';
import '../css/LoginScreen.css';
import audio from '../../static/audio/audiowow.mp3';

function LoginScreen() {
  return (
    <div id="login">
      <div>
        <img width="250" height="120" src="https://logosmarcas.net/wp-content/uploads/2021/02/World-of-Warcraft-Logo.png" alt="logo wow shadowlands" />
      </div>

      <div className="div-audio">
        <audio autoplay="true" controls="controls">
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>

      <form className="div-login">
        <div className="inputs-login">
          <label className="login-label">Email or Phone</label>
          <input className="input-label" type="text" />
        </div>

        <div className="inputs-login">
          <label className="login-label">Password</label>
          <input className="input-label" type="text" />
        </div>

        <div>
          <button className="button-login" type="submit">
            Log In
          </button>
        </div>

        <div className="div-checkbox">
          <input className="input-checkbox" type="checkbox" id="remember-Account" />
          <span className="checkbox-button"></span>
          <label className="label-checkbox" for="remember-Account">Remember Account</label>
        </div>

      </form>

    </div>
  )
}

export default LoginScreen;