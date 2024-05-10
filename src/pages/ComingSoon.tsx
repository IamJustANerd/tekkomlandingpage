import { FaLine, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions, type Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import CE from "@/assets/brand/CE.png";
import CE1 from "@/assets/brand/CE1.png";
import cn from "@/utils/cn";
import { loadFull } from "tsparticles";
import { AiFillInstagram } from "react-icons/ai";

export default function ComingSoon() {
  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      "autoPlay": true,
    "background": {
      "color": {
        "value": "#1E1E1E"
      },
      "image": "",
      "position": "",
      "repeat": "",
      "size": "",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": {
          "delay": 0.5,
          "enable": true
        }
      },
      "modes": {
        "trail": {
          "delay": 0.005,
          "pauseOnStop": true,
          "quantity": 5,
          "particles": {
            "color": {
              "value": "#ff0000",
              "animation": {
                "enable": true,
                "speed": 400,
                "sync": true
              }
            },
            "collisions": {
              "enable": false
            },
            "links": {
              "enable": false
            },
            "move": {
              "outModes": {
                "default": "destroy"
              },
              "speed": 2
            },
            "size": {
              "value": {
                "min": 1,
                "max": 5
              },
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              }
            }
          }
        },
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "selectors": []
          }
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        }
      }
    },
    "manualParticles": [],
    "particles": {
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "collisions": {
        "absorb": {
          "speed": 2
        },
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "enable": false,
        "maxSpeed": 50,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "speed": 50,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "offset": 0
          },
          "s": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "l": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "effect": {
        "close": true,
        "fill": true,
        "options": {},
        "type": []
      },
      "groups": {},
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "mode": "percent",
          "radius": 0
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fill": {}
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "width": 1920,
          "height": 1080
        },
        "limit": {
          "mode": "delete",
          "value": 0
        },
        "value": 100
      },
      "opacity": {
        "value": 1,
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 0.5,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "reduceDuplicates": false,
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "close": true,
        "fill": true,
        "options": {},
        "type": "circle"
      },
      "size": {
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 3,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "stroke": {
        "width": 0
      },
      "zIndex": {
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      },
      "destroy": {
        "bounds": {},
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "value": 3
          },
          "rate": {
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true,
          "particles": {}
        }
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "tilt": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": {
          "angle": 50,
          "move": 10
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "value": 0,
          "sync": false
        },
        "duration": {
          "value": 0,
          "sync": false
        }
      },
      "rotate": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "value": 45
        },
        "width": 1
      },
      "links": {
        "blink": false,
        "color": {
          "value": "random"
        },
        "consent": false,
        "distance": 100,
        "enable": true,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": false,
          "color": {
            "value": "#000"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "repulse": {
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "smooth": false,
    "style": {},
    "themes": [],
    "zLayers": 100,
    "emitters": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    }
    }),
    []
  );

  return (
    <main className="bg-dark relative overflow-hidden px-5 md:px-[50px] pb-14 max-h-screen">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="relative z-20">
          <div className="md:h-[650px] h-[600px] mt-[45px] drop-shadow-lg rounded-[40px] text-center md:px-10 px-4">
            <p
              className="font-fredoka font-light md:text-2xl sm:text-lg text-sm text-light md:tracking-[0.5em] tracking-[0.4em] text-center select-none"
              style={{ textShadow: "0px 4px rgba(255,255,255,0.5)" }}
            >
              WHERE CREATIVITY MEETS FUTURE TECHNOLOGY
            </p>
            <img
              src={CE}
              alt="X"
              className={cn(
                "mt-[40px] mx-auto drop-shadow-glow-white-1 select-none",
                "hover:drop-shadow-glow-white-1-5 hover:scale-110 will-change-transform transition-all duration-300 ease-in-out"
              )}
            />
            <h3
              className={cn(
                "font-fredoka mt-20 italic bg-clip-text xl:text-[42px] lg:text-[82px] sm:text-[50px] text-[23px] tracking-[0.3em] select-none",
              )}
            >
              COMPUTER ENGINEERING
            </h3>
          </div>
          <div className="relative z-30 flex flex-row flex-wrap h-38 max-w-[1000px] mt-[10px] md:mt-[20px] ml-mt[30px] justify-center gap-5 md:gap-y-7 md:gap-x-10 lg:gap-x-36 lg  mx-auto">
            <a href="https://www.youtube.com/@itseurekatv" className="flex md:gap-5 gap-2 items-center cursor-pointer">
              <FaYoutube className="text-black md:text-[50px] text-[35px]" />
              <p className="font-fredoka font-medium md:text-xl text-base text-black">
                Institut Teknologi Sepuluh Nopember
              </p>
            </a>
            <a href="https://www.instagram.com/computer_its/" className="flex md:gap-5 gap-2 items-center cursor-pointer">
              <AiFillInstagram className="text-black md:text-[50px] text-[35px]" />
              <p className="font-fredoka font-medium md:text-xl text-base text-black">
                computer_its
              </p>
            </a>
            {/*
              <a href="https://www.linkedin.com/company/mage-x" className="flex md:gap-5 gap-2 items-center cursor-pointer">
                <FaLinkedin  className="text-light md:text-[45px] text-[30px]" />
                <p className="font-fredoka font-medium md:text-xl text-base text-light">
                  mage_its
                </p>
              </a>
              <a href="https://line.me/R/ti/p/rio5948f" className="flex md:gap-5 gap-2 items-center cursor-pointer">
                <FaLine className="text-light md:text-[45px] text-[30px]" />
                <p className="font-fredoka font-medium md:text-xl text-base text-light">
                  @rio5948f
                </p>
              </a>
            */}
          </div>
      </div>
      <div className="absolute md:top-[505px] top-[500px] left-[50%] -translate-x-1/2 rounded-[50%] md:h-[1840px] h-[700px] md:w-[2630px] w-[1000px] bg-pcb z-10 drop-shadow-[0_0_45px_#FFFFFF]"></div>
    </main>
  );
}
