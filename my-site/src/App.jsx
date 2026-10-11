import { useState } from "react";
import Hero from "./components/Hero";
import ThingsIMade from "./components/ThingsIMade";
import Favourites from "./components/Favourites";
import mePhoto from "./components/58BA9159-B516-400A-827B-976F935B1133_1_105_c.jpeg";
import travelPhoto from "./components/E332C295-CC31-4B7B-A8EA-9A65D97F9291_1_105_c.jpeg";


function About() {
  return (
    <section>
      <div className="about">
      <h2>Who am I?</h2>
      <p>My name is Purli. I am a thirteen year old girl from Estonia. I am a Christian and feminist.</p>
      <img className="me" src={mePhoto} alt="Purli" />
      </div>
    </section>
  );
}


function hobbies() {
  return (
    <section className="hobbies">
      <h2>My hobbies</h2>
      <p>My hobbies are swimming, cooking, eating, coding and travelling. I also listen to lots of music (ESPECIALLY Beyoncé).</p>
      <img className="travel" src={travelPhoto} alt="Travel" />
    </section>
  );
}

function favouritefood() {
  return (
    <section className="food">
      <h2>My favourite food</h2>
      <p>I am an absolute pastaholic, if I could eat one thing for the rest of my life, it would definitely be pasta. I love all sorts of different types of pasta, like spicy garlic pasta, tomato pasta, creamy pasta, uhhh yeah just a lotttt of pasta :).</p>
      <img className="pasta1" src="https://i.pinimg.com/736x/b3/f1/ad/b3f1ada878dcbf073760058dd30c607c.jpg"></img>
      <img className="pasta2" src="https://i.pinimg.com/736x/88/3a/ed/883aeda3bc1f5d6770fe15b40a4b69a9.jpg"></img>
    </section>
  );
}

const chapters = [Hero, About, hobbies, Favourites, favouritefood, ThingsIMade];

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