import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 93vh;
    display: flex;
    justify-content: center;
    background-color: #eee;

`
const Layout = styled.div`
    width: 100vw;
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
`
const ProjectList = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 13em;

    ${customMedia.lessThan("labtop")`
      padding-top: 5em;
    `}
`
const ProjectItem = styled.div`
    width: 400px;
    height: 300px;
    margin: 0 3%;
    padding: 0.5em 0;
    background-color: #fff;
    text-align: center;
    
    .project-title {
        margin: 1.5em 0;
        font-size: 1.2em;
        font-weight: bold;
        color: #11264F;
    }

    button {
        cursor: pointer;
        width: 60px;
        height: 30px;
        background-color: #11264F;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
    }
    button:hover {
        color: #87CEFA;
        transition: 0.3s;
    }
`
const ImgContainer = styled.div`
    width: 380px;
    height: 185px;
    overflow: hidden;
    margin: 0 auto;

    img {
        width: 380px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        }

    img:hover {
        transform: scale(1.15);
        -webkit-transform: scale(1.15);
        -moz-transform: scale(1.15);
        -ms-transform: scale(1.15);
        -o-transform: scale(1.15);
        opacity: 0.7;
        }
`

function Projects() {

    const projectUrl = ["https://beom-gi.github.io/Chromapp-momentum/", "https://beom-gi.github.io/Drawing-board/", "https://beom-gi.github.io"];
    const projectCode = ["https://github.com/beom-gi/Chromapp-momentum", "https://github.com/beom-gi/Drawing-board", "https://github.com/beom-gi/Portfolio"];

    return (
        <Container id="projects">
            <Layout>
                <p id="title">Projects</p>

                <ProjectList>
                    <ProjectItem>
                        <ImgContainer onClick={() => { window.open(projectUrl[0]) }}>
                            <img src="img/chromapp.png"></img>
                        </ImgContainer>
                        <p className="project-title">Chromapp</p>
                        <button onClick={() => { window.open(projectCode[0]) }}>code</button>
                    </ProjectItem>

                    <ProjectItem>
                        <ImgContainer onClick={() => { window.open(projectUrl[1]) }}>
                            <img src="img/paint.png"></img>
                        </ImgContainer>
                        <p className="project-title">Paint</p>
                        <button onClick={() => { window.open(projectCode[1]) }}>code</button>
                    </ProjectItem>

                    <ProjectItem>
                        <ImgContainer onClick={() => { window.open(projectUrl[2]) }}>
                            <img src="img/portfolio.png"></img>
                        </ImgContainer>
                        <p className="project-title">Portfolio</p>
                        <button onClick={() => { window.open(projectCode[2]) }}>code</button>
                    </ProjectItem>
                </ProjectList>
            </Layout>
        </Container>
    )
}

export default Projects;