export default function ProjectCard({ name, image, link }) {
  return (
    <article className="card">
      <p className="project">
      <h2 className="projectheading">{name}</h2>
      <img className="projectimg" src={image} alt={name}></img>
      <a className="link" href={link}>check it out</a>
      </p>
    </article>
  );
}
