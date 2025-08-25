import Card from "../../../Common/UI/Card/Card";
import { aboutCategory } from "./data.About";
import { SectionCategoryContainer } from "./styled.About";


function SectionCategory() {

    return (
        <SectionCategoryContainer>
            <Card list={aboutCategory} size={"xxxxxl"} />
        </SectionCategoryContainer>
    );
}
export default SectionCategory;
