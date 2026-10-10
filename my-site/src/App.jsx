import { useState } from "react";
import Hero from "./components/Hero";
import ThingsIMade from "./components/ThingsIMade";
import Favourites from "./components/Favourites";


function About() {
  return (
    <section className="about">
      <h2>Who am I?</h2>
      <p>That might be a difficult question sometimes. My name is Purli. I am a thirteen year old girl from Estonia.</p>
      <img></img>
    </section>
  );
}

function contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Contact me: purlimurlikas@gmail.com</p>
    </section>
  );
}

function hobbies() {
  return (
    <section className="hobbies">
      <h2>My hobbies</h2>
      <p>My hobbies are swimming, cooking, eating, coding and travelling. I also listen to lots of music (ESPECIALLY Beyoncé).</p>
    </section>
  );
}

const chapters = [Hero, About, hobbies, Favourites, ThingsIMade, contact];

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