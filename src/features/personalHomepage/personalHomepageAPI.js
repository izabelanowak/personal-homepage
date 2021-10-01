import axios from "axios";

const githubAPIBaseURL = "https://api.github.com/users/izabelanowak/repos";

export const getRepositories = username =>
  axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
    .then((response) => response.data);