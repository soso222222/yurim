import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./styled.MainContent";

function MainContent({ list }) {

    return (
        <Wrapper>
            <Routes>
                {list.map(({ url, el, depth }, idx) => {
                    return (
                        <>
                            <Route
                            key={idx}
                            path={`${url}/*`}
                            element={el}
                            />
                            {/* {depth?.map(({ url: durl, el: dEl }, dIdx) => (
                                <Route key={dIdx}
                                path={`${url}${durl}/*`}
                                element={dEl} />
                                ))} */}
                        </>
                    );
                })}
            </Routes>
        </Wrapper>
    );
}
export default MainContent;
