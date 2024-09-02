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
    currentPage: number;
  };
  searchValues: {
    search: string;
    jobStatus: string;
    jobType: string;
    sort: string;
  };
};

export default function AllJobs() {
  const { data, searchValues } = useLoaderData() as AllJobsContextType;

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAllJobsContext = () => useContext(AllJobsContext);
