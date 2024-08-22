import Wrapper from "../assets/wrappers/ThemeToggle";
import {
  DashboardContextType,
  useDashboardContext,
} from "../pages/DashboardLayout";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } =
    useDashboardContext() as DashboardContextType;
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
}
