import React from 'react';
import UserCard from '../components/UserCard';
import useFetchUsers from '../hooks/useFetchUsers';
import '../userList.css'

const UsersList: React.FC = () => {
  const { users, loading } = useFetchUsers();

  if (loading) return <p>Loading users...</p>;

  return (
  <>  
  <section id="home" className="hero">
  </section>
  
      <center><h2 className="section-title">Usuarios Registrados</h2></center>
    <div className="users-list">
      {users.map((user: any) => (
        <UserCard key={user._id} username={user.username} email={user.email} />
      ))}
    </div>
  </>
  );
};

export default UsersList;
