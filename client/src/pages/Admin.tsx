import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "../components/StatItem";
import { FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

type AdminLoaderData = {
  users: number;
  jobs: number;
};

export default function Admin() {
  const { users, jobs } = useLoaderData() as AdminLoaderData;

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
}
