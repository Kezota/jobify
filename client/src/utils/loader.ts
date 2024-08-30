import { LoaderFunction, redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { User } from "../types/user";
import { toast } from "react-toastify";
import { Job } from "../types/job";

interface CustomError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const dashboardLoader: LoaderFunction = async () => {
  try {
    const { data } = await customFetch("/users/current-user");
    return data.user as User;
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message);
    return redirect("/");
  }
};

export const allJobsLoader: LoaderFunction = async () => {
  try {
    const { data } = await customFetch.get("/jobs");

    if (data) {
      return data.jobs as Job;
    } else {
      throw new Error("Jobs data not found");
    }
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message);
    return null;
  }
};

export const editJobLoader: LoaderFunction = async ({ params }) => {
  const { id } = params as { id: string };
  try {
    const { data } = await customFetch.get(`/jobs/${id}`);
    if (data && data.job) {
      return data.job as Job;
    } else {
      return redirect("/dashboard/all-jobs");
    }
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message);
    return redirect("/dashboard/all-jobs");
  }
};
