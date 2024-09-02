import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://jobify-server-mnzel09su-kezotas-projects.vercel.app//api/v1",
});

export default customFetch;
