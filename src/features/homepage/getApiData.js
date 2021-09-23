import axios from "axios";

const apiLink = "https://api.github.com/users/izabelanowak/repos";

export const getApiData = () => {
  return axios.get(apiLink).then((response) => response.data);
};
