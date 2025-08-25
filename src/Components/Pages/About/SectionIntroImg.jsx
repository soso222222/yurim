import { AboutImg, IntroImgHeadText, IntroImgText, IntroImgTextBox, SectionIntroImgContainer } from "./styled.About";


function SectionIntroImg() {
    return (
        <SectionIntroImgContainer>
            <AboutImg alt="about image" src={"/images/about/about-main.png"} />
            <IntroImgTextBox>
                <IntroImgText>단순히 ‘꾸미는 것’을 넘어<br /><IntroImgHeadText>자연이 머무는 공간, 사람이 편안한 환경</IntroImgHeadText>을
    만드는 것이 저희의 목표입니다.</IntroImgText>
                <IntroImgText>고객님의 소중한 공간에<br />진심을 다해 자연을 담겠습니다.</IntroImgText>
            </IntroImgTextBox>
        </SectionIntroImgContainer>
    );
}
export default SectionIntroImg;
