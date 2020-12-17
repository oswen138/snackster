import React from "react";
import firebase from "firebase/app";

  {/* Signup form lives here */}

  <h1>hello</h1>
  <form onSubmit={doSignIn}>
    <input
      type='text'
      name='signinEmail'
      placeholder='email' />
    <input
      type='password'
      name='signinPassword'
      placeholder='Password' />
    <button type='submit'>Sign in</button>
  </form>
</React.Fragment>

function Signin(){
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }


return (
  <React.Fragment>
    <h1>Sign up</h1>
    <form onSubmit={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='email' />
      <input
        type='password'
        name='password'
        placeholder='Password' />
      <button type='submit'>Sign up</button>
    </form>
  </React.Fragment>
)

export default Signin