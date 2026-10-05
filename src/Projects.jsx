function Projects() {
  const projets = [
    {
      titre: "Portfolio personnel",
      description: "Un site web pour présenter mon parcours, mes compétences et mes projets.",
      tech: ["React", "CSS", "Vite"],
    },
    {
      titre: "Application de gestion",
      description: "Une interface simple pour suivre des tâches et gérer des données utilisateur.",
      tech: ["JavaScript", "DOM", "UX"],
    },
    {
      titre: "Mini blog",
      description: "Un projet de publication avec des articles et une mise en page claire.",
      tech: ["React", "Props", "State"],
    },
  ];

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        {projets.map((projet, index) => (
          <article key={index} className="project-card">
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>

            <div className="tags">
              {projet.tech.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
