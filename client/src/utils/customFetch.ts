import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-5jcs5x4vn-kezotas-projects.vercel.app/api/v1",
});

export default customFetch;
