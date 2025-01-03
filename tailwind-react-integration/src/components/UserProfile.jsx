function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-12 rounded-lg shadow-lg md:text-xl md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 text-center">
        John Doe
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
