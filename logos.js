const logos = [
    {
        title: "Itinerarios en el Tiempo",
        image: "img/logo-itinerarios.png",
        link: "https://isep-cba.edu.ar/"
    },
    {
        title: "ISEP",
        image: "img/logo-isep.png",
        link: "https://isep-cba.edu.ar/"
    },
    {
        title: "Ministerio de Educación",
        image: "img/logo-ministerio.png",
        link: "https://isep-cba.edu.ar/"
    },
    {
        title: "ISEP",
        image: "img/logo-gobierno.png",
        link: "https://isep-cba.edu.ar/"
    },
    
    // Agrega más proyectos aquí
];

function displayLogos() {
    const logoList = document.getElementById('logo-list');
    logoList.innerHTML = ''; // Limpiar el contenido previo
    logos.forEach((logo) => {
        const logoCard = document.createElement('div');
        logoCard.className = 'logo-card';
        logoCard.innerHTML = `
        <a href="${logo.link}" target="_blank">
            <img src="${logo.image}" alt="${logo.title}">
        </a>
        `;
        logoList.appendChild(logoCard);
    });
}


// Llamar a la función para mostrar los proyectos
displayLogos();
