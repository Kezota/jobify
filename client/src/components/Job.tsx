import { Form, Link } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";

day.extend(advancedFormat);

type JobProps = {
  _id: string;
  company: string;
  position: string;
  jobStatus: "pending" | "interview" | "declined"; // JOB_STATUS
  jobType: "full-time" | "part-time" | "internship"; // JOB_TYPE
  jobLocation: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export default function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}: JobProps) {
  const date = day(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
}
