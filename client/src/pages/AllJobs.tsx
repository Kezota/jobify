import { createContext, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Job } from "../types/job";
import SearchContainer from "../components/SearchContainer";
import JobsContainer from "../components/JobsContainer";

const AllJobsContext = createContext({});
export type AllJobsContextType = {
  data: {
    jobs: Job[];
    totalJobs: number;
    numOfPages: number;
  };
  searchValues: {
    search: string;
    jobStatus: string;
    jobType: string;
    sort: string;
  };
};

export default function AllJobs() {
  const jobs = useLoaderData() as Job[];
  const data = {
    jobs,
    totalJobs: jobs.length,
    numOfPages: 1,
  };
  const searchValues = {
    search: "",
    jobStatus: "pending",
    jobType: "full-time",
    sort: "createdAt",
  };

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

export const useAllJobsContext = () => useContext(AllJobsContext);
