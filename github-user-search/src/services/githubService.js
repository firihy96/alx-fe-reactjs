/* eslint-disable no-unused-vars */
import axios from "axios";

// Fetch user data from GitHub API
const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data; // Return the user data if successful
    } catch (error) {
        throw new Error("User not found"); // Throw an error if something goes wrong
    }
};

export default fetchUserData;
