import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <p className="p-8 text-center">Case study not found</p>;

  return (
    <article className="prose mx-auto py-16">
      <h1 className="mb-4">{project.title}</h1>
      <p className="lead mb-8">{project.overview}</p>

      {project.images?.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} className="mb-6 rounded" />
      ))}

      {project.sections.map((sec, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{sec.heading}</h2>
          <p>{sec.content}</p>
        </section>
      ))}

      {project.codeLink && (
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90"
        >
          View Code on GitHub
        </a>
      )}
    </article>
  );
}
