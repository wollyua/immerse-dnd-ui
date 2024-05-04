import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const usernameReg = "^[a-z0-9_]{4,15}$";
  const passwordReg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})";

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Here you can implement the logic to submit the form (e.g., send the data to a server)
  //   console.log("Email:", email, "Password:", password);
  // };

  return (
    <div className="form">
      {!isOpen && (
        <div id="signup">
          <h2 className="title">Sign Up</h2>

          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  Username<span className="req">*</span>
                </label>
                <input type="text" required autoComplete="off" />
              </div>
            </div>

            <div className="field-wrap">
              <label>
                Email address<span className="req">*</span>
              </label>
              <input type="email" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Confirm password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="off" />
            </div>

            <button type="submit" className="button button-block">
              Get Started
            </button>
            <div>
              Already have an account?{" "}
              <a className="toggle-link" onClick={toggle}>
                Log In
              </a>
            </div>
          </form>
        </div>
      )}

      {isOpen && (
        <div id="login">
          <h2 className="title">Welcome Back!</h2>

          <form action="/" method="post">
            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input type="email" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="off" />
            </div>

            <button type="submit" className="button button-block">
              Log In
            </button>
            <div>
              Visiting us for first time?{" "}
              <a className="toggle-link" onClick={toggle}>
                Log In
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

/*
<div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>Already have an account?</div>
        
      </form>
    </div>
*/
