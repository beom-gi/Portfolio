import styled from "styled-components";

// white-space: pre-line;  => 줄바꿈
const Container = styled.div`
    height: 100vh;
    background-color: #11264F;
    display: flex;
    justify-content: center;
    margin: auto;
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
    align-items: center;

        p {
            font-size: 64px;
            color: #87CEFA;
            white-space: pre-line;
            text-align: center;
            font-weight: bold;
            position: relative;
            top: 40vh;
        }
`

function Home() {
    return (
        <Container>
            <div id="home">
                <Layout>
                    <p>Front-end Developer{"\n"}Kim Gi Beom</p>
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

        </Container>
    )
}

export default Home;