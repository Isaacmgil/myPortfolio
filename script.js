document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('tech__container');

    if (!container) {
        console.error('No se encontró el contenedor con ID "tech__container"');
        return;
    }

    const technologies = [

        //HTML
        {
            name: "HTML",
            shortName: "HTML",
            accentColor: "#E44D26",
            hoverColor: "#E44D26",
            svgPath: `
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
            `,
            customStyles: `
                .tech-card[data-tech="HTML"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgb(255, 123, 0) !important;
                }
                .tech-card[data-tech="HTML"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgb(255, 230, 0.6)) !important;
                }
                .tech-card[data-tech="HTML"] .tech-halo {
                    background: radial-gradient(circle, rgba(255, 123, 0, 0.93) 0%, transparent 70%) !important;
                }
                    @keyframes borderGlow {
                        0% {
                            box-shadow: 0 0 5px rgb(255, 123, 0),
                                inset 0 0 5px rgb(255, 123, 0);
                        }

                        100% {
                            box-shadow: 0 0 15px rgb(255, 123, 0),
                                inset 0 0 10px rgb(255, 123, 0);
                        }
                    }
                .tech-card[data-tech="HTML"]:hover::before {
                    animation: borderGlowAngular 1.5s infinite alternate !important;
                    border-color: rgb(255, 123, 0) !important;
                }
            `
        },

        //CSS
        {
            name: "CSS",
            shortName: "CSS",
            accentColor: "rgb(0, 195, 221)",
            hoverColor: "rgb(0, 195, 221)",
            svgPath: `
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
            `,
            customStyles: `
                .tech-card[data-tech="CSS"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgb(0, 195, 221) !important;
                }
                .tech-card[data-tech="CSS"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgb(0, 195, 221)) !important;
                }
                .tech-card[data-tech="CSS"] .tech-halo {
                    background: radial-gradient(circle, rgb(0, 195, 221) 0%, transparent 70%) !important;
                }
                    @keyframes borderGlow {
                        0% {
                            box-shadow: 0 0 5px rgb(0, 195, 221),
                                inset 0 0 5px rgb(0, 195, 221);
                        }

                        100% {
                            box-shadow: 0 0 15px rgb(0, 195, 221),
                                inset 0 0 10px rgb(0, 195, 221);
                        }
                    }
                .tech-card[data-tech="CSS"]:hover::before {
                    animation: borderGlowCSS 1.5s infinite alternate !important;
                    border-color: rgb(0, 195, 221) !important;
                }
            `
        },

        //JavaScript
        {
            name: "JavaScript",
            shortName: "JS",
            accentColor: "rgb(255, 230, 0)",
            hoverColor: "rgb(255, 230, 0)",
            svgPath: `
                <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"> </path>
                                            <path
                                                d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                                                fill="#000000"> </path>
                                            <path
                                                d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                                                fill="#000000"> </path>
                                        </g>
                                    </g>
                                </svg>
            `,
            customStyles: `
                .tech-card[data-tech="JavaScript"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgb(255, 230, 0) !important;
                }
                .tech-card[data-tech="JavaScript"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgb(255, 230, 0.6)) !important;
                }
                .tech-card[data-tech="JavaScript"] .tech-halo {
                    background: radial-gradient(circle, rgba(255, 230, 0, 0.34) 0%, transparent 70%) !important;
                }
                    @keyframes borderGlow {
                        0% {
                            box-shadow: 0 0 5px rgb(255, 221, 0),
                                inset 0 0 5px rgb(255, 221, 0);
                        }

                        100% {
                            box-shadow: 0 0 15px rgb(255, 221, 0),
                                inset 0 0 10px rgb(255, 221, 0);
                        }
                    }
                .tech-card[data-tech="Angular"]:hover::before {
                    animation: borderGlowAngular 1.5s infinite alternate !important;
                    border-color: rgb(255, 230, 0) !important;
                }
            `
        },

        //TypeScript
        {
            name: "TypeScript",
            shortName: "TS",
            accentColor: "rgb(97, 182, 251)",
            hoverColor: "rgba(97, 218, 251, 0.6)",
            svgPath: `
            <svg viewBox="0 0 400 400" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style>.st0{fill:#007acc}.st1{fill:#fff}</style><path class="st0" d="M0 200V0h400v400H0"></path><path class="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"></path></g></svg>
            `,
            customStyles: `
                .tech-card[data-tech="TypeScript"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(97, 218, 251, 0.6) !important;
                }
                .tech-card[data-tech="TypeScript"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(0, 188, 221, 0.4)) !important;
                }
                .tech-card[data-tech="TypeScript"] .tech-halo {
                    background: radial-gradient(circle, rgba(64, 208, 248, 0.45)  0%, transparent 70%) !important;
                }
                @keyframes borderGlowTypeScript{
                    0% {
                        box-shadow: 0 0 5px rgba(97, 218, 251, 0.3) ,
                                    inset 0 0 5px rgba(97, 218, 251, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(97, 220, 251, 0.5) ,
                                    inset 0 0 8px rgba(97, 218, 251, 0.3) ;
                    }
                }
                .tech-card[data-tech="TypeScript"]:hover::before {
                    animation: borderGlowReact 1.5s infinite alternate !important;
                    border-color: rgba(97, 218, 251, 0.6)  !important;
                }
            `
        },

        //Tailwind
        {
            name: "Tailwind",
            shortName: "TW",
            accentColor: "rgb(21, 177, 164)",
            hoverColor: "rgba(21, 177, 164, 0.6)",
            svgPath: `
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:#44a8b3"></path></g></svg>
            `,
            customStyles: `
                .tech-card[data-tech="Tailwind"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(21, 177, 164, 0.6) !important;
                }
                .tech-card[data-tech="Tailwind"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(21, 177, 164, 0.4)) !important;
                }
                .tech-card[data-tech="Tailwind"] .tech-halo {
                    background: radial-gradient(circle, rgba(21, 177, 164, 0.45)  0%, transparent 70%) !important;
                }
                @keyframes borderGlowTailwind{
                    0% {
                        box-shadow: 0 0 5px rgba(21, 177, 164, 0.3) ,
                                    inset 0 0 5px rgba(21, 177, 164, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(21, 177, 164, 0.5) ,
                                    inset 0 0 8px rgba(21, 177, 164, 0.3) ;
                    }
                }
                .tech-card[data-tech="Tailwind"]:hover::before {
                    animation: borderGlowTailwind 1.5s infinite alternate !important;
                    border-color: rgba(21, 177, 164, 0.6)  !important;
                }
            `
        },

        //Visual Studio Code
        {
            name: "VisualStudio",
            shortName: "VS",
            accentColor: "rgb(4, 87, 136)",
            hoverColor: "rgba(4, 88, 136, 0.6)",
            svgPath: `
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z" fill="url(#paint0_linear_87_8101)"></path> <path d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z" fill="url(#paint1_linear_87_8101)"></path> <path d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z" fill="url(#paint2_linear_87_8101)"></path> <defs> <linearGradient id="paint0_linear_87_8101" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#32B5F1"></stop> <stop offset="1" stop-color="#2B9FED"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8101" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse"> <stop stop-color="#0F6FB3"></stop> <stop offset="0.270551" stop-color="#1279B7"></stop> <stop offset="0.421376" stop-color="#1176B5"></stop> <stop offset="0.618197" stop-color="#0E69AC"></stop> <stop offset="0.855344" stop-color="#0F70AF"></stop> <stop offset="1" stop-color="#0F6DAD"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8101" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse"> <stop stop-color="#1791D2"></stop> <stop offset="1" stop-color="#1173C5"></stop> </linearGradient> </defs> </g></svg>
            `,
            customStyles: `
                .tech-card[data-tech="VisualStudio"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(4, 88, 136, 0.6) !important;
                }
                .tech-card[data-tech="VisualStudio"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(4, 88, 136, 0.4)) !important;
                }
                .tech-card[data-tech="VisualStudio"] .tech-halo {
                    background: radial-gradient(circle, rgba(4, 88, 136, 0.45)  0%, transparent 70%) !important;
                }
                @keyframes borderGlowVisualStudio{
                    0% {
                        box-shadow: 0 0 5px rgba(4, 88, 136, 0.3) ,
                                    inset 0 0 5px rgba(4, 88, 136, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(4, 88, 136, 0.5) ,
                                    inset 0 0 8px rgba(4, 88, 136, 0.3) ;
                    }
                }
                .tech-card[data-tech="VisualStudio"]:hover::before {
                    animation: borderGlowVisualStudio 1.5s infinite alternate !important;
                    border-color: rgba(3, 136, 212, 0.6)  !important;
                }
            `
        },

        //Angular
        {
            name: "Angular",
            shortName: "NG",
            accentColor: "rgb(221, 0, 49)",
            hoverColor: "rgba(221, 0, 49, 0.6)",
            svgPath: `
                <svg viewBox="0 0 256 272" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245134,211.971984 L0.0996108949,45.522179 Z" fill="#E23237"></path>
                        <path d="M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z" fill="#B52E31"></path>
                        <path d="M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,206.692607 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.306615,143.5393 L99.8110771,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z" fill="#FFFFFF"></path>
                    </g>
                </svg>
            `,
            customStyles: `
                .tech-card[data-tech="Angular"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(221, 0, 49, 0.6) !important;
                }
                .tech-card[data-tech="Angular"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(221, 0, 49, 0.4)) !important;
                }
                .tech-card[data-tech="Angular"] .tech-halo {
                    background: radial-gradient(circle, rgba(221, 0, 49, 0.15) 0%, transparent 70%) !important;
                }
                @keyframes borderGlowAngular {
                    0% {
                        box-shadow: 0 0 5px rgba(221, 0, 49, 0.3),
                                    inset 0 0 5px rgba(221, 0, 49, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(221, 0, 49, 0.5),
                                    inset 0 0 8px rgba(221, 0, 49, 0.3);
                    }
                }
                .tech-card[data-tech="Angular"]:hover::before {
                    animation: borderGlowAngular 1.5s infinite alternate !important;
                    border-color: rgba(221, 0, 49, 0.6) !important;
                }
            `
        },

        //NodeJS
        {
            name: "NodeJS",
            shortName: "NJ",
            accentColor: "rgb(3, 109, 3)",
            hoverColor: "rgba(3, 109, 3, 0.6)",
            svgPath: `
            <svg fill="#000000" preserveAspectRatio="xMinYMin meet" viewBox="-13 0 282 282" xmlns="http://www.w3.org/2000/svg">
            <g fill="#4e8811">
            <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"/>
            <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"/>
            </g>
            </svg>
            `,
            customStyles: `
                .tech-card[data-tech="NodeJS"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(3, 109, 3, 0.6) !important;
                }
                .tech-card[data-tech="NodeJS"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(3, 109, 3, 0.4)) !important;
                }
                .tech-card[data-tech="NodeJS"] .tech-halo {
                    background: radial-gradient(circle, rgba(2, 128, 2, 0.75) 0%, transparent 70%) !important;
                }
                @keyframes borderGlowNodeJS {
                    0% {
                        box-shadow: 0 0 5px rgba(3, 109, 3, 0.3),
                                    inset 0 0 5px rgba(3, 109, 3, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(3, 109, 3, 0.5),
                                    inset 0 0 8px rgba(3, 109, 3, 0.3);
                    }
                }
                .tech-card[data-tech="NodeJS"]:hover::before {
                    animation: borderGlowNodeJS 1.5s infinite alternate !important;
                    border-color: rgba(3, 109, 3, 0.6) !important;
                }
            `
        },

        //Git
        {
            name: "Git",
            shortName: "Git",
            accentColor: "rgb(221, 63, 0)",
            hoverColor: "rgba(221, 63, 0, 0.6)",
            svgPath: `
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"></path> <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"></path> </g></svg>     
            `,
            customStyles: `
                .tech-card[data-tech="Git"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(221, 63, 0, 0.6) !important;
                }
                .tech-card[data-tech="Git"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(221, 63, 0, 0.4)) !important;
                }
                .tech-card[data-tech="Git"] .tech-halo {
                    background: radial-gradient(circle, rgba(221, 63, 0, 0.75) 0%, transparent 70%) !important;
                }
                @keyframes borderGlowGit {
                    0% {
                        box-shadow: 0 0 5px rgba(221, 63, 0, 0.3),
                                    inset 0 0 5px rgba(221, 63, 0, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(221, 63, 0, 0.5),
                                    inset 0 0 8px rgba(221, 63, 0, 0.3);
                    }
                }
                .tech-card[data-tech="Git"]:hover::before {
                    animation: borderGlowGit 1.5s infinite alternate !important;
                    border-color: rgba(221, 63, 0, 0.6) !important;
                }
            `
        },

        //Terminal
        {
            name: "Terminal",
            shortName: "Terminal",
            accentColor: "rgb(1, 0, 53)",
            hoverColor: "rgba(1, 0, 53, 0.6)",
            svgPath: `
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="terminal.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1025" effect="bspline"></inkscape:path-effect> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1021" effect="bspline"></inkscape:path-effect> </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#ffffff" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="17.833333" inkscape:cx="15.855957" inkscape:cy="16.664315" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false" inkscape:guide-bbox="true"> <sodipodi:guide position="21.126168,22.794393" orientation="1,0" id="guide1575" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,23.285047" orientation="1,0" id="guide1635" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,7.6455921" orientation="0,1" id="guide1639" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="18.859863,18.859863" orientation="1,0" id="guide1242" inkscape:locked="false"></sodipodi:guide> <inkscape:grid type="xygrid" id="grid1103"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <ellipse cy="301.98773" cx="16.607477" id="circle863" style="opacity:1;fill:#40cd8b;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" r="6"></ellipse> <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 5 3 C 3.892 3 3 3.892 3 5 L 3 25 C 3 26.108 3.892 27 5 27 L 25 27 C 26.108 27 27 26.108 27 25 L 27 5 C 27 3.892 26.108 3 25 3 L 5 3 z M 6.875 8.3964844 L 13.394531 12.421875 L 13.394531 14.056641 L 6.9257812 18.082031 L 6 16.734375 L 11.761719 13.248047 L 6 9.7949219 L 6.875 8.3964844 z M 15.578125 20.052734 L 24 20.052734 L 24 21.603516 L 15.578125 21.603516 L 15.578125 20.052734 z " transform="translate(0,289.0625)" id="rect901"></path> </g> </g></svg>       
            `,
            customStyles: `
                .tech-card[data-tech="Terminal"] .tech-name {
                    color: rgba(243, 243, 243, 0.6) !important;
                    text-shadow: none !important;
                    border: 1px solid rgba(1, 0, 53, 0.6) !important;
                }
                .tech-card[data-tech="Terminal"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(1, 0, 53, 0.4)) !important;
                }
                .tech-card[data-tech="Terminal"] .tech-halo {
                    background: radial-gradient(circle, rgba(0, 34, 53, 0.75) 0%, transparent 70%) !important;
                }
                @keyframes borderGlowTerminal{
                    0% {
                        box-shadow: 0 0 5px rgba(1, 0, 53, 0.3),
                                    inset 0 0 5px rgba(1, 0, 53, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(1, 0, 53, 0.5),
                                    inset 0 0 8px rgba(1, 0, 53, 0.3);
                    }
                }
                .tech-card[data-tech="Terminal"]:hover::before {
                    animation: borderGlowTerminal 1.5s infinite alternate !important;
                    border-color: rgba(1, 0, 53, 0.6) !important;
                }
            `
        },

        //Github
        {
            name: "Github",
            shortName: "Github",
            accentColor: "rgb(117, 117, 126)",
            hoverColor: "rgba(117, 117, 126, 0.6)",
            svgPath: `
            <svg viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Github-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#9198a1"> <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"> </path> </g> </g> </g></svg>       
            `,
            customStyles: `
                .tech-card[data-tech="Github"] .tech-name {
                    text-shadow: none !important;
                    border: 1px solid rgba(117, 117, 126, 0.6) !important;
                }
                .tech-card[data-tech="Github"]:hover .tech-logo {
                    filter: drop-shadow(0 0 5px rgba(117, 117, 126, 0.4)) !important;
                }
                .tech-card[data-tech="Github"] .tech-halo {
                    background: radial-gradient(circle, rgba(117, 117, 126, 0.75) 0%, transparent 70%) !important;
                }
                @keyframes borderGlowGithub{
                    0% {
                        box-shadow: 0 0 5px rgba(117, 117, 126, 0.3),
                                    inset 0 0 5px rgba(117, 117, 126, 0.2);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(117, 117, 126, 0.5),
                                    inset 0 0 8px rgba(117, 117, 126, 0.3);
                    }
                }
                .tech-card[data-tech="Github"]:hover::before {
                    animation: borderGlowGithub 1.5s infinite alternate !important;
                    border-color: rgba(117, 117, 126, 0.6) !important;
                }
            `
        },
    ];

    function createTechCard(tech) {
        const listItem = document.createElement('li');
        listItem.className = 'stack__item';

        const card = document.createElement('div');
        card.className = 'tech-card';
        card.setAttribute('data-tech', tech.name);
        card.style.setProperty('--accent-color', tech.accentColor);

        const nameElement = document.createElement('div');
        nameElement.className = 'tech-name';
        nameElement.textContent = tech.name;
        nameElement.style.setProperty('--accent-color', tech.accentColor);

        const logoElement = document.createElement('div');
        logoElement.className = 'tech-logo';
        logoElement.innerHTML = tech.svgPath;
        logoElement.style.setProperty('--accent-color', tech.accentColor);

        const haloElement = document.createElement('div');
        haloElement.className = 'tech-halo';

        card.appendChild(nameElement);
        card.appendChild(logoElement);
        card.appendChild(haloElement);

        listItem.appendChild(card);

        if (tech.customStyles) {
            const style = document.createElement('style');
            style.textContent = tech.customStyles;
            document.head.appendChild(style);
        }

        return listItem;
    }

    technologies.forEach(tech => {
        const card = createTechCard(tech);
        container.appendChild(card);
    });
});