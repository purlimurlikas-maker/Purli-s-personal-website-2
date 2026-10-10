import ProjectCard from "./ProjectCard";

const projects = [
  { name: "Summerglobe", blurb: "shake it for a kind or motivational sentence", link: "https://purlimurlikas-maker.github.io/Purli-s-summerglobe/" },
  { name: "Random space fact", blurb: "a website, which gives you a random space fact upon pressing the button", link: "https://purlimurlikas-maker.github.io/Space-fact/" },
  { name: "UniverseTab", blurb: "a UniverseTab", link: "https://purlimurlikas-maker.github.io/UniverseTab/" },
  { name: "Tiana's PalaceOS", blurb: "Princess Tiana-themed webOS", link: "https://purlimurlikas-maker.github.io/Tiana-s-PalaceOS/" },
  { name: "MoanaOS", blurb: "Moana-themed webOS", link: "https://purlimurlikas-maker.github.io/MoanaOS/" },
  { name: "Wise random fact tortoise", blurb: "a website, which has a wise tortoise, who gives you a random fact upon pressing the button", link: "https://purlimurlikas-maker.github.io/Random-fact-tortoise/" },
  { name: "BeyonceOS", blurb: "A Beyonce-themed webOS.", link: "https://purlimurlikas-maker.github.io/BeyonceOS/" },
  { name: "Andromeda exploration", blurb: "Andromeda exploration is a visual novel about exploring space.", link: "https://purlimurlikas-maker.itch.io/andromeda-exploration-visual-novel-game" },
  { name: "Aviation Tortoise", blurb: "a website, which has a tortoise, who gives you a random fact about aviation upon pressing a button", link: "https://purlimurlikas-maker.github.io/Aviation-Fact-Tortoise/" },
  { name: "Personal website 1", blurb: "my first personal website", link: "https://purlimurlikas-maker.github.io/purli-s-personal-website/"},
  { name: "Personal website (Advanced version)", blurb: "the advanced personal website version", link: "" },
  { name: "Slack bot delilah6312", blurb: "Slack Bot", link: "https://github.com/purlimurlikas-maker/Purli-s-repository"},
];

export default function ThingsIMade() {
  return (
    <section>
      <h2>things I made</h2>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  );
}