/* eslint-disable no-unused-vars */
import axios from "axios";

const fetchUserData = async (username, location = "", minRepos = "") => {
    try {
        let query = `q=${username}`;

        // Add additional filters for location and min repositories
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        const response = await axios.get(`https://api.github.com/search/users?${query}`);
        return response.data.items; // Return the array of user data from the API response
    } catch (error) {
        throw new Error("User not found or invalid query");
    }
};

export default fetchUserData;
