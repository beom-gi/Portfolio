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
    padding-top: 7em;

    ${customMedia.lessThan("labtop")`
      padding-top: 6em;
    `}

    #title {
        text-align: center;
        color: #11264F;
        font-size: 48px;
        font-weight: bold;
    }
`
const ProfileBox = styled.div`
    height: 800px;
    border: 3px solid #11264F;
    border-radius: 30px;
    text-align: center;
    margin-top: 4%;
    background-color: #fff;
    
    ${customMedia.lessThan("labtop")`
      height: 400px;
      padding: 50px;
    `}

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
        <Container id="profile">
                <Layout>
                    <p id="title">Profile</p>

                    <ProfileBox>
                        <img src="img/idpicture.jpg" id="idPicture" />
                        <p id="introduce">"변화를 두려워하지 않는 성실한 개발자 김기범 입니다."</p>

                        <InfoboxConatiner>
                            <div className="infoBox">
                                <img src="img/Icon\original/name_icon.png" />
                                <p>김기범(Kim Gi Beom)</p>
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
                                <p>신구대학교 IT소프트웨어과</p>
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
        </Container>
    )
}

export default Profile;