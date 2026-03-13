const navs = [
    {
        title: "Itinerarios en el Tiempo",
        content: "Inicio",
        link: "index.html"
    },
    {
        title: "ISEP",
        content: "Materiales",
        link: "index.html/#materiales"
    },
    {
        title: "Ministerio de Educación",
        content: "Acerca de",
        link: "acercade.html"
    },
    
    // Agrega links del nav aquí
];

function displayNavs() {
    const navList = document.getElementById('nav-list');
    navList.innerHTML = ''; // Limpiar el contenido previo
    navs.forEach((nav) => {
        const navCard = document.createElement('div');
        navCard.className = 'nav-card';
        navCard.innerHTML = `
        <a href="${nav.link}" alt="${nav.title}">
            ${nav.content}
        </a>
        `;
        navList.appendChild(navCard);
    });
}


// Llamar a la función para mostrar los proyectos
displayNavs();
