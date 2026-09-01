const navs = [
    {
        title: "Inicio",
        content: "Inicio",
        link: "index.html"
    },
    {
        title: "Acerca de",
        content: "Acerca de",
        link: "acercade.html"
    },
      {
        title: "Materiales",
        content: "Materiales",
        link: "materiales.html"
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
