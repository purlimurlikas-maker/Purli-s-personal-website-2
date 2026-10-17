
import click from "../assets/click.mp3";
import { useSound } from "../SoundContext";

export default function SoundButton({ onClick, children }) {
  const { playSound } = useSound();

  function handleClick() {
    playSound(click);
    onClick();
  }

  return <button onClick={handleClick}>{children}</button>;
}