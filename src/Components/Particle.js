import React from 'react';
import Particles from "react-particles-js";

function Particle() {
    return (
        <div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 10,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "/react.cd2ab268.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "/k8s.2d579d24.svg",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/code.b3b4c4f4.png",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 1,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 20,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} />
        </div>
    );
}

export default Particle;