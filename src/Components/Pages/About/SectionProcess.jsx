import { Title } from "../../../Common";
import { ProcessBox, ProcessItem, ProcessItemHeadText, ProcessItemSvg, ProcessItemSvgBox, ProcessItemText, ProcessItemTitleText, SectionProcessContainer } from "./styled.About";
import { process } from "./data.About";
import Icon from "../../../Common/UI/Icon/Icon";


function SectionProcess() {
    return (
        <SectionProcessContainer>
            <Title title={"작업 과정"} subTxt={"process"} align={"center"} titleSize={42} subSize={24} margin={"0 0 40rem 0"} />
            <ProcessBox>
                {process.map(({ no, title, text }, idx) => {
                return (
                    <>
                        <ProcessItem
                            key={idx}
                            >
                                <ProcessItemHeadText>{`STEP ${no}`}</ProcessItemHeadText>
                                <ProcessItemSvgBox><ProcessItemSvg alt="process img" src={`/images/about/process${no}.svg`} /></ProcessItemSvgBox>
                                <ProcessItemTitleText>{title}</ProcessItemTitleText>
                                <ProcessItemText>{text}</ProcessItemText>
                            </ProcessItem>
                            {idx + 1 !== process.length && <ProcessItem className="angleR" key={idx}><Icon type={"angleRight"} size={"xxxxs"} /></ProcessItem>}
                    </>
                );
                })}
            </ProcessBox>
        </SectionProcessContainer>
    );
}
export default SectionProcess;
