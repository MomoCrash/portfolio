import "../styles/home.css"
import { Unity, useUnityContext  } from "react-unity-webgl"
import React, {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";

// LazyIframe: only sets iframe src when it becomes visible
function LazyIframe({ src, title, className }) {
    const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
    const [loadedSrc, setLoadedSrc] = useState(null);

    useEffect(() => {
        if (inView && !loadedSrc) setLoadedSrc(src);
    }, [inView, src, loadedSrc]);

    return (
        <div ref={ref}>
            {loadedSrc ? (
                <iframe
                    className={className}
                    src={loadedSrc}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className={className} />
            )}
        </div>
    );
}

export default function Home() {
    const initialLang = (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'en';
    const [lang, setLang] = useState(initialLang);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('lang', lang);
            } catch (e) {
            }

            try {
                window.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
            } catch (e) {
            }
        }
    }, [lang]);

    // Tag translations (display only)
    const tagTranslations = {
        'Jeu': 'Game', 'Projet': 'Project', 'Personnel': 'Personal', 'Cours': 'Course', 'C++': 'C++',
        'Blueprint': 'Blueprint', 'Unity': 'Unity', 'Website': 'Website', 'Equipe': 'Team', 'Stage': 'Internship', 'Network': 'Network'
    };

    const displayTag = (label) => (lang === 'en' ? (tagTranslations[label] || label) : label);

    // Project data array
    const [projects, setProjects] = useState([
        {
            title: "Breachborn",
            title_en: "Breachborn",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Blueprint", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "Unreal Engine 5", label_en: "Unreal Engine 5", color: "#fff47f" },
                { label: "Gameplay & Tools", label_en: "Gameplay & Tools", color: "lightskyblue" },
                { label: "Optimisation", label_en: "Optimization", color: "indianred" }
            ],
            percent: [50, 25, 25],
            desc: "Breachborn est un jeu 3D dans le style rogue-like. Dans un monde fantastique en pleine destruction. Faites de votre village le rempart de l'humanité, relevez vous de chacune de vos morts plus fort, aiguisez au maximum le choix de vos équipements. Parcourez une infinité d'îles procédurales.",
            desc_en: "Breachborn is a 3D rogue-like game set in a fantasy world in ruins. Defend your village, come back stronger after each death, customize your gear, and explore an endless chain of procedurally generated islands.",
            link: "",
            imageType: "image",
            imageClass: "image-breachborn"
        },
        {
            title: "Paper Strike",
            title_en: "Paper Strike",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Stage", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "Photon Fusion 2", label_en: "Photon Fusion 2", color: "#fff47f" },
                { label: "Coordination", label_en: "Coordination", color: "lightskyblue" },
                { label: "Optimisation", label_en: "Optimization", color: "indianred" }
            ],
            percent: [50, 25, 25],
            desc: "Paper Strike est un jeu mobile de battle royal à 5 joueurs en parties rapides de 3 minutes. J'ai travaillé en stage sur l'Alpha. J'ai développé intégralement le système de multijoueur avec Fusion 2 et j'ai tester et corriger en profondeur pour faire la release sur le marché.",
            desc_en: "Paper Strike is a 5-player mobile battle royale with short 3-minute matches. I worked on the Alpha during my internship, implemented the multiplayer system with Photon Fusion 2, and performed extensive testing and fixes for release.",
            link: "https://play.google.com/store/apps/details?id=com.PaperStrike",
            imageType: "image",
            imageClass: "image-paperstrike"
        },
        {
            title: "Projet MIRD",
            title_en: "MIRD Project",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Projet", color: "#fee971" }
            ],
            skills: [
                { label: "DirectX12", label_en: "DirectX12", color: "#fff47f" },
                { label: "Architecture", label_en: "Architecture", color: "lightskyblue" },
                { label: "Optimisation", label_en: "Optimization", color: "indianred" }
            ],
            percent: [50, 25, 25],
            desc: "MIRD est un projet ambitieux de moteur de jeu sindé en deux pôles : une partie rendu 3D fait en utilisant DirectX12. Ainsi qu'une partie moteur avec un systeme ECS et gestion de scripts (similaire à Unity)",
            desc_en: "MIRD is an ambitious game engine project split into two parts: a DirectX12-based 3D renderer and an engine core featuring an ECS and scripting support (similar to Unity).",
            link: "https://github.com/MomoCrash/MIRD",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/QEAM5Ok1Sfg?si=P4eF4k2Xae7HeSQv?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Rebreaker",
            title_en: "Rebreaker",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "2D Game", label_en: "2D Game", color: "#fff47f" },
                { label: "Game Engine", label_en: "Game Engine", color: "lightskyblue" },
                { label: "Juiciness", label_en: "Juiciness", color: "indianred" }
            ],
            percent: [30, 30, 40],
            desc: "ReBreaker, est une réplique d'un Casse-Brique dans une version surbooster, avec pour objectif un maximum de feedbacks visuels, d'animation d'explosion et de dynamisme !!",
            desc_en: "ReBreaker is an enhanced Breakout clone focused on strong visual feedback, explosion animations and dynamic gameplay!",
            link: "https://github.com/MomoCrash/ReBreaker",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/NSxrJB3lpgI?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Adventure's Horizon",
            title_en: "Adventure's Horizon",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "Team Work", label_en: "Team Work", color: "#fff47f" },
                { label: "Gameplay", label_en: "Gameplay", color: "lightskyblue" },
                { label: "Game Design", label_en: "Game Design", color: "indianred" }
            ],
            percent: [40, 35, 25],
            desc: "Adventure's Horizon, est un jeu Die & Retry ou vous foncez tête baissé dans les ennemies... mourrez... passez chez le marchand... et vous vous vengez plus fort que jamais !!",
            desc_en: "Adventure's Horizon is a die & retry game where you rush through enemies, die, visit the shop, and return stronger than before!",
            link: "https://momocrash.itch.io/adventure-horizons",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/EY8LksY78I8?si=HeFElT-CKeUNPwNY?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Endless Terrain",
            title_en: "Endless Terrain",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Projet", color: "#fee971" }
            ],
            skills: [
                { label: "Geometry", label_en: "Geometry", color: "#fff47f" },
                { label: "Maths", label_en: "Maths", color: "lightskyblue" },
                { label: "Optimisation", label_en: "Optimization", color: "indianred" }
            ],
            percent: [35, 35, 30],
            desc: "Ce projet de génération procédurale de terrain infini, permet la génération rapide de mesh de terrain en fonction d'une Height Map. Le tout étant ultra modulable et configurable.",
            desc_en: "This infinite procedural terrain project generates terrain meshes from a heightmap quickly. It is modular and highly configurable.",
            link: "https://github.com/MomoCrash/procedural-terrain-unity",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/7ZslUnYMS2E?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Nichii",
            title_en: "Nichii",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Jeu", color: "#f59e26" },
                { label: "Personnel", color: "#fee971" }
            ],
            skills: [
                { label: "Mobile Dev.", label_en: "Mobile Dev.", color: "#fff47f" },
                { label: "Programming", label_en: "Programming", color: "lightskyblue" },
                { label: "Game Design", label_en: "Game Design", color: "indianred" }
            ],
            percent: [40, 35, 25],
            desc: "Nichii est un projet de coeur, ce jeu Idle mobile vous permet de construire votre ville. Avec une phase de gameplay prenante où vous explorez librement le monde, puis retourez construire votre ville qui produira encore plus et même quand vous n'êtes plus sur le jeu.",
            desc_en: "Nichii is a heartfelt idle mobile game where you build your city. Explore the world during gameplay, then return to expand production even when you're offline.",
            link: "https://momocrash.itch.io/nichii",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/X10c4__0K7k?si=sL_xF1zCWQ-9GYj2?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Beacon",
            title_en: "Beacon",
            tags: [
                { label: "ReactJS", color: "#53c2fe" },
                { label: "Equipe", color: "#f59e26" },
                { label: "Website", color: "#fee971" }
            ],
            skills: [
                { label: "Backend", label_en: "Backend", color: "#fff47f" },
                { label: "Database", label_en: "Database", color: "lightskyblue" },
                { label: "Riot API", label_en: "Riot API", color: "indianred" }
            ],
            percent: [40, 30, 30],
            desc: "Beacon est un projet ambitieux de recherche, d'analyse et de suivis de joueur sur le jeux League Of Legends. La plateforme à pour objectif de faire une analyse d'un joueur et de lui recommander des méthodes de jeu globales et personnalisé.",
            desc_en: "Beacon is a research and player-tracking project for League of Legends. It analyzes a player and recommends global and personalized gameplay improvements.",
            link: "https://momocrash.github.io/Beacon/",
            imageType: "image",
            imageClass: "image-beacon"
        },
        {
            title: "Template Restaurant",
            title_en: "Restaurant Template",
            tags: [
                { label: "ReactJS", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Website", color: "#fee971" }
            ],
            skills: [
                { label: "Design", label_en: "Design", color: "#fff47f" },
                { label: "UI/UX", label_en: "UI/UX", color: "lightskyblue" },
                { label: "Fonctionnalités", label_en: "Features", color: "indianred" }
            ],
            percent: [40, 30, 30],
            desc: "Le site web L'oie'Z'haut est un modèle dans lequelle j'ai cherché à faire un UI et un design efficace pour un restaurant. En mettant en avant des fonctionnalité simple d'utilisation sur mobile et ordinateur pour une navigation simple.",
            desc_en: "L'oie'Z'haut website is a template focused on effective UI and design for restaurants, prioritizing simple features for both mobile and desktop.",
            link: "https://momocrash.github.io/website-loiezhaut/",
            imageType: "image",
            imageClass: "image-website"
        },
        {
            title: "Multiplayer",
            title_en: "Multiplayer",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Network", color: "#f59e26" },
                { label: "Cours", color: "#fee971" }
            ],
            skills: [
                { label: "API Usage", label_en: "API Usage", color: "#fff47f" },
                { label: "Encapsulation", label_en: "Encapsulation", color: "lightskyblue" },
                { label: "Client–Server", label_en: "Client–Server", color: "indianred" }
            ],
            percent: [40, 20, 40],
            desc: "Plus un projet qu'un réel jeu, il consiste en la syncronisation de plusieurs clients à un serveur distant ou local via un protocol UDP, en utilisant une API bas niveau réseau. Je vous recommande de consulter la page Github",
            desc_en: "More of a project than a full game: synchronizing multiple clients with a local or remote server using a low-level UDP networking API. See the GitHub repo for details.",
            link: "https://github.com/MomoCrash/NetworkProject",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/vmt-WsIYRVI?si=GjEhPNZ6n4rLRwzD?&autoplay=1&mute=1&loop=1"
        }
    ]);

    const [activeTag, setActiveTag] = useState(null);

    const [hiddenTagButtons, setHiddenTagButtons] = useState([]);

    // expose functions to hide/show tag buttons only (does not remove labels on cards)
    useEffect(() => {
        window.hideTagButton = (tag) => {
            if (!tag) return;
            setHiddenTagButtons(prev => {
                const next = Array.from(new Set([...(prev || []), tag]));
                return next;
            });
            setActiveTag(prev => (prev === tag ? 'All' : prev));
        };

        window.showTagButton = (tag) => {
            if (!tag) return;
            setHiddenTagButtons(prev => (prev || []).filter(t => t !== tag));
        };

        window.setHiddenTagButtons = (arr) => {
            if (!Array.isArray(arr)) return;
            setHiddenTagButtons(arr);
            setActiveTag(prev => (arr.includes(prev) ? 'All' : prev));
        };

        window.getHiddenTagButtons = () => (hiddenTagButtons || []);

        return () => {
            delete window.hideTagButton;
            delete window.showTagButton;
            delete window.setHiddenTagButtons;
            delete window.getHiddenTagButtons;
        };
    }, []);

    const allTags = (() => {
        const seen = new Set();
        const list = [];
        projects.forEach(p => {
            p.tags.forEach(t => {
                const n = t.label;
                if (!seen.has(n)) {
                    seen.add(n);
                    list.push(n);
                }
            });
        });
        return list;
    })();

    const preferredOrder = ['Jeu', 'Projet', 'Personnel', 'Cours', 'C++', 'Blueprint', 'Unity', 'Website'];

    const preferredCanonical = preferredOrder.map(pref => allTags.find(t => t.toLowerCase() === pref.toLowerCase())).filter(Boolean);

    const otherTags = allTags.filter(t => !preferredCanonical.includes(t));

    const orderedTags = [...preferredCanonical, ...otherTags];

    useEffect(() => {
        if (otherTags.length > 0) {
            setHiddenTagButtons(otherTags);
            setActiveTag(prev => (otherTags.includes(prev) ? 'All' : prev));
        }
    }, [projects]);

    useEffect(() => {
        window.getHiddenTagButtons = () => (hiddenTagButtons || []);
        return () => { delete window.getHiddenTagButtons };
    }, [hiddenTagButtons]);

    const filteredProjects = activeTag && activeTag !== 'All'
        ? projects.filter(p => p.tags.some(t => t.label === activeTag))
        : projects;

    const [displayedProjects, setDisplayedProjects] = useState(projects);
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(false);
    const [initialMount, setInitialMount] = useState(true);

    useEffect(() => {
        setDisplayedProjects(projects);
    }, [projects]);

    useEffect(() => {
        const t = setTimeout(() => setInitialMount(false), 420);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const next = filteredProjects;
        const currentIds = displayedProjects.map(p => p.title).join('|');
        const nextIds = next.map(p => p.title).join('|');
        if (currentIds === nextIds) return;

        setIsExiting(true);

        const exitTimer = setTimeout(() => {
            setDisplayedProjects(next);
            setIsExiting(false);
            setIsEntering(true);
            const enterTimer = setTimeout(() => setIsEntering(false), 320);
            return () => clearTimeout(enterTimer);
        }, 320);

        return () => clearTimeout(exitTimer);
    }, [activeTag, projects]);

    const useCheckMobileScreen = () => {
        const [width, setWidth] = useState(window.innerWidth);
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        }

        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

        return (width <= 768);
    }

    const projectDescription = [
        <>
            <div className={"project-desc-big"}>
                {lang === 'en' ? 
                    "Adventure's Horizon is a die & retry game where your mission is to progress through a dangerous mountain: defeat monsters, die, buy better gear and go further each run." :
                    "Adventure's Horizon est un jeu Die & Retry, vous avez pour mission de progresser dans une montagne pleine de danger : tuez les monstres, mourrez, achetez de l'équipement et allez plus loin à chaque run."
                }
            </div>
        </>,

        <>
            <div className={"project-desc-big"}>
                {lang === 'en' ?
                    "Nichii is a mobile game project developed alongside Unity courses. It's an idle farmer where you aim to gather and process resources to grow your town." :
                    "Nichii est un projet de jeu mobile, développé en parallèle des cours sur Unity. C'est un idle où vous devez collecter et transformer des ressources pour développer votre ville."
                }
            </div>
        </>
    ]

    function LoadUnityPlayer() {

        if (!useCheckMobileScreen()) {

            const unityProviders = [
                useUnityContext({
                    loaderUrl: "horizon/horizon.loader.js",
                    dataUrl: "horizon/horizon.data.br",
                    frameworkUrl: "horizon/horizon.js.br",
                    codeUrl: "horizon/horizon.wasm.br"
                })]

            if (localStorage.getItem("currentGame") >= unityProviders.length) {
                localStorage.setItem("currentGame", "0")
            }


            function PreviousGame() {
                let currentGame = parseInt(localStorage.getItem("currentGame")) || 1;
                currentGame = (currentGame - 1) % unityProviders.length
                localStorage.setItem("currentGame", currentGame.toString())
                window.location.reload()
            }

            function NextGame() {
                let currentGame = parseInt(localStorage.getItem("currentGame")) || 0;
                currentGame = (currentGame + 1) % unityProviders.length
                localStorage.setItem("currentGame", currentGame.toString())
                window.location.reload()
            }

            function Fullscreen() {
                unityProviders[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0].requestFullscreen(true);
            }

            return (<>
                <div id={"game"} className={"container"}>

                    <div className={"game-preview-card"}>

                        <h2 className={"font-face-florida title-name"}> {lang === "en" ? "my games" : "mes jeux"} </h2>
                        {projectDescription[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0]}
                        <Unity className={"game-preview"}
                               unityProvider={unityProviders[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0].unityProvider}>
                        </Unity>

                        <div className={"inline-container"}>
                            <button className="previous" onClick={PreviousGame}> {lang === "en" ? "Previous" : "Précédent"}</button>
                            <p className="font-face-florida"> {lang === "en" ? "just play it now" : "jouer maintenant"} </p>
                            <button className="next" onClick={NextGame}> {lang === "en" ? "Next" : "Suivant"} </button>
                            <button className="fullscreen" onClick={Fullscreen}></button>
                        </div>

                    </div>

                </div>
            </>)

        }

        return (<></>)

    }


    // function SkillPoint(string, number) {
    //     return (<>
    //         <p className={"project-objectives"}> {string} </p>
    //         <ul className={"container in-row"}>
    //             {[...Array(number)].map((x, i) =>
    //                 <li key={i} className={"project-bullet"}></li>
    //             )}
    //                 {[...Array(5-number)].map((x, i) =>
    //                     <li key={i} className={"project-bullet"}>
    //                         <span className={"project-bullet plain"}></span>
    //                     </li>
    //                 )}
    //             </ul>
    //         </>);
    // }

    function PercentBar(name, first, second, third) {
        return (<>
            <p className={"project-objectives"}> {name} </p>
            <span className={"percent-bar"}>
                <span className={"percent-bar-progress"} style={{
                    backgroundColor: "#fff47f",
                    width: first + "%",
                    borderRadius: "10px 0px 0px 10px"}}> </span>
                <span className={"percent-bar-progress"}
                      style={{
                          backgroundColor: "lightskyblue",
                          width: second + "%" }}> </span>
                <span className={"percent-bar-progress"}
                      style={{
                          backgroundColor: "indianred",
                          width: third + "%",
                          borderRadius: "0px 10px 10px 0px"}}>
                </span>
            </span>
        </>);
    }

    const {ref, inView, entry} = useInView({
        threshold: 0.9,
    });

    return (

        <>

            <div>

                <div className={"container full-h"}>
                    <div className={"big-card in-row"}>
                        <div className={"logo-profile"}></div>
                        <div className={"profile-separator"}></div>
                        <div className={"profile-text-container"}>
                            <div
                                className={"font-face-florida profile-name"}>{lang === 'en' ? 'Ethan Gilotin' : 'Gilotin Ethan'}</div>
                            <div
                                className={"profile-description"}>{lang === 'en' ? 'Programming student' : 'Étudiant en Programmation'}</div>

                            <div className={"container in-row-forced"}>

                                <a href="https://github.com/MomoCrash" target={"_blank"}>
                                    <div className={"profile-social profile-github"}></div>
                                </a>

                                <a href="https://www.linkedin.com/in/ethan-gilotin-788015293/" target={"_blank"}>
                                    <div className={"profile-social profile-linkdin"}></div>
                                </a>

                                <a href="https://momocrash.itch.io/" target={"_blank"}>
                                    <div className={"profile-social profile-itch"}></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#projects">
                        <div className={"scrolldown"}>
                            <div className={"chevrons"}>
                                <div className={"chevrondown"}></div>
                                <div className={"chevrondown"}></div>
                            </div>
                        </div>
                    </a>

                    <div className="lang-container">
                        <button className="sort-btn"
                                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}>{lang === 'en'
                            ? <span className="image-fr"> </span>
                            : <span className="image-en"> </span>
                        }
                        </button>
                    </div>

                </div>

                <div className={"container in-column"}>

                    <div id={"contact"} className={"card mobile-xs"}>

                        <div className={"container in-row justify-start"}>
                            <p className={"project-desc"} style={{maxWidth: "100%", fontSize: "1.5rem"}}>
                                {lang === 'en' ? (
                                    <>Interested in my projects or want to get in touch? Send me an email: <br/> <a href={"mailto:ethan.gilotin@gmail.com"}> ethan.gilotin@gmail.com </a></>
                                        ) : (
                                            <>Mes projets vous intéressent ? Vous voulez discuter ? Ou me faire une offre d'emploi : envoyez-moi un mail ! <br/> <a href={"mailto:ethan.gilotin@gmail.com"}> ethan.gilotin@gmail.com </a></>
                                        )}
                                    </p>
                                </div>
                            </div>

                </div>

                {
                    LoadUnityPlayer()
                }

                <div id={"projects"} className="tag-buttons-container">
                    <button
                        className={"sort-btn" + (activeTag === null || activeTag === 'All' ? " active-tag" : "")}
                        onClick={() => setActiveTag('All')}
                    >
                        {lang === 'en' ? 'All' : 'Tous'}
                    </button>
                    {orderedTags.filter(t => !(hiddenTagButtons || []).includes(t)).map(tag => (
                        <button
                            key={tag}
                            className={"sort-btn" + (activeTag === tag ? " active-tag" : "")}
                            onClick={() => setActiveTag(tag)}
                        >
                            {displayTag(tag)}
                        </button>
                    ))}
                </div>

                <div className={"container in-column"}>
                    {displayedProjects.map((project, idx) => {
                        let cardClass = 'card';
                        if (isExiting) cardClass += ' exit-right';
                        else if (isEntering) cardClass += ' enter-left';
                        else if (initialMount) cardClass += ' animate-in';

                        return (
                            <div
                                className={cardClass}
                                key={project.title + idx}
                                style={{ animationDelay: `${idx * 60}ms` }}
                            >
                                <div className={"container in-row-forced justify-start"}>
                                    <h2 className={"font-face-florida title-name"}>{lang === 'en' ? (project.title_en || project.title) : project.title}</h2>
                                    {project.tags.map((tag, i) => (
                                        <h2 className={"projet-tag"} style={{ backgroundColor: tag.color }} key={i}>{displayTag(tag.label)}</h2>
                                    ))}
                                </div>
                                <div className={"container in-row justify-start"}>
                                    {project.imageType === "image" ? (
                                        <a className={`project-image ${project.imageClass}`}></a>
                                    ) : (
                                        <LazyIframe className={"project-image"} src={project.imageSrc} title={project.title} />
                                    )}
                                    <p className={"profile-separator"}></p>
                                    <div className={"project-skills in-row"}>
                                        {project.skills.map((skill, i) => (
                                            <span className={"project-skills-descriptor"} style={{ borderColor: skill.color }} key={i}>{lang === 'en' ? (skill.label_en || skill.label) : skill.label}</span>
                                        ))}
                                        {PercentBar(lang === 'en' ? 'Work distribution' : 'Répartition du travail', ...project.percent)}
                                    </div>
                                    <p className={"profile-separator"}></p>
                                    <p className={"project-desc"}>{lang === 'en' ? (project.desc_en || project.desc) : project.desc}</p>
                                </div>
                                <a target={"_blank"} href={project.link}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="font-face-florida button-text"> {lang === 'en' ? 'Learn more' : 'En savoir plus'} </span>
                                    </button>
                                </a>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>

    )

}