import { SectionMainServices, ServicesBox, ServicesImage, ServicesItem, ServicesTop } from "./styled.Home";
import { Button, Title } from "../../../../Common";
import { services } from "./data.Services";

function SectionServices() {

    return (
        <SectionMainServices>
            <ServicesTop>
                <Title title={"제공 서비스"} subTxt={"services"} subColor={"light"} titleSize={42} subSize={24} />
                {/* <Button size={"lg"}>More View</Button> */}
            </ServicesTop>
            <ServicesBox>
                {services?.map(({ kor, eng, src}, idx) => (
                    <ServicesItem key={idx}>
                        <ServicesImage alt={eng} src={src} />
                        <Title title={kor} subTxt={eng} margin={"30rem 0 0 0"} />
                    </ServicesItem>
                ))}
            </ServicesBox>
        </SectionMainServices>
    );
}
export default SectionServices;
