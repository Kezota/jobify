import Wrapper from "../assets/wrappers/BigSidebar";
import {
  DashboardContextType,
  useDashboardContext,
} from "../pages/DashboardLayout";
import Logo from "./Logo";
import { NavLinks } from "../components";

export default function BigSidebar() {
  const { showSidebar } = useDashboardContext() as DashboardContextType;
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
}
