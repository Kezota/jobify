import Wrapper from "../assets/wrappers/StatItem";

type StatItemProps = {
  count: number;
  title: string;
  icon: JSX.Element;
  color: string;
  bcg: string;
};

export default function StatItem({
  count,
  title,
  icon,
  color,
  bcg,
}: StatItemProps) {
  return (
    <Wrapper color={color} itemProp={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
}
