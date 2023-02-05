import React, { useState } from "react";

// importing components
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  const [addUserEnv, setAddUserEnv] = useState(false);
  const [editUserEnv, setEditUserEnv] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const addUserFunc = () => {
    setAddUserEnv(true);
  };
  return addUserEnv ? (
    <AddUser user={user} setUser={setUser} setAddUserEnv={setAddUserEnv} />
  ) : editUserEnv ? (
    <EditUser user={user} setUser={setUser} setEditUserEnv={setEditUserEnv} />
  ) : (
    <Dashboard
      addUserFunc={addUserFunc}
      setEditUserEnv={setEditUserEnv}
      setUser={setUser}
      allUsers={allUsers}
      setAllUsers={setAllUsers}
    />
  );
};

export default App;
