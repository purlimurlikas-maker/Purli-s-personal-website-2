export default function ProjectCard({ name, link }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <a href={link}>check it out</a>
    </article>
  );
}
