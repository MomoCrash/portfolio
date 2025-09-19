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
    // Project data array
    const [projects, setProjects] = useState([
        {
            title: "Breachborn",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Blueprint", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "Unreal Engine 5", color: "#fff47f" },
                { label: "Gameplay & Tools", color: "lightskyblue" },
                { label: "Optimisation", color: "indianred" }
            ],
            percent: [50, 25, 25],
            desc: "MIRD est un projet ambitieux de moteur de jeu sindé en deux pôles : une partie rendu 3D fait en utilisant DirectX12. Ainsi qu'une partie moteur avec un systeme ECS et gestion de scripts (similaire à Unity)",
            link: "https://github.com/MomoCrash/MIRD",
            imageType: "image",
            imageClass: "image-breachborn"
        },
        {
            title: "Projet MIRD",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Projet", color: "#fee971" }
            ],
            skills: [
                { label: "DirectX12", color: "#fff47f" },
                { label: "Architecture", color: "lightskyblue" },
                { label: "Optimisation", color: "indianred" }
            ],
            percent: [50, 25, 25],
            desc: "MIRD est un projet ambitieux de moteur de jeu sindé en deux pôles : une partie rendu 3D fait en utilisant DirectX12. Ainsi qu'une partie moteur avec un systeme ECS et gestion de scripts (similaire à Unity)",
            link: "https://github.com/MomoCrash/MIRD",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/QEAM5Ok1Sfg?si=P4eF4k2Xae7HeSQv?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Rebreaker",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "2D Game", color: "#fff47f" },
                { label: "Game Engine", color: "lightskyblue" },
                { label: "Juiciness", color: "indianred" }
            ],
            percent: [30, 30, 40],
            desc: "ReBreaker, est une réplique d'un Casse-Brique dans une version surbooster, avec pour objectif un maximum de feedbacks visuels, d'animation d'explosion et de dynamisme !!",
            link: "https://github.com/MomoCrash/ReBreaker",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/NSxrJB3lpgI?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Adventure's Horizon",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Cours", color: "#f59e26" },
                { label: "Jeu", color: "#fee971" }
            ],
            skills: [
                { label: "Team Work", color: "#fff47f" },
                { label: "Gameplay", color: "lightskyblue" },
                { label: "Game Design", color: "indianred" }
            ],
            percent: [40, 35, 25],
            desc: "Adventure's Horizon, est un jeu Die & Retry ou vous foncez tête baissé dans les ennemies... mourrez... passez chez le marchand... et vous vous vengez plus fort que jamais !!",
            link: "https://momocrash.itch.io/adventure-horizons",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/EY8LksY78I8?si=HeFElT-CKeUNPwNY?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Endless Terrain",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Projet", color: "#fee971" }
            ],
            skills: [
                { label: "Geometry", color: "#fff47f" },
                { label: "Maths", color: "lightskyblue" },
                { label: "Optimisation", color: "indianred" }
            ],
            percent: [35, 35, 30],
            desc: "Ce projet de génération procédurale de terrain infini, permet la génération rapide de mesh de terrain en fonction d'une Height Map. Le tout étant ultra modulable et configurable.",
            link: "https://github.com/MomoCrash/procedural-terrain-unity",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/7ZslUnYMS2E?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Nichii",
            tags: [
                { label: "Unity", color: "#53c2fe" },
                { label: "Jeu", color: "#f59e26" },
                { label: "Personnel", color: "#fee971" }
            ],
            skills: [
                { label: "Mobile Dev.", color: "#fff47f" },
                { label: "Programming", color: "lightskyblue" },
                { label: "Game Design", color: "indianred" }
            ],
            percent: [40, 35, 25],
            desc: "Nichii est un projet de coeur, ce jeu Idle mobile vous permet de construire votre ville. Avec une phase de gameplay prenante où vous explorez librement le monde, puis retourez construire votre ville qui produira encore plus et même quand vous n'êtes plus sur le jeu.",
            link: "https://momocrash.itch.io/nichii",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/X10c4__0K7k?si=sL_xF1zCWQ-9GYj2?&autoplay=1&mute=1&loop=1"
        },
        {
            title: "Beacon",
            tags: [
                { label: "ReactJS", color: "#53c2fe" },
                { label: "Equipe", color: "#f59e26" },
                { label: "Website", color: "#fee971" }
            ],
            skills: [
                { label: "Backend", color: "#fff47f" },
                { label: "Database", color: "lightskyblue" },
                { label: "Riot API", color: "indianred" }
            ],
            percent: [40, 30, 30],
            desc: "Beacon est un projet ambitieux de recherche, d'analyse et de suivis de joueur sur le jeux League Of Legends. La plateforme à pour objectif de faire une analyse d'un joueur et de lui recommander des méthodes de jeu globales et personnalisé.",
            link: "https://momocrash.github.io/Beacon/",
            imageType: "image",
            imageClass: "image-beacon"
        },
        {
            title: "Template Restaurant",
            tags: [
                { label: "ReactJS", color: "#53c2fe" },
                { label: "Personnel", color: "#f59e26" },
                { label: "Website", color: "#fee971" }
            ],
            skills: [
                { label: "Design", color: "#fff47f" },
                { label: "UI/UX", color: "lightskyblue" },
                { label: "Fonctionnalités", color: "indianred" }
            ],
            percent: [40, 30, 30],
            desc: "Le site web L'oie'Z'haut est un modèle dans lequelle j'ai cherché à faire un UI et un design efficace pour un restaurant. En mettant en avant des fonctionnalité simple d'utilisation sur mobile et ordinateur pour une navigation simple.",
            link: "https://momocrash.github.io/website-loiezhaut/",
            imageType: "image",
            imageClass: "image-website"
        },
        {
            title: "Multiplayer",
            tags: [
                { label: "C++", color: "#53c2fe" },
                { label: "Network", color: "#f59e26" },
                { label: "Cours", color: "#fee971" }
            ],
            skills: [
                { label: "API Usage", color: "#fff47f" },
                { label: "Encapsulation", color: "lightskyblue" },
                { label: "Client–Server", color: "indianred" }
            ],
            percent: [40, 20, 40],
            desc: "Plus un projet qu'un réel jeu, il consiste en la syncronisation de plusieurs clients à un serveur distant ou local via un protocol UDP, en utilisant une API bas niveau réseau. Je vous recommande de consulter la page Github",
            link: "https://github.com/MomoCrash/NetworkProject",
            imageType: "iframe",
            imageSrc: "https://www.youtube.com/embed/vmt-WsIYRVI?si=GjEhPNZ6n4rLRwzD?&autoplay=1&mute=1&loop=1"
        }
    ]);

    // Sorting function
    const sortProjects = () => {
        const sorted = [...projects].sort((a, b) => {
            return a.tags[0].label.localeCompare(b.tags[0].label, undefined, { sensitivity: 'base' });
        });
        setProjects(sorted);
    };

    // Tag filter state
    const [activeTag, setActiveTag] = useState(null);

    // Hidden tag buttons state (only hides the button in the tag bar)
    // will be initialized to any tags that are not in preferredOrder
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Collect unique normalized tags (preserve order of first appearance)
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

    // Preferred display order provided by user (case-insensitive match)
    const preferredOrder = ['Jeu', 'Projet', 'Personnel', 'Cours', 'C++', 'Blueprint', 'Unity', 'Website'];

    // Build canonical preferred list from tags that actually exist in allTags
    const preferredCanonical = preferredOrder.map(pref => allTags.find(t => t.toLowerCase() === pref.toLowerCase())).filter(Boolean);

    // Any tags not in the preferredCanonical are considered "other"
    const otherTags = allTags.filter(t => !preferredCanonical.includes(t));

    // Final ordered tags: preferred ones first, then any remaining (they will be hidden by default)
    const orderedTags = [...preferredCanonical, ...otherTags];

    // Initialize hiddenTagButtons to hide all 'other' tags (run when projects change)
    useEffect(() => {
        if (otherTags.length > 0) {
            setHiddenTagButtons(otherTags);
            // reset activeTag if it becomes hidden
            setActiveTag(prev => (otherTags.includes(prev) ? 'All' : prev));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects]);

    // keep window.getHiddenTagButtons up-to-date
    useEffect(() => {
        window.getHiddenTagButtons = () => (hiddenTagButtons || []);
        return () => { delete window.getHiddenTagButtons };
    }, [hiddenTagButtons]);

    // Filtered projects based on activeTag
    const filteredProjects = activeTag && activeTag !== 'All'
        ? projects.filter(p => p.tags.some(t => t.label === activeTag))
        : projects;

    // Displayed projects with animation control
    const [displayedProjects, setDisplayedProjects] = useState(projects);
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(false);
    // Only play the entry 'animate-in' on initial mount to avoid re-running it after filter transitions
    const [initialMount, setInitialMount] = useState(true);

    // Keep displayedProjects in sync with base projects initially
    useEffect(() => {
        setDisplayedProjects(projects);
    }, [projects]);

    // clear initialMount after first render/animation window
    useEffect(() => {
        const t = setTimeout(() => setInitialMount(false), 420);
        return () => clearTimeout(t);
    }, []);

    // Handle filter transitions: exit to right, then replace and enter from left
    useEffect(() => {
        const next = filteredProjects;
        // If same set (by title), do nothing
        const currentIds = displayedProjects.map(p => p.title).join('|');
        const nextIds = next.map(p => p.title).join('|');
        if (currentIds === nextIds) return;

        // start exit animation
        setIsExiting(true);

        const exitTimer = setTimeout(() => {
            // replace list
            setDisplayedProjects(next);
            setIsExiting(false);
            // start enter animation
            setIsEntering(true);
            const enterTimer = setTimeout(() => setIsEntering(false), 320);
            return () => clearTimeout(enterTimer);
        }, 320);

        return () => clearTimeout(exitTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                Adventure's Horizon est un jeu Die & Retry, vous avez pour mission de progresser dans une montagne pleine de danger
                vous avez pour objectif de tuer les monstres de la montagne, mourrir pour acheter plus d'équipements et allez plus loin dans la montagne.
            </div>
        </>,

        <>
            <div className={"project-desc-big"}>
                Nichii est un projet de jeu mobile, développé en parallèle des cours sur Unity, le jeu est un idle
                farmer vous avez pour mission d'avoir le plus de ressouces naturelles ou transformé
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
                <div id={"project"} className={"container"}>

                    <div className={"game-preview-card"}>

                        <h2 className={"font-face-florida title-name"}> mes jeux </h2>
                        {projectDescription[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0]}
                        <Unity className={"game-preview"}
                               unityProvider={unityProviders[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0].unityProvider}>
                        </Unity>

                        <div className={"inline-container"}>
                            <button className="previous" onClick={PreviousGame}> Précédent</button>
                            <p className="font-face-florida"> just play it now </p>
                            <button className="next" onClick={NextGame}> Suivant</button>
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
                            <div className={"font-face-florida profile-name"}> Gilotin Ethan</div>
                            <div className={"profile-description"}> Étudiant en Programmation</div>
                            <div className={"container in-row-forced"}>

                                <a href="https://github.com/MomoCrash" target={"_blank"}>
                                    <div className={"profile-social profile-github"} ></div>
                                </a>

                                <a href="https://www.linkedin.com/in/ethan-gilotin-788015293/" target={"_blank"}>
                                    <div className={"profile-social profile-linkdin"} ></div>
                                </a>

                                <a href="https://momocrash.itch.io/" target={"_blank"}>
                                    <div className={"profile-social profile-itch"} ></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#projets">
                        <div className={"scrolldown"}>
                            <div className={"chevrons"}>
                                <div className={"chevrondown"}></div>
                                <div className={"chevrondown"}></div>
                            </div>
                        </div>
                    </a>

                    {
                }

                </div>

                <div className={"container in-column"}>

                    <div id={"contact"} className={"card mobile-xs"}>

                        <div className={"container in-row justify-start"}>
                            <p className={"project-desc"} style={{maxWidth: "100%", fontSize: "1.5rem"}}>
                                Mes projets vous intéresses ? Vous voulez discuter ?
                                Ou me faire une offre d'emploi : envoyez moi un mail !
                                <br/> <a href={"mailto:ethan.gilotin@gmail.com"}> ethan.gilotin@gmail.com </a>
                            </p>
                        </div>
                    </div>

                </div>

                {
                    LoadUnityPlayer()
                }

                {/* Tag filter buttons */}
                <div className="tag-buttons-container">
                    <button
                        className={"sort-btn" + (activeTag === null || activeTag === 'All' ? " active-tag" : "")}
                        onClick={() => setActiveTag('All')}
                    >
                        All
                    </button>
                    {orderedTags.filter(t => !(hiddenTagButtons || []).includes(t)).map(tag => (
                        <button
                            key={tag}
                            className={"sort-btn" + (activeTag === tag ? " active-tag" : "")}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div id={"projects"} className={"container in-column"}>
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
                                    <h2 className={"font-face-florida title-name"}>{project.title}</h2>
                                    {project.tags.map((tag, i) => (
                                        <h2 className={"projet-tag"} style={{ backgroundColor: tag.color }} key={i}>{tag.label}</h2>
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
                                            <span className={"project-skills-descriptor"} style={{ borderColor: skill.color }} key={i}>{skill.label}</span>
                                        ))}
                                        {PercentBar("work distribution", ...project.percent)}
                                    </div>
                                    <p className={"profile-separator"}></p>
                                    <p className={"project-desc"}>{project.desc}</p>
                                </div>
                                <a target={"_blank"} href={project.link}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="font-face-florida button-text"> En savoir plus </span>
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