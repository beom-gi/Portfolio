import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
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

    .skills-box {
        margin-top: 7.5%;

        ${customMedia.lessThan("labtop")`
            margin-top: 4%;
        `}

        p {
            font-size: 24px;

            ${customMedia.lessThan("labtop")`
                font-size: 18px;
            `}
        }

        .progressbar {
            width: 100%;
            height: 10px;
            background-color: #87CEFA;
            border-radius: 30px;
            margin-top: 15px;
            box-shadow: 0 4px 4px -4px #333;

            #html-percentbar {
                width: 90%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }

            #css-percentbar {
                width: 90%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }

            #js-percentbar {
                width: 40%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }

            #jq-percentbar {
                width: 20%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }

            #react-percentbar {
                width: 60%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }

            #sc-percentbar {
                width: 80%;
                height: 100%;
                background-color: #11264F;
                border-radius: 30px;
            }
        }
    }
`


function Skills() {
    return (
        <Container>
            <div id="skills">
                <Layout>
                    <p id="title">skills</p>

                    <div className="skills-box">
                        <p>HTML</p>
                        <div className="progressbar">
                            <div id="html-percentbar" />
                        </div>
                    </div>

                    <div className="skills-box">
                        <p>CSS</p>
                        <div className="progressbar">
                            <div id="css-percentbar" />
                        </div>
                    </div>

                    <div className="skills-box">
                        <p>Javascript</p>
                        <div className="progressbar">
                            <div id="js-percentbar" />
                        </div>
                    </div>

                    <div className="skills-box">
                        <p>Jquery</p>
                        <div className="progressbar">
                            <div id="jq-percentbar" />
                        </div>
                    </div>

                    <div className="skills-box">
                        <p>React</p>
                        <div className="progressbar">
                            <div id="react-percentbar" />
                        </div>
                    </div>

                    <div className="skills-box">
                        <p>style-components</p>
                        <div className="progressbar">
                            <div id="sc-percentbar" />
                        </div>
                    </div>
                </Layout>

            </div>
        </Container>
    )
}

export default Skills;