import { useToggleContext } from ".";

function OnOffButton({ on, ...rest }: { on: boolean; [x: string]: any }) {
  return on ? <button {...rest}>OFF</button> : <button {...rest}>ON</button>;
}

function ToggleButton({ ...rest }) {
  const { on, toggle } = useToggleContext();
  return <OnOffButton on={on} onClick={toggle} {...rest} />;
}

export default ToggleButton;
