import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import s from "./../../main/Main.module.scss"



function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    // const windowWidth = window.innerWidth

    // const options = {
    //     "fullScreen": {
    //         "enable": false,
    //         "zIndex": 0
    //     },
    //     "particles": {
    //         "number": {
    //             "value": 80,
    //             "density": {
    //                 "enable": true,
    //                 "area": 800
    //             }
    //         },
    //         "color": {
    //             "value": "#fff"
    //         },
    //         "shape": {
    //             "type": "circle",
    //         },
    //         "opacity": {
    //             "value": 1,
    //             "random": true,
    //             "anim": {
    //                 "enable": true,
    //                 "speed": 1,
    //                 "opacity_min": 0.7,
    //                 "sync": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": true,
    //             "anim": {
    //                 "enable": true,
    //                 "speed": 1,
    //                 "size_min": 1,
    //                 "sync": false
    //             }
    //         },
    //         "rotate": {
    //             "value": 0,
    //             "random": true,
    //             "direction": "clockwise",
    //             "animation": {
    //                 "enable": true,
    //                 "speed": 5,
    //                 "sync": false
    //             }
    //         },
    //         "line_linked": {
    //             "enable": true,
    //             "distance": windowWidth > 800 ? 180 : 100,
    //             "color": "#ffffff",
    //             "opacity": 0.4,
    //             "width": 2
    //         },
    //         "move": {
    //             "enable": true,
    //             "speed": 1,
    //             "random": false,
    //             "straight": false,
    //             "attract": {
    //                 "enable": false,
    //                 "rotateX": 600,
    //                 "rotateY": 1200
    //             }
    //         }
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onhover": {
    //                 "enable": windowWidth > 800,
    //                 "mode": ["grab"]
    //             },
    //             "onclick": {
    //                 "enable": false,
    //                 "mode": "bubble"
    //             },
    //             "resize": true
    //         },
    //         "modes": {
    //             "grab": {
    //                 "distance": 200,
    //                 "line_linked": {
    //                     "opacity": 1
    //                 }
    //             },
    //             "repulse": {
    //                 "distance": 200
    //             },
    //             "push": {
    //                 "particles_nb": 4
    //             },
    //             "remove": {
    //                 "particles_nb": 2
    //             }
    //         }
    //     },
    //     "retina_detect": true,
    //     "background": {
    //         "image": "",
    //         "position": "50% 50%",
    //         "repeat": "no-repeat",
    //     }
    // }

    const style = `${s.particles}`
    return (
        // <div className={s.particles}>
        <Particles
            className={style}
            id="particles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // fullScreen: {
                //     enable: true,
                // },
                background: {
                    color: {
                        value: "1F1F20FF",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fffdfd",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
        // </div>
    );
};

export default Particle;
















// import {useCallback} from "react";
// import Particles from "react-tsparticles";
// import {loadFull} from "tsparticles";
//
// export function Particle() {
//     // this customizes the component tsParticles installation
//     const customInit = useCallback(async engine => {
//         // this adds the bundle to tsParticles
//         await loadFull(engine);
//     }, []);
//
//     const windowWidth = window.innerWidth
//
//     const options = {
//         // "fullScreen": {
//         //     "enable": true,
//         //     "zIndex": 0
//         // },
//         "particles": {
//             "number": {
//                 "value": windowWidth < 1000 ? 15 : 50,
//                 "density": {
//                     "enable": false,
//                     "value_area": 80
//                 }
//             },
//             "color": {
//                 "value": "#fff"
//             },
//             "shape": {
//                 "type": "star",
//             },
//             "opacity": {
//                 "value": 1,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 1,
//                     "opacity_min": 0.7,
//                     "sync": false
//                 }
//             },
//             "size": {
//                 "value": 4,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 1,
//                     "size_min": 1,
//                     "sync": false
//                 }
//             },
//             "rotate": {
//                 "value": 0,
//                 "random": true,
//                 "direction": "clockwise",
//                 "animation": {
//                     "enable": true,
//                     "speed": 5,
//                     "sync": false
//                 }
//             },
//             "line_linked": {
//                 "enable": true,
//                 "distance": windowWidth > 800 ? 180 : 100,
//                 "color": "#ffffff",
//                 "opacity": 0.4,
//                 "width": 2
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 1,
//                 "random": false,
//                 "straight": false,
//                 "attract": {
//                     "enable": false,
//                     "rotateX": 600,
//                     "rotateY": 1200
//                 }
//             }
//         },
//         "interactivity": {
//             "events": {
//                 "onhover": {
//                     "enable": windowWidth > 800,
//                     "mode": ["grab"]
//                 },
//                 "onclick": {
//                     "enable": false,
//                     "mode": "bubble"
//                 },
//                 "resize": true
//             },
//             "modes": {
//                 "grab": {
//                     "distance": 200,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "repulse": {
//                     "distance": 200
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 },
//                 "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         },
//         "retina_detect": true,
//         "background": {
//             "image": "",
//             "position": "50% 50%",
//             "repeat": "no-repeat",
//         }
//     }
//
//     return <Particles id="tsparticles"
//                       options={options} init={customInit}/>;
// }

