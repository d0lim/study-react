import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useEffectAfterMount } from "../../hooks/useEffectAfterMount";
import ToggleButton from "./ToggleButton";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";

const ToggleContext = createContext<{ on: boolean; toggle: any }>({
  on: false,
  toggle: null,
});

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(
      "Toggle compound component must be rendered in Toggle component"
    );
  }
  return context;
}

export type ToggleProps = {
  onToggle: (on: boolean) => void;
  children: React.ReactElement | React.ReactElement[];
};

function Toggle({ onToggle, children }: ToggleProps) {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((oldOn) => !oldOn), []);
  useEffectAfterMount(() => {
    onToggle(on);
  }, [on]);
  const value = useMemo(() => ({ on, toggle }), [on]);
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}

Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;
Toggle.Button = ToggleButton;

export default Toggle;
