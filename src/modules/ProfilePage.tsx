import "./ProfilePage.css";
import editIcon from "../assets/Edit icon.svg";

export default function ProfilePage() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="title">My Profile</div>
        <button className="edit-profile-button">
          <img src={editIcon}></img>
        </button>
      </div>
      <hr className="divider" />
      <div className="profile-info">
        <div className="profile-details">
          <div className="profile-name">UserName</div>
          <div className="profile-email">example@email.com</div>
        </div>
      </div>
    </div>
  );
}
