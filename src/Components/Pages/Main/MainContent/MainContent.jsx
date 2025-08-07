import { Route, Routes } from "react-router-dom";
import { ImageText, ImageTextStrong, MainImage, MainText, SectionMainImage, SectionMainServices, ServicesBox, ServicesImage, ServicesItem, ServicesTop, Wrapper } from "./styled.MainContent";
import { Button, Title } from "../../../../Common";

function MainContent({ list }) {

    return (
        <Wrapper>
            <SectionMainImage>
                <MainText>
                    <ImageTextStrong>자연과 사람을 잇는<br />아름다운 공간의 시작</ImageTextStrong>
                    <ImageText>수년간의 경험과 기술을 바탕으로 자연이 머무는 공간을 만들어갑니다.</ImageText>
                </MainText>
                <MainImage alt="main image" src="/images/main/mainimage.jpg" />
            </SectionMainImage>
            <SectionMainServices>
                <ServicesTop>
                    <Title title={"제공 서비스"} subTxt={"services"} subColor={"light"} titleSize={42} subSize={24} />
                    <Button size={"lg"}>More View</Button>
                </ServicesTop>
                <ServicesBox>
                    <ServicesItem>
                        <ServicesImage alt="main image" src="/images/main/gardening.jpg" />
                        <Title title={"정원관리"} subTxt={"Gardening"} />
                    </ServicesItem>
                    <ServicesItem>
                        <ServicesImage alt="main image" src="/images/main/pruning.jpg" />
                        <Title title={"전정"} subTxt={"Pruning"} />
                    </ServicesItem>
                    <ServicesItem>
                        <ServicesImage alt="main image" src="/images/main/stone.jpg" />
                        <Title title={"돌쌓기"} subTxt={"Stone masonry"} />
                    </ServicesItem>
                    <ServicesItem>
                        <ServicesImage alt="main image" src="/images/main/garden-construction.jpg" />
                        <Title title={"시공"} subTxt={"Garden construction"} />
                    </ServicesItem>
                </ServicesBox>
            </SectionMainServices>
            <Routes>
                {list.map(({ url, el, depth }, idx) => {
                    return (
                        <>
                            <Route
                            key={idx}
                            path={`${url}/*`}
                            element={el}
                            />
                            {/* {depth?.map(({ url: durl, el: dEl }, dIdx) => (
                                <Route key={dIdx}
                                path={`${url}${durl}/*`}
                                element={dEl} />
                                ))} */}
                        </>
                    );
                })}
            </Routes>
        </Wrapper>
    );
}
export default MainContent;
