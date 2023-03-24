import "./landing.css";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";

function App() {
  if (!localStorage.getItem("loggedIn")) document.location.href = "/Login/Landing";
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="about">
          <h1>What is this?</h1>
          <p>
            This is a simple web app that allows you to keep track of your money
            and your expenses. It is a work in progress, so please be patient
            with me as I work on it. I am a full time student, and this is just
            a side project for me. I hope you enjoy it! If you have any
            suggestions, please feel free to contact me. I am always looking for
            ways to improve my code.
          </p>
          <h1>How Do i use This?</h1>
          <p>
            To use this app, you will need to create an account. Once you have
            created an account, you will be able to log in. Once you are logged
            in, you will be able to add transactions to your account. You can
            also add categories, a budget and a goal to your account to help you
            keep track of your money. This app is
            still in development, so there are many more features to come.
          </p>
        </div>
      </div>
    </div>
  )
    

}

export default App;
