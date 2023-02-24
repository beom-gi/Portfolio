import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px',
    tablet: '1080px'
});

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 8em 0; //4em
`
const ContentImg = styled.div`
    padding: 0 5em;

    ${customMedia.lessThan("tablet")`
        padding: 0 6em;
    `}

    img {
        width: 800px;

        ${customMedia.lessThan("labtop")`
            width: 650px;
        `}

        ${customMedia.lessThan("tablet")`
            width: 450px;
        `}
        }
`
const ContentAbout = styled.div`
    width: 650px;
    padding: 0 5em;

    ${customMedia.lessThan("tablet")`
        padding: 0 6em;
    `}
    
    #content-title {
        color: #11264F;
        font-size: 1.5em;
        font-weight: bold;
        
        ${customMedia.lessThan("tablet")`
            font-size: 1.5em;
        `}
    }
`
const ContentSkills = styled.div`
    padding-top: 3em;

    ${customMedia.lessThan("labtop")`
        padding-top: 2em;
    `}
    ${customMedia.lessThan("tablet")`
        padding-top: 0.8em;
    `}
    
    h1 {
        padding-bottom: 0.5em;
        font-weight: bold;
    }

    p {
        font-size: 1em;
        padding: 0.3em 0;

        ${customMedia.lessThan("tablet")`
            font-size: 0.8em;
        `}
    }
`
const ContentFooter = styled.div`
    display: flex;
    
    button {
        cursor: pointer;
        width: 120px;
        height: 40px;
        background-color: #11264F;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        margin-top: 6em;

        ${customMedia.lessThan("labtop")`
            margin-top: 5em;
        `}
        ${customMedia.lessThan("tablet")`
            width: 80px;
            height: 30px;
            margin-top: 1.5em;
        `}

        img {
            width: 5em;
        }
    }

    button:nth-child(2) {
        font-size: 0.8em;
        background-color: black;
        margin-left: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

function Content3() {

    const projectUrl = "http://beom-gi.github.io";
    const projectCode = "https://github.com/beom-gi/Portfolio";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container ref={ref} style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>
            <ContentImg>
                <img src="img/portfolio.png"></img>
            </ContentImg>

            <ContentAbout>
                <p id="content-title">Portfolio</p>
                <ContentSkills>
                    <h1>기능구현</h1>
                    <p>- Framer-motion을 활용한 모션구현</p>
                    <p>- Media-query를 활용한 Desktop, Labtop, Tablet 반응형 웹</p>
                </ContentSkills>
                <ContentSkills>
                    <h1>사용기술</h1>
                    <p>- React, Framer-motion, styled-components</p>
                </ContentSkills>
                <ContentFooter>
                    <button onClick={() => { window.open(projectUrl) }}>Demo</button>
                    <button onClick={() => { window.open(projectCode) }}><img src="img/Icon/original/github-logo.png" /></button>
                </ContentFooter>
            </ContentAbout>
        </Container>
    )
}
export default Content3;