const projects = [
    {
        title: "Smart Waste Management",
        description:
        "IoT based system for garbage monitoring and overflow detection."
    },
    {
        title: "Quick Note App",
        description:
        "Full-stack note application using Node.js and MySQL."
    },
    {
        title: "Portfolio Website",
        description:
        "Responsive portfolio with backend and database integration."
    }
];

const container =
document.getElementById("projects-container");

projects.forEach(project => {

    container.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("success")
    .innerText =
    "Message sent successfully!";

    this.reset();
});