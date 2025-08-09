import ScrollDown from "../../../../Common/UI/Button/ScrollDown";
import { ImageText, ImageTextStrong, MainImage, MainImageImageBottom, MainText, SectionMainImage, SectionMainImageContainer } from "./styled.Home";

function SectionImage() {
    return (
        <SectionMainImage>
            <SectionMainImageContainer>
                <MainText>
                    <ImageTextStrong>자연과 사람을 잇는<br />아름다운 공간의 시작</ImageTextStrong>
                    <ImageText>수년간의 경험과 기술을 바탕으로 자연이 머무는 공간을 만들어갑니다.</ImageText>
                </MainText>
                <MainImage alt="main image" src="/images/main/mainimage.jpg" />
            </SectionMainImageContainer>
                <MainImageImageBottom>
                    <ScrollDown />
                </MainImageImageBottom>
        </SectionMainImage>
    );
}
export default SectionImage;
