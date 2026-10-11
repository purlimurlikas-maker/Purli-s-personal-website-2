export default function ProjectCard({ name, link }) {
  return (
    <article className="card">
      <p className="project">
      <h2>{name}</h2>
      <a className="link" href={link}>check it out</a>
      </p>
    </article>
  );
}
