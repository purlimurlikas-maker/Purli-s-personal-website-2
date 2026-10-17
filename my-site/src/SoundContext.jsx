import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(
    () => localStorage.getItem("site-muted") === "true"
  );
  const playingAudio = useRef(new Set());

  useEffect(() => {
    localStorage.setItem("site-muted", String(muted));
    playingAudio.current.forEach((audio) => {
      audio.muted = muted;
    });
  }, [muted]);

  const playSound = useCallback((src) => {
    if (muted) return;

    const audio = new Audio(src);
    audio.muted = muted;
    playingAudio.current.add(audio);
    audio.onended = () => playingAudio.current.delete(audio);
    audio.play().catch(() => {});
  }, [muted]);

  return (
    <SoundContext.Provider value={{ muted, setMuted, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}