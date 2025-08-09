import SectionImage from "./SectionImage";
import SectionPortfolio from "./SectionPortfolio";
import SectionServices from "./SectionServices";
import { Wrapper } from "./styled.Home";

function Home() {

    return (
        <>
            <SectionImage />
            <SectionServices />
            <SectionPortfolio />
        </>
    );
}
export default Home;
