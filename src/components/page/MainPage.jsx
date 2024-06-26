import AppLayout from "../layout/AppLayout";
import GoodsComponent from "../structure/GoodsComponent";
// import ServicesComponent from "../structure/ServicesComponent";

const MainPage = () => {
  return (
    <div>
      <AppLayout>
        <GoodsComponent />
        {/* <ServicesComponent /> */}
      </AppLayout>
    </div>
  );
};

export default MainPage;
