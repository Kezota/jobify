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

export const allJobsLoader: LoaderFunction = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message);
    return error;
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

export const adminLoader: LoaderFunction = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

export const statsLoader: LoaderFunction = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
