function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg md:max-w-md lg:max-w-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto md:w-44 md:h-44"
      />
      <h1 className="text-xl text-blue-800 my-4 md:text-2xl lg:text-3xl">
        John Doe
      </h1>
      <p className="text-gray-600 text-base md:text-lg lg:text-xl">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
