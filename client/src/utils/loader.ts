import { redirect } from "react-router-dom";
import customFetch from "./customFetch";
import { User } from "../types/user";

export const dashboardLoader = async (): Promise<User | Response> => {
  try {
    const { data } = await customFetch("/users/current-user");

    if (data) {
      return data.user as User;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};
