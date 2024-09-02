import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-mb81nbkib-kezotas-projects.vercel.app/api/v1",
});

export default customFetch;
