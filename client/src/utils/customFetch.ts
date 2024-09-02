import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-server-c4ism34tl-kezotas-projects.vercel.app/api/v1",
});

export default customFetch;
