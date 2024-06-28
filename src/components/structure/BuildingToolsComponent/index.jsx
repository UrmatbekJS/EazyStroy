import ProductComponent from "../ProductComponent";

const BuildingToolsComponent = () => {
  const links = [
    { href: "", text: "Измерительные инструменты" },
    { href: "", text: "Расходные материалы" },
    { href: "", text: "Сварочные" },
    { href: "", text: "Малярно-штукатурные инструменты" },
    { href: "", text: "Ручные инструменты" },
    { href: "", text: "Строительно-монтажные инструменты" },
  ];

  return (
    <ProductComponent
      title="Строительные инструменты"
      imageSrc="/images/BuildingToolsComponent.jpg"
      links={links}
    />
  );
};

export default BuildingToolsComponent;
