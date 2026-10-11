import { useState } from "react";
import Hero from "./components/Hero";
import ThingsIMade from "./components/ThingsIMade";
import Favourites from "./components/Favourites";
import favouritefood from "./components/favouritefood";
import hobbies from "./components/hobbies";
import about from "./components/about"


const chapters = [Hero, about, hobbies, Favourites, favouritefood, ThingsIMade];

export default function App() {
  const [step, setStep] = useState(0);
  const finished = step === chapters.length - 1;

  return (
    <main>
      {chapters.slice(0, step + 1).map((Chapter, i) => (
        <Chapter key={i} />
      ))}

      {!finished && (
        <button onClick={() => setStep(step + 1)}>keep getting to know me</button>
      )}
    </main>
  );
}