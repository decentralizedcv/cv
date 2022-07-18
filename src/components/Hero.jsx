import React, {useEffect} from "react";
import styled from "styled-components";
import {Typewriter} from "react-simple-typewriter";
import particleOption from "../data/particle-config.json";
import Particles from "react-tsparticles";
// import Bg from "../images/bg.jpg";
import Bg from "../images/a.jpg";

import video_1 from "../video/intro_1.mp4";
import {overlayAnimation} from "../OverlayAnimation";
import Overlay from "./Overlay";
import {Link} from "react-router-dom";

const Hero = ({type = 'bgColor'}, props) => {
    // type { bgParticles, bgImage, bgvideo, bgColor, navbarLink }
    useEffect(() => {
        overlayAnimation();
    }, []);


    return (
        <>
            <Overlay/>
            <HomeStyled>
                {type === 'bgParticles' && (
                    <Particles id="tsparticles" options={particleOption}/>
                )}
                {/* Card - Started */}
                <div
                    className="card-inner card-started active"
                    id="home-card"
                    style={{height: "100vh"}}
                >
                    {type === 'bgParticles' && (
                        <div
                            className="slide"
                            style={{backgroundImage: `url(${Bg})`}}
                        ></div>
                    )}

                    {type === 'bgImage' && (
                        <div
                            className="slide"
                            style={{backgroundImage: `url(${Bg})`}}
                        ></div>
                    )}

                    {type === 'bgvideo' && (
                        <>
                            <div id="video-bg" className="slide">
                                <div className="video_container">
                                    <video className="videoTag" autoPlay loop muted>
                                        <source src={video_1} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        </>
                    )}

                    {type === 'bgColor' && (
                        <div className="slide" style={{backgroundImage: "#000"}}></div>
                    )}

                    <div className="centrize full-width">
                        <div className="vertical-center">
                            {/* Started titles */}
                            <div className="title">
                                <span>Decentralized </span> CV <span>On IPFS/Filecoin </span>
                            </div>
                            <div
                                className="subtitle"
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginTop: 32,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                We are
                                <span style={{color: "#fff"}}>
                  <Typewriter
                      words={[
                          "web3's cv platform.",
                          "decentralized.",
                          "on IPFS/Filecoin.",
                          "free",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                  />
                </span>
                                <span className="typed-title"></span>
                            </div>


                            <div style={{marginTop: 64}} className="button">
                                <Link to={"/sample"}> look our vc sample ->
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeStyled>
        </>
    );
};

export default Hero;

const HomeStyled = styled.div`
  .grid_anim {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    span {
      display: block;
      height: 100%;
      width: 0;
      background: #000;
    }
  }

  .video_container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .videoTag {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
