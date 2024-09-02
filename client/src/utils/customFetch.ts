import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-git-main-kezotas-projects.vercel.app/api/v1",
  // baseURL: "/api/v1",
});

export default customFetch;
