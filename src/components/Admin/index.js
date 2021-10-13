import React from "react";
import { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";

const AdminPage = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await props.firebase.getAllUsers();
        let allUsers = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          allUsers.push(data.username);
        });

        setUsers(allUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [props.firebase]);

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Users</h2>
      <ul>
        {users.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export default withFirebase(AdminPage);
