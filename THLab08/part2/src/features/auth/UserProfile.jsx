import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, setUserInfo } from "./authSlice";
import "./Auth.css";

export function UserProfile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || "");
  const [editedEmail, setEditedEmail] = useState(user?.email || "");

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    dispatch(
      setUserInfo({
        name: editedName,
        email: editedEmail,
      })
    );

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedName(user?.name || "");
    setEditedEmail(user?.email || "");
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>

      {isEditing ? (
        <form className="edit-profile-form" onSubmit={handleSaveChanges}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </div>

          <div className="profile-actions">
            <button type="submit" className="save-button">
              Save Changes
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-info">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="profile-details">
            <p className="profile-name">{user?.name}</p>
            <p className="profile-username">@{user?.username}</p>
            <p className="profile-email">{user?.email}</p>
          </div>

          <div className="profile-actions">
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
