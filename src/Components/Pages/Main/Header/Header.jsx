import TopMenu from "./TopMenu/TopMenu";
import { Logo, Wrapper } from "./styled.Header";

function Header({ list }) {
    return (
        <Wrapper>
            <h1><Logo alt="Logo" src="/images/logo.svg" /></h1>
            <TopMenu list={list} />
        </Wrapper>
    );
}

export default Header;
