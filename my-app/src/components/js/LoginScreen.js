import React from 'react';
import '../css/LoginScreen.css';
import audio from '../../static/audio/audiowow.mp3';

function LoginScreen() {
  return (
    <div id="login">
      <div>
        <img width="250" height="120" src="https://logosmarcas.net/wp-content/uploads/2021/02/World-of-Warcraft-Logo.png" alt="logo wow shadowlands" />
      </div>

      {/* Music */}
      <div className="div-audio">
        <audio autoplay="true" controls="controls">
          <source src={audio} type="audio/mp3" />
        </audio>
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