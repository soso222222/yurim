
import { Item, ItemBox, ItemBoxContainerM, Nav } from "./styled.TopMenu";
import { menuDeafult } from "./data.Menu";
import { Link } from "react-router-dom";
import { Button } from "../../../../../Common";
import { useSelector } from "react-redux";
// import MobileMenu from "./MobileMenu";

function TopMenu() {
    const {
        onToggleActive
    } = useSelector((state) => state.menu);

    return (
        <Nav>
            <ItemBox className={"ItemBox"}>
                {menuDeafult.map(({url, title}, idx) => (
                    <Item key={idx}><Link to={url}>{title}</Link></Item>
                ))}
            </ItemBox>
            <ItemBoxContainerM className={"ItemBoxContainerM"}>
                <Button icon={"menu"} onClick={onToggleActive} />
                {/* <ItemBoxM isActive={isToggle}>
                    <ItemM><Button icon={"cross"} onClick={setToggleMenu} size={"xxxxs"} /></ItemM>
                    {menuDeafult.map(({url, title}, idx) => (
                        <ItemM key={idx}><Link to={url}>{title}</Link></ItemM>
                    ))}
                </ItemBoxM> */}
            </ItemBoxContainerM>
            {/* <MobileMenu /> */}
            {/* <ItemBoxContainerM className={"ItemBoxContainerM"}>
                <Button icon={"menu"} onClick={setToggleMenu} />
                <ItemBoxM isActive={isToggle}>
                    <ItemM><Button icon={"cross"} onClick={setToggleMenu} size={"xxxxs"} /></ItemM>
                    {menuDeafult.map(({url, title}, idx) => (
                        <ItemM key={idx}><Link to={url}>{title}</Link></ItemM>
                    ))}
                </ItemBoxM>
            </ItemBoxContainerM> */}
        </Nav>
    );
}
export default TopMenu;
