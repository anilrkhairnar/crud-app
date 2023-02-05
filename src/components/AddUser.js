import react, { useState } from "react";
import axios from "axios";

// icon
import arrowBackIcon from "../assets/images/arrow_back.svg";

const AddUser = ({ user, setUser, setAddUserEnv }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://blue-journalist-bbrpv.ineuron.app:4000/user/create",
        user
      );
      setAddUserEnv(false);
    } catch (error) {
      console.log("error while adding user", error);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-3/12 flex flex-col gap-4 bg-red-50 rounded-lg shadow-lg"
      >
        <div className="flex gap-14">
          <img
            className="p-1 w-7 cursor-pointer"
            src={arrowBackIcon}
            alt="arrowBackIcon"
            onClick={() => setAddUserEnv(false)}
          />
          <h1 className="text-2xl font-extrabold text-center text-gray-700">
            Add User
          </h1>
        </div>
        <input
          type="text"
          placeholder="First Name"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />

        <button className="p-3 text-base font-bold active:bg-gray-600 rounded-lg bg-gray-500 text-white duration-50 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
