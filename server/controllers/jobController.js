import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    // throw new Error(`Job with id ${id} not found`);
    return res.status(404).json({ message: `Job with id ${id} not found` });
  }

  res.status(200).json({ job });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "company and position are required" });
  }

  const job = { id: nanoid(10), company, position };
  jobs.push(job);
  res.status(200).json({ jobs });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `Job with id ${id} not found` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ message: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
};
