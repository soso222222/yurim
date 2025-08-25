
import { ItemBoxM, ItemM, Nav } from "./styled.TopMenu";
import { menuDeafult } from "./data.Menu";
import { Link } from "react-router-dom";
import { Button } from "../../../../../Common";
import { useSelector } from "react-redux";

function MobileMenu({
    isActive,
    onClick
}) {

    return (
        <ItemBoxM isActive={isActive}>
            <ItemM><Button icon={"cross"} onClick={onClick} size={"xxxxs"} /></ItemM>
            {menuDeafult.map(({url, title}, idx) => (
                <ItemM key={idx}><Link to={url}>{title}</Link></ItemM>
            ))}
        </ItemBoxM>
    );
}
export default MobileMenu;
