import { useState } from "react";
import fetchUserData from "../services/githubService"; // Import the service

const Search = () => {
  const [username, setUsername] = useState(""); // State for input value
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for errors
  const [userData, setUserData] = useState(null); // State for user data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch the user data
      setUserData(data); // Set the user data if successful
    } catch (error) {
      setError(error.message); // Set the error message if an error occurs
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData && (
        <div className="user-results mt-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className="user-info p-4 border rounded-md shadow-lg mb-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-32 h-32 rounded-full mb-4 mx-auto"
              />
              <h2 className="text-center text-xl font-bold">{user.login}</h2>
              <p className="text-center text-gray-500">
                {user.location ? user.location : "No location specified"}
              </p>
              <p className="text-center">Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 mt-2"
              >
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
