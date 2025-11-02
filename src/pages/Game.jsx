import { Unity, useUnityContext  } from "react-unity-webgl"
import React, {useEffect, useState} from "react";

const getInitialLang = () => {
    try {
        if (typeof window !== 'undefined') return localStorage.getItem('lang') || 'en';
    } catch (e) {
        return 'en';
    }
    return 'en';
}


export default function Game() {
    
    const [lang, setLang] = useState(getInitialLang());

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

            return <>
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
            </>

        }

        return (<></>)

    }
    
    return (
        <>
            <div>


                {
                    LoadUnityPlayer()
                }
                
            </div>
        </>
    )
}