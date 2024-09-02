import { useLoaderData } from "react-router-dom";
import StatsContainer from "../components/StatsContainer";
import ChartsContainer from "../components/ChartsContainer";

type statsLoaderType = {
  defaultStats: {
    pending: number;
    interview: number;
    declined: number;
  };
  monthlyApplications: {
    date: string;
    count: number;
  }[];
};

export default function Stats() {
  const { defaultStats, monthlyApplications } =
    useLoaderData() as statsLoaderType;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
}
