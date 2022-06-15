import { useToggleContext } from ".";

export type ToggleOnProps = {
  children: React.ReactElement;
};

function ToggleOn({ children }: ToggleOnProps) {
  const { on } = useToggleContext();
  return on ? children : null;
}

export default ToggleOn;
