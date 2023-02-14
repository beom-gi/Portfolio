import { useRef } from "react";
import styled from "styled-components";
import { motion, useIsPresent, useInView } from "framer-motion";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});
// white-space: pre-line;  => 줄바꿈
const Container = styled.div`
    height: 100vh;
    background-color: #11264F;
    display: flex;
    justify-content: center;

    .privacy-screen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        z-index: 5;
}
`
const Layout = styled.div`
    width: 1020px;
    padding: 25em 0;
    ${customMedia.lessThan("labtop")`
            padding: 18em 0;
        `}

        p {
            transform: translateX(-100px);
            opacity: 0;
            font-size: 64px;
            color: #87CEFA;
            text-align: center;
            font-weight: bold;
            line-height: 130%;
        }
`

function Home() {

    const isPresent = useIsPresent();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container id="home" ref={ref}>
            
                <Layout>
                    <p
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                        }}>Front-end Developer</p>
                        
                    <p
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s"
                        }}>Kim Gi Beom</p>
                </Layout>

            <motion.div
                initial={{ scaleX: 3 }}
                animate={{ scaleX: 0, transition: { duration: 1.1, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 1.1, ease: "circIn" } }}
                style={{ originX: isPresent ? 1 : 0 }}
                className="privacy-screen"
            />

        </Container>
    )
}

export default Home;