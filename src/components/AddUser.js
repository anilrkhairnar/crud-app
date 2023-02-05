import react from "react";

const addUser = () => {
  const handleSubmit = () => {};
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-10 lg:w-3/12 flex flex-col gap-4 bg-red-50 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-extrabold text-center text-gray-700">
          Add User
        </h1>
        <input
          type="text"
          placeholder="First Name"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          // onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          // onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          // onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          required
          className="p-3 text-base text-gray-700 rounded-lg border border-red-100 outline-red-200"
          // onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <button className="p-3 text-base font-bold active:bg-gray-600 rounded-lg bg-gray-500 text-white duration-50 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default addUser;
