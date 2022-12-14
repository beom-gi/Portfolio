import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    labtop: '1550px'
});

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
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
const ProfileBox = styled.div`
    height: 800px;
    border: 3px solid #11264F;
    border-radius: 30px;
    text-align: center;
    margin-top: 4%;
    
    ${customMedia.lessThan("labtop")`
      height: 400px;
      padding: 50px;
    `}

    /* ${customMedia.lessThan("labtop")`
      height: 380px;
      padding: 50px;
    `} */

    #idPicture {
        width: 188px;
        border-radius: 100px;
        margin-top: 5%;

        ${customMedia.lessThan("labtop")`
            width: 140px;
            float: left;
            margin: 0 0 0 90px;
        `}

        /* ${customMedia.lessThan("labtop")`
            width: 150px;
            float: left;
            margin: 45px 0 0 70px;
        `} */
    }

    #introduce {
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 7%;

        ${customMedia.lessThan("labtop")`
            font-size: 1em;
            margin-top: 10%;
        `}

        /* ${customMedia.lessThan("labtop")`
            width: 300px;
            margin: 25px 600px 0 0;
            float: left;
            position: relative;
            line-height: 150%;
            font-size: 1em;
        `} */
    }
`
const InfoboxConatiner = styled.div`
    margin-top: 9%;
    display: grid;
    justify-content: center;
    text-align: center;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 150px 150px;

    ${customMedia.lessThan("labtop")`
        margin-top: 13%;
        grid-template-columns: 300px 300px 300px;
        grid-template-rows: 100px 100px;
    `}

    /* ${customMedia.lessThan("labtop")`
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 180px 180px;
        margin: 0 auto;
        position: relative;
        top: 15%;
        right: 28%;
    `} */

    .infoBox {

        img {
            width: 37px;
            margin-bottom: 10%;

            ${customMedia.lessThan("labtop")`
                width: 26px;
                margin-bottom: 5%;
            `}

            p {
                ${customMedia.lessThan("labtop")`
                     font-size: 18px;
                `}
            }
        }
    }
`

function Profile() {
    return (
        <Container>
            <div id="profile">

                <Layout>
                    <p id="title">Profile</p>

                    <ProfileBox>
                        <img src="img/idpicture.jpg" id="idPicture" />
                        <p id="introduce">"????????? ??????????????? ?????? ????????? ????????? ????????? ?????????."</p>

                        <InfoboxConatiner>
                            <div className="infoBox">
                                <img src="img/Icon\original/name_icon.png" />
                                <p>?????????(Kim Gi Beom)</p>
                            </div>

                            <div className="infoBox">
                                <img src="img/Icon\original/phone_icon.png" />
                                <p>010-3565-8641</p>
                            </div>

                            <div className="infoBox">
                                <img src="img/Icon\original/calendar_icon.png" />
                                <p>1999.09.23</p>
                            </div>

                            <div className="infoBox">
                                <img src="img/Icon\original/pen_icon.png" />
                                <p>??????????????? IT??????????????????</p>
                            </div>

                            <div className="infoBox">
                                <img src="img/Icon\original/email_icon.png" />
                                <p>rlqja1135@naver.com</p>
                            </div>

                            <div className="infoBox">
                                <img src="img/Icon\original/github_icon.png" />
                                <p>github.com/beom-gi</p>
                            </div>

                        </InfoboxConatiner>
                    </ProfileBox>

                </Layout>
            </div>

        </Container>
    )
}

export default Profile;