import styled from "styled-components";

const Conatiner = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #11264F;

    p {
        height: 50%;
        font-size: 24px;
        color: white;
        font-weight: bold;
        float: right;
        padding: 0.5em 1em;
    }
`

function Footer() {
    return(
            <Conatiner>
                <p>design & developed by Kim Gi Beom</p>
            </Conatiner>
    )
}

export default Footer;