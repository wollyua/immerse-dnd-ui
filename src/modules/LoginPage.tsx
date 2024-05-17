import Login from "../components/Login";
import AppIcon from "../assets/AppIcon.svg";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div className="login-content">
        <img src={AppIcon} className="app-logo" />
        <Login />
        <br />
      </div>
    </>
  );
}
