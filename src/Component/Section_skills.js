import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 99vh;
    display: flex;
    justify-content: center;
    background-color: #eee;
`
const Layout = styled.div`
    width: 1020px;
    padding-top: 7em;

    ${customMedia.lessThan("labtop")`
      padding-top: 6em;
    `}

    #title {
        text-align: center;
        color: #11264F;
        font-size: 48px;
        font-weight: bold;
    }

    .skills-box {
        padding: 3em 0;
        display: flex;

        ${customMedia.lessThan("labtop")`
            padding: 2em 0;
        `}

        .logoIcon {
            width: 35px;
            margin-bottom: 10px;
        }

        p {
            font-size: 18px;
            font-weight: bold;


            ${customMedia.lessThan("labtop")`
                font-size: 12px;
            `}
        }

        .progressbar {
            width: 100%;
            height: 10px;
            float: right;
            background-color: #87CEFA;
            border-radius: 30px;
            margin-top: 15px;
            box-shadow: 0 4px 4px -4px #333;
            overflow: hidden;
            margin-top: 1.5em;

            #percentbar {
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }
        }
    }
`
const LanguageBox = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
// const Wrapper = styled.div`
//     width: 100%;
//     height: 99.9%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
const htmlBarStyles = {
    indeterAnimate: {
        width: ["0%", "80%"],
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0
        },
        x: 0
    }
};

const cssBarStyles = {
    indeterAnimate: {
        width: ["0%", "80%"],
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0
        },
        x: 0
    }
};

const jsBarStyles = {
    indeterAnimate: {
        width: ["0%", "40%"],
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0
        },
        x: 0
    }
};

const jqBarStyles = {
    indeterAnimate: {
        width: ["0%", "20%"],
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0
        },
        x: 0
    }
};
const reactBarStyles = {
    indeterAnimate: {
        width: ["0%", "30%"],
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0
        },
        x: 0
    }
};



function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const barAnimation = useAnimation();

    useEffect(() => {
        if (isInView) {
            barAnimation.start("indeterAnimate")
        }
        console.log(isInView);

    }, [isInView])

    return (
        <Container id="skills" ref={ref}>
            {/* <Wrapper ref={ref}> */}
                {isInView && <Layout>
                    
                    <p id="title">skills</p>

                    <div className="skills-box">

                        <LanguageBox>
                            <img src="img/Icon/languageicon/html.png" className="logoIcon" />
                            <p>HTML</p>
                        </LanguageBox>

                        <div className="progressbar">
                            <motion.div
                                id="percentbar"
                                initial="start"
                                animate={barAnimation}
                                variants={htmlBarStyles}
                            // style={{ width: "80%" }}
                            />
                        </div>
                        
                    </div>

                    <div className="skills-box">

                        <LanguageBox>
                            <img src="img/Icon/languageicon/css.png" className="logoIcon" />
                            <p>CSS</p>
                        </LanguageBox>

                        <div className="progressbar">
                            <motion.div
                                id="percentbar"
                                initial="start"
                                animate={barAnimation}
                                variants={cssBarStyles}
                            />
                        </div>
                    </div>

                    <div className="skills-box">

                        <LanguageBox>
                            <img src="img/Icon/languageicon/js.png" className="logoIcon" />
                            <p>Javascript</p>
                        </LanguageBox>

                        <div className="progressbar">
                            <motion.div
                                id="percentbar"
                                initial="start"
                                animate={barAnimation}
                                variants={jsBarStyles}
                            />
                        </div>
                    </div>

                    <div className="skills-box">

                        <LanguageBox>
                            <img src="img/Icon/languageicon/react.png" className="logoIcon" />
                            <p>React</p>
                        </LanguageBox>

                        <div className="progressbar">
                            <motion.div
                                id="percentbar"
                                initial="start"
                                animate={barAnimation}
                                variants={reactBarStyles}
                                layout
                            />
                        </div>
                    </div>

                    <div className="skills-box">

                        <LanguageBox>
                            <img src="img/Icon/languageicon/jq.png" className="logoIcon" />
                            <p>Jquery</p>
                        </LanguageBox>

                        <div className="progressbar">
                            <motion.div
                                id="percentbar"
                                initial="start"
                                animate={barAnimation}
                                variants={jqBarStyles}
                            />
                        </div>
                    </div>

                </Layout>}
            {/* </Wrapper> */}
        </Container>
    )
}

export default Skills;