import "../styles/home.css"
import { Unity, useUnityContext  } from "react-unity-webgl"
import { useInView } from "react-intersection-observer";

export default function Home() {

    const unityProviders = [
        useUnityContext({
            loaderUrl: "horizon/horizon.loader.js",
            dataUrl: "horizon/horizon.data.br",
            frameworkUrl: "horizon/horizon.js.br",
            codeUrl: "horizon/horizon.wasm.br"
        }),
        useUnityContext({
            loaderUrl: "nichii/WebNichii.loader.js",
            dataUrl: "nichii/WebNichii.data.br",
            frameworkUrl: "nichii/WebNichii.framework.js.br",
            codeUrl: "nichii/WebNichii.wasm.br"
        })
    ]

    const projectDescription = [
        <>
            <div className={"project-desc"}>
                Adventure's Horizon est un jeu Die & Retry, vous avez pour mission de progresser dans une montagne pleine de danger
                vous avez pour objectif de tuer les monstres de la montagne, mourrir pour acheter plus d'équipements et allez plus loin dans la montagne.
            </div>
        </>,

        <>
            <div className={"project-desc"}>
                Nichii est un projet de jeu mobile, développé en parallèle des cours sur Unity, le jeu est un idle
                farmer vous avez pour mission d'avoir le plus de ressouces naturelles ou transformé
            </div>
        </>
    ]

    function PreviousGame() {
        let currentGame = parseInt(localStorage.getItem("currentGame")) || 1;
        currentGame = (currentGame-1)%unityProviders.length
        localStorage.setItem("currentGame", currentGame.toString())
        window.location.reload()
    }

    function NextGame() {
        let currentGame = parseInt(localStorage.getItem("currentGame")) || 0;
        currentGame = (currentGame+1)%unityProviders.length
        localStorage.setItem("currentGame", currentGame.toString())
        window.location.reload()
    }

    function Fullscreen() {
        unityProviders[localStorage.getItem("currentGame") ? parseInt(localStorage.getItem("currentGame")) : 0].requestFullscreen(true);
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
                                    <div className={"profile-social"}
                                         style={{backgroundImage: "url(" + "public/github.png" + ")"}}></div>
                                </a>

                                <a href="https://www.linkedin.com/in/ethan-gilotin-788015293/" target={"_blank"}>
                                    <div className={"profile-social"}
                                         style={{backgroundImage: "url(" + "public/linkedin.png" + ")"}}></div>
                                </a>

                                <a href="https://momocrash.itch.io/" target={"_blank"}>
                                    <div className={"profile-social"}
                                         style={{backgroundImage: "url(" + "public/itch-io.png" + ")"}}></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#project">
                        <div className={"scrolldown"}>
                            <div className={"chevrons"}>
                                <div className={"chevrondown"}></div>
                                <div className={"chevrondown"}></div>
                            </div>
                        </div>
                    </a>

                    {
                        /*</div>
                    <div className={"container"}>

                    <div className={"big-card"}>

                        <h2 className={"font-face-florida sub-name"}> Bienvenue dans mon jeune parcours aberrant ! </h2>
                        <p className={"project-desc small-text"}>
                            Tout d'abors merci d'être interessé.e par mes oeuvre, mon travail ou mon profil.
                        </p>
                        <p className={"project-desc"}>
                            Passionné par le développement depuis mes 14 ans, toujours à la recherche d'innovations et
                            de nouveaux languages,
                        </p>
                        <p className={"project-desc"}>
                            Particulièrement dans le jeu vidéo avec plusieurs projet sur Unity en C#, des projet de
                            cours en C/C++, et récement des projets sur Unreal Engine sur le quel je me forme en
                            parrallèle des études.
                        </p>


                    </div>

                </div>


                <div className={"container"}>

                    <div className={"big-card"}>

                        <h2 className={"font-face-florida title-name"}> unity & C# </h2>
                        <p className={"project-desc"}>
                            Ut vestibulum viverra felis ut faucibus. Phasellus nec facilisis justo. Duis elementum urna
                            nec consectetur efficitur. Praesent condimentum tellus at ante porta semper. Nullam lacinia
                            malesuada ornare. Nulla dapibus tempor odio. Ut dictum est est, at suscipit neque mattis ut.
                            Proin fringilla scelerisque ex, non efficitur justo interdum ut. Ut metus mi, vulputate ac
                            dui ac, dapibus tincidunt metus. Sed lectus odio, placerat vitae ex quis, elementum
                            convallis lacus. Nunc ut nunc accumsan, tincidunt risus nec, aliquam lorem. Nunc in suscipit
                            est. Vestibulum turpis leo, scelerisque eget ligula in, rhoncus vulputate lectus. Aliquam
                            viverra est sed semper iaculis. Sed vehicula quam a auctor lacinia. Mauris mattis dictum
                            feugiat.
                        </p>
                    </div>*/
                }

                </div>

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

                <div className={"container in-column"}>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Rebreaker</h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> C++ </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Game </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> School </h2>
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
                            <p className={"project-desc"}> ReBreaker, est une réplique d'un Casse-Brique dans une
                                version surbooster, avec un maximum d'effets visuels, de feedbacks, et d </p>

                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text">Learn More</span>
                        </button>

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
                                {/*                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightsalmon"}}> Encapsulation </span>
                                <span className={"project-skills-descriptor"} style={{borderColor: "lightskyblue"}}> API Usage </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightgreen"}}> Client–Server </span>
                                {PercentBar("Repartition", 40, 40, 60)}*/}
                                <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>     API Usage </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Encapsulation </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "indianred"}}>   Client–Server </span>
                                {PercentBar("work distribution", 40, 20, 40)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>Petites descriptions de la finalité du projet et de
                                l'apprentissage </p>
                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text">Learn More</span>
                        </button>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Endless Terrain </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Project </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Personal </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <iframe ref={ref} className={"project-image"} width="560" height="315"
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
                            <p className={"project-desc"}>qsd</p>

                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text">Learn More</span>
                        </button>
                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Nichii </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Game </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}>Personal </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <span ref={ref} className={"project-image"}>
                                <span className={"no-image"}> NO SIGNAL </span>
                            </span>
                            <p className={"profile-separator"}></p>
                            <div className={"project-skills in-row"}>
                                {/*                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightsalmon"}}> Mobile </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}> Programming </span>
                                <span className={"project-skills-descriptor"} style={{borderColor: "lightgreen"}}> Game Design </span>*/}
                                <span className={"project-skills-descriptor"} style={{borderColor: "#fff47f"}}>     Mobile Dev. </span>
                                <span className={"project-skills-descriptor"}
                                      style={{borderColor: "lightskyblue"}}>Programming </span>
                                <span className={"project-skills-descriptor"} style={{borderColor: "indianred"}}>   Game Design </span>
                                {PercentBar("work distribution", 40, 35, 25)}
                            </div>
                            <p className={"profile-separator"}></p>
                            <p className={"project-desc"}>Petites descriptions de la finalité du projet et de
                                l'apprentissage</p>

                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text">Learn More</span>
                        </button>

                    </div>

                    <div className={"card"}>

                        <div className={"container in-row-forced justify-start"}>
                            <h2 className={"font-face-florida title-name"}> Adventure Horizon </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#53c2fe"}}> Unity </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#f59e26"}}> Personal </h2>
                            <h2 className={"projet-tag"} style={{backgroundColor: "#fee971"}}> Game </h2>
                        </div>

                        <div className={"container in-row justify-start"}>
                            <span ref={ref} className={"project-image"}>
                                <span className={"no-image"}> NO SIGNAL </span>
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
                            <p className={"project-desc"}>Petites descriptions de la finalité du projet et de
                                l'apprentissage</p>

                        </div>

                        <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                      <span className="icon arrow"></span></span>
                            <span className="font-face-florida button-text">Learn More</span>
                        </button>

                    </div>

                </div>

            </div>
        </>

    )

}