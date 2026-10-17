import openSound from "../assets/Open.mp3";
import { useSound } from "../SoundContext";

export default function ProjectCard({ name, image, link }) {
  const { playSound } = useSound();

  function handleClick() {
    playSound(openSound);
  }

  return (
    <article className="card">
      <div className="project">
        <h2 className="projectheading">{name}</h2>
        <img className="projectimg" src={image} alt={name} />
        <a
          className="link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          check it out
        </a>
      </div>
    </article>
  );
}