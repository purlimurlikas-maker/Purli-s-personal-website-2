import { useSound } from "./SoundContext";

export default function SoundToggle() {
  const { muted, setMuted } = useSound();

  return (
    <button
      onClick={() => setMuted((value) => !value)}
      aria-label={muted ? "Turn sound on" : "Turn sound off"}
      style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}
    >
      {muted ? "Sound off" : "Sound on"}
    </button>
  );
}