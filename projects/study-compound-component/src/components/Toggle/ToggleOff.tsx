import { useToggleContext } from ".";

export type ToggleOffProps = {
  children: React.ReactElement;
};

function ToggleOff({ children }: ToggleOffProps) {
  const { on } = useToggleContext();
  return on ? null : children;
}

export default ToggleOff;
