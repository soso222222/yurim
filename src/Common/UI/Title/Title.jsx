import { Wrapper } from "./styled.Title";
import { TitleText, SubText } from "./styled.Title";

const Title = ({ 
    title = "",
    subTxt,
    gap = 12, 
    margin = "0",
    padding = "0",
    subColor = "dark",
    titleSize = 26,
    subSize = 18,
}) => {
    return (
        <Wrapper margin={margin} padding={padding}>
            {subTxt && <SubText gap={gap} subColor={subColor} subSize={subSize}>{subTxt}</SubText>}
            <TitleText titleSize={titleSize}>{title}</TitleText>
        </Wrapper>
    );
};

export default Title;