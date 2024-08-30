export interface User {
  _id: string;
  name: string;
  email: string;
  // password: string;
  lastName?: string;
  location?: string;
  role: "user" | "admin";
  avatar?: string;
  avatarPublicId?: string;
}
