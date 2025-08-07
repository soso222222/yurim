
import { Item, ItemBox, Nav } from "./styled.TopMenu";
import { menuDeafult } from "./data.Menu";
import { Link } from "react-router-dom";

function TopMenu() {
    return (
        <Nav>
            <ItemBox>
                {menuDeafult.map(({url, title}, idx) => (
                    <Item key={idx}><Link to={url}>{title}</Link></Item>
                ))}
            </ItemBox>
        </Nav>
    );
}
export default TopMenu;
