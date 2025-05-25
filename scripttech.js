// Define tus datos de proyectos y tecnologías aquí
const projectsData = [
    {
        id: "country-app", // Usaremos este ID para el data-project-id en HTML
        technologies: [
            {
                name: "HTML5",
                accentColor: "#E44D26",
                href: "https://developer.mozilla.org/es/docs/Web/HTML",
                svgPath: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            },
            {
                name: "Tailwind",
                accentColor: "#15B8C5",
                href: "https://tailwindcss.com/",
                svgPath: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            },
            {
                name: "DaisyUI",
                accentColor: "#21D2A8",
                href: "https://daisyui.com/",
                svgPath: "M12 0C7.828.001 4.396 3.433 4.395 7.605c.001 4.172 3.433 7.604 7.605 7.605 4.172-.001 7.604-3.433 7.605-7.605C19.604 3.433 16.172.001 12 0Zm0 .286c4.016 0 7.32 3.304 7.32 7.32-.001 4.015-3.305 7.318-7.32 7.318-4.015 0-7.319-3.304-7.32-7.319 0-4.016 3.304-7.32 7.32-7.32zm0 4.04a3.294 3.294 0 0 0-3.279 3.279v.001A3.296 3.296 0 0 0 12 10.884a3.294 3.294 0 0 0 3.279-3.279A3.294 3.294 0 0 0 12 4.326ZM8.34 16.681h-.008a3.67 3.67 0 0 0-3.652 3.652v.015A3.67 3.67 0 0 0 8.332 24h7.336a3.67 3.67 0 0 0 3.652-3.652v-.016a3.67 3.67 0 0 0-3.652-3.652h-.008Z"
            },
            {
                name: "Angular",
                accentColor: "#DD0031", // Color oficial de Angular, el que usaste antes (rgb(134, 10, 134) era muy oscuro)
                href: "https://angular.io/",
                svgPath: "M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"
            },
            {
                name: "TypeScript",
                accentColor: "#087ECE",
                href: "https://www.typescriptlang.org/",
                svgPath: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            }
            // Agrega más tecnologías aquí si las necesitas para otros proyectos
        ]
    }
    // Puedes añadir más objetos de proyectos aquí si tienes más tarjetas de proyecto
    // {
    //     id: "another-project",
    //     technologies: [
    //         // ... otras tecnologías para este proyecto
    //     ]
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    projectsData.forEach(project => {
        const socialsContainer = document.querySelector(`.socials-container[data-project-id="${project.id}"]`);

        if (socialsContainer) {
            project.technologies.forEach(tech => {
                const techLink = document.createElement('a');
                techLink.setAttribute('data-social', tech.name);
                techLink.style.setProperty('--accent-color', tech.accentColor);
                techLink.href = tech.href;
                techLink.target = "_blank"; // Abrir en nueva pestaña

                // Crear el SVG
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("role", "img");
                svg.setAttribute("viewBox", "0 0 24 24");

                const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
                title.textContent = tech.name;
                svg.appendChild(title);

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", tech.svgPath);
                svg.appendChild(path);

                techLink.appendChild(svg);
                socialsContainer.appendChild(techLink);
            });
        }
    });
});