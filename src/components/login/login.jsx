import React from 'react'
import firebase from '../../firebase';
import './login.css';
import CloseIcon from '@mui/icons-material/Close';
import {  Link, useHistory  } from "react-router-dom";


class LogIn extends React.Component {
  constructor() {
    super();
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    this.onSignInSubmit();
    console.log("ReCaptcha Verified!");
      },
  defaultCountry: 'IN'
  });
  }

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
      const phoneNumber = "+91" + this.state.mobile;
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP Sent!");
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("Problem in sending OTP!");
    });

  }

  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user));
  alert('User signed in successfully.')
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  }


  render() {
    return (
      <div className="container">
        <Link to="/"><CloseIcon style={{ position: 'absolute', top: '12', right: '18', fontSize: '3rem', fontWeight: '900', color: 'white', cursor: 'pointer'} }/></Link>
        <div id='sign-in-button'></div>
        <div className="wrapper">
          <div className="number">
            <h2>Enter Mobile Number</h2>
        <form onSubmit={this.onSignInSubmit}>
          <input type='phone' name='mobile' placeholder='Mobile Number' required onChange={this.handleChange}/>
          <button type='submit' >Submit</button>
        </form>
          </div>
          <div className="otp">
            <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type='number' name='otp' placeholder='Verification code' required onChange={this.handleChange}/>
          <button type='submit' >Submit</button>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default LogIn;