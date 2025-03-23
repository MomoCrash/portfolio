import "../styles/home.css"
import { Unity, useUnityContext  } from "react-unity-webgl"
import React, {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {

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


    function SkillPoint(string, number) {
        return (<>
            <p className={"project-objectives"}> {string} </p>
            <ul className={"container in-row"}>
                {[...Array(number)].map((x, i) =>
                    <li key={i} className={"project-bullet"}></li>
                )}
                    {[...Array(5-number)].map((x, i) =>
                        <li key={i} className={"project-bullet"}>
                            <span className={"project-bullet plain"}></span>
                        </li>
                    )}
                </ul>
            </>);
    }

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
                
                <div id={"projects"} className={"container in-column"}>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Projet MIRD </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> C++ </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Cours </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Projet </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe ref={ref} className={"project-image"}
                                    src="https://www.youtube.com/embed/QEAM5Ok1Sfg?si=P4eF4k2Xae7HeSQv?&autoplay=1&mute=1&loop=1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "#fff47f"}}>     DirectX12 </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Architecture </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Optimisation </span>
                                {PercentBar("work distribution", 50, 25, 25)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                MIRD est un projet ambitieux de moteur de jeu sindé en deux pôles :
                                une partie rendu 3D fait en utilisant DirectX12. Ainsi qu'une partie
                                moteur avec un systeme ECS et gestion de scripts (similaire à Unity)
                            </p>

                        </div>
                        <a target={"_blank"} href={"https://github.com/MomoCrash/MIRD"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>
                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Rebreaker</h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> C++ </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Cours </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Jeu </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe ref={ref} className={"project-image"}
                                    src="https://www.youtube.com/embed/NSxrJB3lpgI?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>
                                <div className={"project-mobile-col"}>
                                    <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>         2D Game </span>
                                    <span className={"project-skills-descriptor"} style={{borderColor: "lightskyblue"}}>    Game Engine </span>
                                    <span className={"project-skills-descriptor"}
                                          style={{borderColor: "indianred"}}>       Juiciness </span>
                                </div>
                                {PercentBar("work distribution", 30, 30, 40)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                ReBreaker, est une réplique d'un Casse-Brique dans une version surbooster,
                                avec pour objectif un maximum de feedbacks visuels, d'animation d'explosion et de
                                dynamisme !!
                            </p>

                        </div>

                        <a target={"_blank"} href={"https://github.com/MomoCrash/ReBreaker"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Adventure's Horizon </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Cours </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Jeu </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <span ref={ref}>
                                <iframe className={"project-image"}
                                        src="https://www.youtube.com/embed/EY8LksY78I8?si=HeFElT-CKeUNPwNY?&autoplay=1&mute=1&loop=1"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </span>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>

                                <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>     Team Work </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Gameplay </span>
                                <span className={"project-skills-descriptor"} style={{borderColor: "indianred"}}>   Game Design </span>
                                {PercentBar("work distribution", 40, 35, 25)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Adventure's Horizon, est un jeu Die & Retry ou vous <br/>
                                -foncez tête baissé dans les ennemies...
                                -mourrez... -passez chez le marchand... -et vous vous vengez plus fort que jamais !!
                            </p>

                        </div>
                        <a target={"_blank"} href={"https://momocrash.itch.io/adventure-horizons"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Endless Terrain </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Project </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Personal </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe ref={ref} className={"project-image"}
                                    src="https://www.youtube.com/embed/7ZslUnYMS2E?si=dv7hXxQDChQ8zmGi?&autoplay=1&mute=1&loop=1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "#fff47f"}}>     Geometry </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Maths </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Optimisation </span>
                                {PercentBar("work distribution", 35, 35, 30)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Ce projet de génération procédurale de terrain infini, permet la génération
                                rapide de mesh de terrain en fonction d'une Height Map.
                                Le tout étant ultra modulable et configurable.

                            </p>

                        </div>
                        
                        <a target={"_blank"} href={"https://github.com/MomoCrash/procedural-terrain-unity"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>
                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Nichii </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Game </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}>Personal </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe className={"project-image"}
                                    src="https://www.youtube.com/embed/X10c4__0K7k?si=sL_xF1zCWQ-9GYj2?&autoplay=1&mute=1&loop=1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>

                                <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>     Mobile Dev. </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Programming </span>
                                <span className={"project-skills-descriptor"} style={{borderColor: "indianred"}}>   Game Design </span>
                                {PercentBar("work distribution", 40, 35, 25)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Nichii est un projet de coeur, ce jeu Idle mobile vous permet de construire votre ville.
                                Avec une phase de gameplay prenante où vous explorez librement le monde, puis retourez
                                construire votre ville qui produira encore plus et même quand vous n'êtes plus sur le
                                jeu.
                            </p>

                        </div>
                        
                        <a target={"_blank"} href={"https://momocrash.itch.io/nichii"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Beacon </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> ReactJS </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> In team </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Website </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <a href={"https://momocrash.github.io/Beacon/"} target={"_blank"}
                               className={"project-image image-beacon"}>
                            </a>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>

                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "#fff47f"}}>     Backend   </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}> Database </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Riot API </span>
                                {PercentBar("répartition travail", 40, 30, 30)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Beacon est un projet ambitieux de recherche, d'analyse et de suivis de joueur sur le
                                jeux League Of Legends. La plateforme à pour objectif de faire une analyse d'un joueur
                                et de lui recommander des méthodes de jeu globales et personnalisé.
                            </p>

                        </div>
                        
                        <a target={"_blank"} href={"https://momocrash.github.io/Beacon/"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>
                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Template Restaurant </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> ReactJS </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Personal </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Website </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <a href={"https://momocrash.github.io/website-loiezhaut/"}
                               target={"_blank"}
                               className={"project-image image-website"}>
                            </a>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>

                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "#fff47f"}}>     Design </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}> UI/UX </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Fonctionnalités </span>
                                {PercentBar("répartition travail", 40, 30, 30)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Le site web L'oie'Z'haut est un modèle dans lequelle j'ai
                                cherché à faire un UI et un design efficace pour un restaurant.
                                En mettant en avant des fonctionnalité simple d'utilisation sur mobile et ordinateur
                                pour une navigation simple.
                            </p>

                        </div>

                        <a target={"_blank"} href={"https://momocrash.github.io/website-loiezhaut/"}>
                            <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                                <span className="font-face-florida button-text"> En savoir plus </span>
                            </button>
                        </a>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Multiplayer </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> C++ </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Network </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> School </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe ref={ref} className={"project-image"}
                                    src="https://www.youtube.com/embed/vmt-WsIYRVI?si=GjEhPNZ6n4rLRwzD?&autoplay=1&mute=1&loop=1"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>
                                <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>     API Usage </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Encapsulation </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Client–Server </span>
                                {PercentBar("work distribution", 40, 20, 40)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>
                                Plus un projet qu'un réel jeu, il consiste en la syncronisation de plusieurs clients
                                à un serveur distant ou local via un protocol UDP, en utilisant une API bas niveau
                                réseau.
                                <br/>
                                Je vous recommande de consulter la page Github

                            </p>
                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text"> En savoir plus </span>
                        </button>

                    </div>

                </div>

            </div>
        </>

    )

}