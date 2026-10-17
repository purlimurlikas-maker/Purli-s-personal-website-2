import ProjectCard from "./ProjectCard";
import SummerGlobe from "./summerglobe.png";
import Spacetortoise from "./spacetortoise.png";
import UniverseTab from "./UniverseTab.png";
import TianaOS from "./TianasOS.png";
import MoanaOS from "./MoanaOS.png";
import randomtortoise from "./randomfacttortoise.png";
import BeyonceOS from "./BeyonceOS.png";
import Andromeda from "./Andromeda.png";
import Aviationtortoise from "./Aviation.png";
import Personalwebsite1 from "./Personalwebsite1.png";
import SlackBot from "./SlackBot.png"



const projects = [
  { name: "Summerglobe", image: SummerGlobe, link: "https://purlimurlikas-maker.github.io/Purli-s-summerglobe/" },
  { name: "Random space fact", image: Spacetortoise , link: "https://purlimurlikas-maker.github.io/Space-fact/" },
  { name: "UniverseTab", image: UniverseTab, link: "https://purlimurlikas-maker.github.io/UniverseTab/" },
  { name: "Tiana's PalaceOS", image: TianaOS, link: "https://purlimurlikas-maker.github.io/Tiana-s-PalaceOS/" },
  { name: "MoanaOS", image: MoanaOS, link: "https://purlimurlikas-maker.github.io/MoanaOS/" },
  { name: "Wise random fact tortoise", image: randomtortoise, link: "https://purlimurlikas-maker.github.io/Random-fact-tortoise/" },
  { name: "BeyonceOS", image: BeyonceOS, link: "https://purlimurlikas-maker.github.io/BeyonceOS/" },
  { name: "Andromeda exploration", image: Andromeda, link: "https://purlimurlikas-maker.itch.io/andromeda-exploration-visual-novel-game" },
  { name: "Aviation Tortoise", image: Aviationtortoise, link: "https://purlimurlikas-maker.github.io/Aviation-Fact-Tortoise/" },
  { name: "Personal website 1", image: Personalwebsite1, link: "https://purlimurlikas-maker.github.io/purli-s-personal-website/"},
  { name: "Slack bot delilah6312", image: SlackBot, link: "https://github.com/purlimurlikas-maker/Purli-s-repository"},
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

{projects.map((project, i) => (
  <ProjectCard
    key={project.name}
    {...project}
    style={{ "--i": i }}
  />
))}