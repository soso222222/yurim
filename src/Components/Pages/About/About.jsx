import SectionCategory from "./SectionCategory";
import SectionIntro from "./SectionIntro";
import SectionIntroImg from "./SectionIntroImg";
import SectionProcess from "./SectionProcess";
import { Wrapper } from "./styled.About";

function About() {
    return (
        <Wrapper>
            <SectionIntro />
            <SectionCategory />
            <SectionIntroImg />
            <SectionProcess />
        </Wrapper>
    );
}

export default About;
