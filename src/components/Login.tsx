import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const usernameReg = "^[a-zA-Z0-9_]{4,15}$";
  const passwordReg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})";

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  const navigate = useNavigate();

  const validateSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;
    const confirmPassword = (e.currentTarget[3] as HTMLInputElement).value;

    if (!username.match(usernameReg)) {
      alert("Username must be between 4 and 15 characters long.");
    } else if (!password.match(passwordReg)) {
      alert(
        "Password must be between 8 and 16 characters long and contain at least one lowercase letter, one uppercase letter, and one number."
      );
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    }

    navigate(`/my-characters`);
  };

  const validateLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    if (!email) {
      alert("Email is required.");
    } else if (!password) {
      alert("Password is required.");
    }

    navigate(`/my-characters`);
  };

  return (
    <div className="form">
      {!isOpen && (
        <div id="signup">
          <h2 className="title">Sign Up</h2>
          <form action="/" method="post" onSubmit={validateSignup}>
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

          <form action="/" method="post" onSubmit={validateLogin}>
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
                Sign Up
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
