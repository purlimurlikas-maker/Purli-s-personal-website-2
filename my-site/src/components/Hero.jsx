import ".index.css"

export default function Hero() {
  return (
    <section className="hero">
      <h1>heyyyyyyyyy, I'm Purli</h1>
      <p>I'm a 13 year old girl from Estonia.</p>
    </section>
  );
}

export default function ProjectCard({ name, blurb, link }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{blurb}</p>
      <a href={link}>take a look</a>
    </article>
  );
}