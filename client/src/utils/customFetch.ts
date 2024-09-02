import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-b5qz3yg0n-kezotas-projects.vercel.app/api/v1",
});

export default customFetch;
