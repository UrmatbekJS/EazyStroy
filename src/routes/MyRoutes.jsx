import { Route, Routes } from "react-router";
import MainPage from "../components/page/MainPage";
import ConstructionPage from "../components/page/ConstructionPage";
import PlumbingPage from "../components/page/PlumbingPage";
import ElectronicsPage from "../components/page/ElectronicsPage";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/plumbing" element={<PlumbingPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
