import { ActionFunctionArgs, redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { toast } from "react-toastify";

interface CustomError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const registerAction = async ({ request }: ActionFunctionArgs) => {
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

export const loginAction = async ({ request }: ActionFunctionArgs) => {
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

export const addJobAction = async ({ request }: ActionFunctionArgs) => {
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

export const profileAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && (file as File).size > 2000000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    const customError = error as CustomError;
    toast.error(customError?.response?.data?.message || "An error occurred");
  }
  return null;
};
