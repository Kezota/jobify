import { redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { toast } from "react-toastify";

interface CustomError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const registerAction = async ({ request }: { request: Request }) => {
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
