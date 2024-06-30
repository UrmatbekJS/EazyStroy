import CatalogCardComponent from "..";

const BuildingToolsComponent = () => {
  const links = [
    {
      href: "/building-tools/measuring-tools",
      text: "Измерительные инструменты",
    },
    { href: "/building-tools/consumables", text: "Расходные материалы" },
    { href: "/building-tools/welding", text: "Сварочные" },
    {
      href: "/building-tools/painting-tools",
      text: "Малярно-штукатурные инструменты",
    },
    { href: "/building-tools/hand-tools", text: "Ручные инструменты" },
    {
      href: "/building-tools/construction-tools",
      text: "Строительно-монтажные инструменты",
    },
  ];

  return (
    <CatalogCardComponent
      title="Строительные инструменты"
      imageSrc="/public/images/BuildingToolsComponent.png"
      links={links}
    />
  );
};

export default BuildingToolsComponent;
