import { Link } from "react-router-dom";
import TopMenu from "./TopMenu/TopMenu";
import { Logo, Wrapper } from "./styled.Header";

function Header({ list }) {
    return (
        <Wrapper>
            <h1><Link to={"/home"}><Logo alt="Logo" src="/images/logo.svg" /></Link></h1>
            <TopMenu list={list} />
        </Wrapper>
    );
}

export default Header;
