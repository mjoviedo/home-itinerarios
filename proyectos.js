const projects = [
    {
        title: "Las Escuelas Normales en la génesis del sistema formador",
        category: "Documental",
        description: "A través del testimonio de docentes, actores locales y especialistas, conocé el proceso de creación de las primeras instituciones formadoras de la provincia de Córdoba, descubriendo el proyecto normalista y su rol en la génesis del sistema formador cordobés.",
        image: "img/m1-las-escuelas-normales.jpg",
        link: "https://www.youtube.com/watch?v=RCcQ0N93DwM"
    },
    {
        title: "Cartografías de la formación docente en Córdoba",
        category: "Conversatorio",
        description: "Asistí a la conversación entre los especialistas Pablo Pineau y Gabriela Lamelas sobre algunos rasgos del momento fundacional del normalismo, con énfasis en la provincia de Córdoba.",
        image: "img/m2-cartografias.jpg",
        link: "https://www.youtube.com/watch?v=0JeT9ynmkIY"
    },
    {
        title: "La casa del diablo. Jennie Howard en la Escuela Normal Nacional de la ciudad de Córdoba.",
        category: "Podcast",
        description: "Adentrate en el periodo normalista a través de la mirada de la maestra norteamericana Jennie Howard, luego de su corto y atribulado paso por la ciudad de Córdoba entre 1886 y 1888.",
        image: "img/m3-podcast-jenny.jpg",
        link: "https://youtu.be/Bb-DF7Z-XUw"
    },
    {
        title: "Su escuela, su vida. Una experiencia pedagógica innovadora en la Esc. Normal Sup. Córdoba capital, 1946",
        category: "Podcast",
        description: "Es 1946 y en la Escuela Normal Superior Nacional se estudia, ensaya y prepara una obra de teatro escolar que llegará a la sala más importante de la ciudad de Córdoba. Sumergite en el periodo escolanovista en este viaje en el tiempo.",
        image: "img/m4-su-escuela.jpg",
        link: "https://youtu.be/V9f9R1gPTb83"
    },
    {
        title: "El Agulla y sus orígenes",
        category: "Clip",
        description: "Este clip indaga en el contexto que llevó a la fundación, en 1941, de la Escuela Normal Superior “Dr. Agustín Garzón Agulla” en la ciudad de Córdoba.",
        image: "img/m5-el-agulla.jpg",
        link: "https://youtu.be/Dt3AuzOaoJs"
    },
    {
        title: "El Agulla. Sus bases pedagógicas fundacionales",
        category: "Clip",
        description: "Conocé en este clip las bases pedagógicas y didácticas del proyecto de la Escuela “Dr. Agustín Garzón Agulla” y cómo esas ideas se manifiestan en su arquitectura.",
        image: "img/m6-su-bases-pedagogicas.jpg",
        link: "https://youtu.be/Ok647kLQUkg"
    },
    {
        title: "Arquitectura, diseño y usos",
        category: "Album fotográfico",
        description: "En este álbum la Escuela Normal Superior “Dr. Alejandro Carbó” es “observada” fotográficamente desde el foco de la arquitectura, el diseño y los usos.",
        image: "img/img4.jpg",
        link: "https://isep-cba.github.io/itinerarios-carbo/"
    },
    {
        title: "La biblioteca como espacio, el libro como soporte y la lectura como práctica",
        category: "Album fotográfico",
        description: "Una mirada fotográfica del Instituto de Educación Superior Simón Bolívar atendiendo a las prácticas de lectura, sus soportes y los espacios donde los lectores las realizan.",
        image: "img/m7-la-biblioteca.jpg",
        link: "https://isep-cba.github.io/itinerarios-bolivar/"
    },
    {
        title: "La formación docente y el normalismo en Córdoba",
        category: "Cuaderno",
        description: "Este cuaderno pone el foco en un conjunto de procesos y acontecimientos que diferentes autores y autoras reconocen como vinculados, de modo fundamental, al surgimiento del normalismo en la Argentina.",
        image: "img/img2.jpg",
        link: "/multimedia/it-cuaderno1.pdf"
    },
    {
        title: "La formación docente en la primera mitad del siglo XX. Modernizaciones en un ciclo de expansión",
        category: "Cuaderno",
        description: "Entrado el siglo XX, algunas de las bases previas de la formación docente son revisadas, en especial, los planteos positivistas y el modelo didáctico “moderno”. Estos debates marcaron un nuevo momento de modernizaciones en un ciclo de expansión.",
        image: "img/img3.jpg",
        link: "/multimedia/it-cuaderno2.pdf"
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
            <p class="category">${project.category}</p>
            <h2>${project.title}</h2>
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
