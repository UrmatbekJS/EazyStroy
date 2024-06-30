import { Route, Routes } from "react-router";
import MainPage from "../components/page/MainPage";
// import ConstructionDetail from "../components/ConstructionDetail";
// import BuildingToolsDetail from "../components/BuildingToolsDetail";
// import HouseholdProductsDetail from "../components/HouseholdProductsDetail";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/construction/:id" element={<ConstructionDetail />} />
        <Route path="/building-tools/:id" element={<BuildingToolsDetail />} />
        <Route
          path="/household-products/:id"
          element={<HouseholdProductsDetail />}
        /> */}
      </Routes>
    </div>
  );
};

export default MyRoutes;
