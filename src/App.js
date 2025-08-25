import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import MainContent from "./Components/Pages/Main/MainContent/MainContent";
import { useSelector } from "react-redux";
import Overlays from "./Common/UI/Overlays";
import MobileMenu from "./Components/Pages/Main/Header/TopMenu/MobileMenu";


function App() {
    const {
        isActive,
        onToggleActive
    } = useSelector((state) => state.menu);

  return (
    <Layout>
      <Routes>
        <Route path={"/*"} element={<MainContent />} />
      </Routes>
      <Overlays isActive={isActive}>
        <MobileMenu isActive={isActive} onClick={onToggleActive} />
      </Overlays>
    </Layout>
  );
}

export default App;
