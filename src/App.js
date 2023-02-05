import React, { useState } from "react";

// importing components
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  const [addUserEnv, setAddUserEnv] = useState(false);
  const [editUserEnv, setEditUserEnv] = useState(false);
  const addUserFunc = () => {
    setAddUserEnv(true);
  };
  return addUserEnv ? (
    <AddUser />
  ) : editUserEnv ? (
    <EditUser />
  ) : (
    <Dashboard addUserFunc={addUserFunc} />
  );
};

export default App;
