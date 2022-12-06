import { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";


const Nav = styled.div`
    width: 100%;
    height: 7vh;
    position: fixed;
    background-color: #0f2145;
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
             padding: 1rem;
         }
         
         li:hover {
            color: #87CEFA;
            transition: 0.3s;
         }

         .active {
            padding-bottom: 12px;
            border-bottom: 3px solid #87CEFA;
            color: #87CEFA;
         }
     }
`

function Navbar() {

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <Nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="home" spy={true} smooth={true} onClick={closeMenu}>Home</Link>
                </li>
                {/* offset={-100} duration={500}  */}
                <li>
                    <Link to="profile" spy={true} smooth={true} onClick={closeMenu}>Profile</Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} onClick={closeMenu}>Skills</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} onClick={closeMenu}>Projects</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Navbar;