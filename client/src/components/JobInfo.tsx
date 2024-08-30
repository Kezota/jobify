import Wrapper from "../assets/wrappers/JobInfo";

export default function JobInfo({
  icon,
  text,
}: {
  icon: JSX.Element;
  text: string;
}) {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </Wrapper>
  );
}
