export interface Job {
  _id: string;
  company: string;
  position: string;
  jobStatus: "pending" | "interview" | "declined"; // JOB_STATUS
  jobType: "full-time" | "part-time" | "internship"; // JOB_TYPE
  jobLocation: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
