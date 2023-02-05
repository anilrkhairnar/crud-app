import React, { useState, useEffect } from "react";
import axios from "axios";

// icons
import searchIcon from "../assets/images/search-icon.svg";
import addUserIcon from "../assets/images/add-user.svg";

const Dashboard = ({
  addUserFunc,
  setEditUserEnv,
  setUser,
  allUsers,
  setAllUsers,
}) => {
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://blue-journalist-bbrpv.ineuron.app:4000/users"
      );

      setAllUsers(data.data);
      // data.data.map((user, index) => console.log(user));
    } catch (error) {
      console.log("error coming while getting all users", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`
      );
      console.log("message: ", data.message);
      getAllUsers();
    } catch (error) {
      console.log("error coming while deleting a user", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="my-10 mx-5 flex flex-col justify-center items-center gap-6">
      <div className="px-5 py-5 w-4/6 md:flex justify-between bg-red-50 items-center rounded-xl">
        <h1 className="text-2xl font-bold text-gray-700">User Management</h1>
        <div className="px-3 w-4/12 h-12 flex items-center border-b-2 border-red-100">
          <input
            className="w-full h-full outline-none border-none bg-transparent  text-gray-700"
            type="text"
            placeholder="search..."
          />
          <img
            className="w-6 cursor-pointer"
            src={searchIcon}
            alt="search-icon"
          />
        </div>
        <div
          className="p-2 flex justify-between bg-red-200 items-center rounded-xl shadow-md cursor-pointer active:shadow-sm duration-200 ease-in-out"
          onClick={() => addUserFunc()}
        >
          <img className="w-6" src={addUserIcon} alt="addUserIcon" />
        </div>
      </div>
      <div className="px-5 py-5 w-4/6 md:flex flex-col justify-between bg-red-50 items-center rounded-xl gap-5">
        {/* Table Head start */}
        <ul className="w-full flex items-center gap-5">
          <li className="w-3/12 text-xl font-semibold text-gray-600">
            First Name
          </li>
          <li className="w-3/12 text-xl font-semibold text-gray-600">
            Last Name
          </li>
          {console.log(allUsers[0])}
          <li className="w-3/12 text-xl font-semibold text-gray-600">Mobile</li>
          <li className="w-1/12 text-xl font-semibold text-gray-600">Age</li>
          <li className="text-right w-3/12 text-xl font-semibold text-gray-600">
            Action
          </li>
        </ul>
        {/* Table Head end */}

        {allUsers
          .map((user, index) => (
            <ul
              className="pt-4 w-full border-t-2 border-red-100 flex items-center gap-5"
              key={index}
            >
              <li className="w-3/12 text-xl font-normal text-gray-600">
                {user.firstName}
              </li>
              <li className="w-3/12 text-xl font-normal text-gray-600">
                {user.lastName}
              </li>
              <li className="w-3/12 text-xl font-normal text-gray-600">
                {user.phoneNumber}
              </li>
              <li className="w-1/12 text-xl font-normal text-gray-600">
                {user.age}
              </li>
              <div className="w-3/12 flex justify-end items-center gap-2">
                <li
                  className="text-xl font-normal text-blue-400 cursor-pointer hover:underline"
                  onClick={() => {
                    setEditUserEnv(true);
                    setUser(user);
                  }}
                >
                  Edit
                </li>
                <li
                  className="text-xl font-normal text-red-400 cursor-pointer hover:underline"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </li>
              </div>
            </ul>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Dashboard;
