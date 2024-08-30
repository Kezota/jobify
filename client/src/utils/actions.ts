import { ActionFunctionArgs, redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { toast } from "react-toastify";

type actionProps = {
  request: Request;
};

interface CustomError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const registerAction = async ({ request }: actionProps) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError.response?.data?.message || "An error occurred");
    return error;
  }
};

export const loginAction = async ({ request }: actionProps) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message || "An error occurred");
    return error;
  }
};

export const addJobAction = async ({ request }: actionProps) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("all-jobs");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message || "An error occurred");
    return error;
  }
};

export const editJobAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params?.id}`, data);
    toast.success("Job edited successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message || "An error occurred");
    return null;
  }
};

export const deleteJobAction = async ({ params }: ActionFunctionArgs) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message || "An error occurred");
    return null;
  }
};
