import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import MainContent from "./Components/Pages/Main/MainContent/MainContent";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/*"} element={<MainContent />} />
      </Routes>
    </Layout>
  );
}

export default App;
