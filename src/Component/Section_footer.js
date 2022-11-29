import styled from "styled-components";

const Conatiner = styled.div`
    height: 10vh;
    width: 100%;
    /* display: flex; */
    justify-content: center;
    margin: auto;
    background-color: #11264F;

    p {
        font-size: 24px;
        color: white;
        font-weight: bold;
        line-height: 10vh;
        float: right;
        margin-right: 50px;
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