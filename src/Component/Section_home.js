import { useRef } from "react";
import styled from "styled-components";
import { motion, useIsPresent, useInView } from "framer-motion";

// white-space: pre-line;  => 줄바꿈
const Container = styled.div`
    height: 100vh;
    background-color: #11264F;
    display: flex;
    justify-content: center;
    /* margin: auto; */

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
// const Nav = styled.div`
//     width: 100%;
//     height: 7vh;
//     position: fixed;
//     background-color: #11264F;
//     z-index: 3;

//      ul {
//          height: 7vh;
//          display: flex;
//          justify-content: center;
//          align-items: center;

//          li {
//              color: white;
//              display: inline-block;
//              margin: 0 100px;
//              font-size: 18px;
//              cursor: pointer;
//          }
//      }
// `
const Layout = styled.div`
    width: 1020px;
    padding: 40vh 0;

        p {
            /* display: block; */
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
        <Container ref={ref}>
            <div id="home">
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
            </div>
            {/* <Nav>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
             </Nav> */}

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