import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const getPublicContext = () => {
  return axios.get(API_URL + "all");
}

const getUserBoard = () => {
  return axios.get(API_URL + "user");
}

const getModeratorBoard = () => {
  return axios.get(API_URL + "moderator");
}

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
}



const UserService = {
  getPublicContext,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;