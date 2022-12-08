import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import Item from "./Item";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: #eee;
`
const Layout = styled.div`
    width: 1020px;

    #title {
        text-align: center;
        color: #11264F;
        font-size: 48px;
        font-weight: bold;
        margin-top: 13%;

        ${customMedia.lessThan("labtop")`
            margin-top: 10%;
        `}
    }
`
const ProjectList = styled.div`
    width: 1020px;
    display: flex;
    justify-content: center;
    margin-top: 25%;

    ${customMedia.lessThan("labtop")`
            margin-top: 10%;
        `}

    a {
        text-decoration: none;
    }

    .projectBox {
        width: 400px;
        height: 300px;
        margin: 0 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;

        .displayProject {
            width: 100%;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            overflow: hidden;

            img {
                width: 100%;
                transition: all 0.5s ease-in-out;
            }
            img:hover {
                transform: scale(1.2);
                -webkit-transform: scale(1.2);
                -moz-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -o-transform: scale(1.2);
                opacity: 0.7;
            }
        }

        span {
            font-size: 18px;
            font-weight: bold;
            color: #87CEFA;
            margin-top: 8%;
        }
    }
`
// const Motionul = styled(motion.ul)`
//     width: 100%;
//     background-color: #11264F;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border-radius: 25px;
//     margin-top: 5%;
// `

function Projects() {

    // const items = [0, 1];

    return (
        <Container id="projects">

            <Layout>
                <p id="title">Projects</p>

                <ProjectList>
                    <a href="https://github.com/beom-gi/Viskit">
                        <div className="projectBox" href="">
                            <div className="displayProject">
                                <img src="img/aaa.png"></img>
                            </div>
                            <span>VISKIT</span>
                        </div>
                    </a>

                    <a href="https://github.com/beom-gi/Silkload/tree/main">
                        <div className="projectBox">
                            <div className="displayProject">
                                <img src="img/bbb.PNG"></img>
                            </div>
                            <span>SILKLOAD</span>
                        </div>
                    </a>
                </ProjectList>

                {/* <AnimateSharedLayout>
                        <Motionul layout initial={{ borderRadius: 25 }}>
                            {items.map(item => (
                                <Item key={item} />
                            ))}
                        </Motionul>
                    </AnimateSharedLayout> */}

            </Layout>

        </Container>
    )
}

export default Projects;