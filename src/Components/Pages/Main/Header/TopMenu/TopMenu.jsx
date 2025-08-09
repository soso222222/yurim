
import { Item, ItemBox, ItemBoxContainerM, Nav } from "./styled.TopMenu";
import { menuDeafult } from "./data.Menu";
import { Link } from "react-router-dom";
import Icon from "../../../../../Common/UI/Icon/Icon";

function TopMenu() {
    return (
        <Nav>
            <ItemBox className={"ItemBox"}>
                {menuDeafult.map(({url, title}, idx) => (
                    <Item key={idx}><Link to={url}>{title}</Link></Item>
                ))}
            </ItemBox>
            <ItemBoxContainerM className={"ItemBoxM"}>
                <Icon type={"menu"} size={40} />
            </ItemBoxContainerM>
        </Nav>
    );
}
export default TopMenu;
