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
                <div className="user-info">
                    <img src={userData.avatar_url} alt={userData.login} />
                    <h2>{userData.name}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        Visit GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
