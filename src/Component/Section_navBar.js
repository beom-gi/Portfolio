import { Link } from "react-scroll";
import styled from "styled-components";


const Nav = styled.div`
    width: 100%;
    height: 7vh;
    position: fixed;
    background-color: #11264F;
    z-index: 3;

     ul {
         height: 7vh;
         display: flex;
         justify-content: center;
         align-items: center;

         li {
             color: white;
             display: inline-block;
             margin: 0 100px;
             font-size: 18px;
             cursor: pointer;
         }
     }
`

function Navbar() {
    return(
        <Nav>
            <ul>
                <Link to="home" spy={true} smooth={true}>
                    <li>Home</li>
                </Link>
                <Link to="profile" spy={true} smooth={true}>
                    <li>Profile</li>
                </Link>
                <Link to="skills" spy={true} smooth={true}>
                    <li>Skills</li>
                </Link>
                <Link to="projects" spy={true} smooth={true}>
                    <li>Projects</li>
                </Link>
            </ul>
        </Nav>
    )
}

export default Navbar;