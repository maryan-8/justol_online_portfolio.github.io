document.addEventListener("DOMContentLoaded", () => {
  fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById('projects-container');
      container.innerHTML = projects.map(project => `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `).join('');
    })
    .catch(() => {
      document.getElementById('projects-container').innerText = "Projects coming soon!";
    });
});
