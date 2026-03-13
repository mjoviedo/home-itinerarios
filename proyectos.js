const projects = [
    {
        title: "La formación docente y el normalismo en Córdoba",
        category: "Cuadernos",
        description: "Descripción del Proyecto 1. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img1.jpg",
        link: "img/img1.jpg"
    },
    {
        title: "Proyecto 2",
        category: "Cuadernos",
        description: "Descripción del Proyecto 2. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img2.jpg",
        link: "https://example.com/proyecto2"
    },
    {
        title: "Proyecto 3",
        category: "Cuadernos",
        description: "Descripción del Proyecto 3. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img3.jpg",
        link: "https://example.com/proyecto3"
    },
    {
        title: "Proyecto 1",
        category: "Cuadernos",
        description: "Descripción del Proyecto 1. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img4.jpg",
        link: "img/img1.jpg"
    },
    {
        title: "Proyecto 2",
        category: "Cuadernos",
        description: "Descripción del Proyecto 2. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img5.jpg",
        link: "https://example.com/proyecto2"
    },
    {
        title: "Proyecto 3",
        category: "Cuadernos",
        description: "Descripción del Proyecto 3. Aquí puedes colocar información adicional sobre el proyecto.",
        image: "img/img6.jpg",
        link: "https://example.com/proyecto3"
    },
    // Agrega más proyectos aquí
];

function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Limpiar el contenido previo
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
        <div onclick="openModal(${index})">
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p class="category">${project.category}</p>
            <p class="descripcion-corta">${project.description}</p>
            <!--<button onclick="openModal(${index})">Ver Proyecto</button>-->
        </div>
        `;
        projectList.appendChild(projectCard);
    });
}

function openModal(index) {
    const project = projects[index];
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-category').src = project.category;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-link').href = project.link;

    const modal = document.getElementById('project-modal');
    modal.style.display = "block";

    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Llamar a la función para mostrar los proyectos
displayProjects();
