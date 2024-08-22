import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <nav>home</nav>
      <Outlet />
    </div>
  );
}
