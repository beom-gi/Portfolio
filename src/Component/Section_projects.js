import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    margin: auto;
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
const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7.5%;

    .projectBox {
        /* width: 340px;
        height: 560px; */
        /* overflow: hidden; */

        img {
            width: 350px;
            height: 560px;
            margin: 0 100px;

            ${customMedia.lessThan("labtop")`
                width: 250px;
                height: 350px;
            `}

        }
    }
`

function Projects() {
    return (
        <Container>
            <div id="projects">

                <Layout>
                    <p id="title">Projects</p>
                    <ProjectsContainer>
                        <div className="projectBox">
                            <img src="img/silkload.png" />
                        </div>
                        <div className="projectBox">
                            <img src="img/visang.png" />
                        </div>
                    </ProjectsContainer>
                </Layout>

            </div>
        </Container>
    )
}

export default Projects;