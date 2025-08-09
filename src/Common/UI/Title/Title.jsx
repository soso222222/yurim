import { Wrapper } from "./styled.Title";
import { TitleText, SubText } from "./styled.Title";

const Title = ({ 
    title = "",
    subTxt,
    align = "start", 
    gap = 12, 
    margin = "0",
    padding = "0",
    subColor = "dark",
    titleSize = 26,
    subSize = 18,
}) => {
    return (
        <Wrapper className={"titlebox"} margin={margin} padding={padding} align={align}>
            {subTxt && <SubText className={"subtxt"} gap={gap} subColor={subColor} subSize={subSize}>{subTxt}</SubText>}
            <TitleText className={"titletxt"} titleSize={titleSize}>{title}</TitleText>
        </Wrapper>
    );
};

export default Title;