import React from 'react';

interface UserCardProps {
  username: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, email }) => {
  return (
    <div className="user-card">
      <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" alt="User Icon" className="user-icon" />
      <h3 className="user-name">{username}</h3>
      <p className="user-email">{email}</p>
    </div>
  );
};

export default UserCard;