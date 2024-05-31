import ServicesComponent from "./components/structure/ServicesComponent";
import AppLayout from "./components/layout/AppLayout";
import GoodsComponent from "./components/structure/GoodsComponent";

const App = () => {
  return (
    <>
      <AppLayout>
        <GoodsComponent />
        <ServicesComponent />
      </AppLayout>
    </>
  );
};

export default App;
