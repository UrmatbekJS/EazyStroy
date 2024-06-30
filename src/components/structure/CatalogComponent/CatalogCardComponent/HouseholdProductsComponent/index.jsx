import CatalogCardComponent from "..";

const HouseholdProductsComponent = () => {
  const links = [
    { href: "/household-products/paints", text: "Краски" },
    { href: "/household-products/cleaners", text: "Очистители" },
    { href: "/household-products/gloves", text: "Рабочие перчатки" },
    { href: "/household-products/garden-tools", text: "Садовый инвентарь" },
    {
      href: "/household-products/carpentry-tools",
      text: "Столярные инструменты",
    },
    {
      href: "/household-products/construction-mixtures",
      text: "Строительные смеси",
    },
    { href: "/household-products/glues", text: "Клеи" },
    { href: "/household-products/foams", text: "Пены" },
    { href: "/household-products/solvents", text: "Растворители" },
  ];

  return (
    <CatalogCardComponent
      title="Хозяйственные товары"
      imageSrc="/images/HouseholdProductsComponent.png"
      links={links}
    />
  );
};

export default HouseholdProductsComponent;
