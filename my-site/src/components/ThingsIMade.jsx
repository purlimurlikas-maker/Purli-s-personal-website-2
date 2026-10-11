import ProjectCard from "./ProjectCard";
import SummerGlobe from "./summerglobe.png"

const projects = [
  { name: "Summerglobe", image: SummerGlobe, link: "https://purlimurlikas-maker.github.io/Purli-s-summerglobe/" },
  { name: "Random space fact", link: "https://purlimurlikas-maker.github.io/Space-fact/" },
  { name: "UniverseTab", link: "https://purlimurlikas-maker.github.io/UniverseTab/" },
  { name: "Tiana's PalaceOS", link: "https://purlimurlikas-maker.github.io/Tiana-s-PalaceOS/" },
  { name: "MoanaOS", link: "https://purlimurlikas-maker.github.io/MoanaOS/" },
  { name: "Wise random fact tortoise", link: "https://purlimurlikas-maker.github.io/Random-fact-tortoise/" },
  { name: "BeyonceOS", link: "https://purlimurlikas-maker.github.io/BeyonceOS/" },
  { name: "Andromeda exploration", link: "https://purlimurlikas-maker.itch.io/andromeda-exploration-visual-novel-game" },
  { name: "Aviation Tortoise", link: "https://purlimurlikas-maker.github.io/Aviation-Fact-Tortoise/" },
  { name: "Personal website 1", link: "https://purlimurlikas-maker.github.io/purli-s-personal-website/"},
  { name: "Personal website (Advanced version)", link: "" },
  { name: "Slack bot delilah6312", link: "https://github.com/purlimurlikas-maker/Purli-s-repository"},
];

export default function ThingsIMade() {
  return (
    <section className="thingsimade">
      <h2>things I made</h2>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  );
}