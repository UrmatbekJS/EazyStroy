import AppLayout from "../layout/AppLayout";
import CatalogComponent from "../structure/CatalogComponent";
// import GoodsComponent from "../structure/GoodsComponent";
// import ServicesComponent from "../structure/ServicesComponent";

const MainPage = () => {
  return (
    <div>
      <AppLayout>
        <CatalogComponent />
        {/* <GoodsComponent /> */}
        {/* <ServicesComponent /> */}
      </AppLayout>
    </div>
  );
};

export default MainPage;
