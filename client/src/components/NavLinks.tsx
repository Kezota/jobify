import { NavLink } from "react-router-dom";
import {
  DashboardContextType,
  useDashboardContext,
} from "../pages/DashboardLayout";
import links from "../utils/links";

export default function NavLinks({ isBigSidebar }: { isBigSidebar?: boolean }) {
  const { toggleSidebar, user } = useDashboardContext() as DashboardContextType;

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user!;
        if (role !== "admin" && path === "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? () => {} : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
