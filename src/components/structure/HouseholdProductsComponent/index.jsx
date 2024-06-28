import ProductComponent from "../ProductComponent";

const HouseholdProductsComponent = () => {
  const links = [
    { href: "", text: "Краски" },
    { href: "", text: "Очистители" },
    { href: "", text: "Рабочие перчатки" },
    { href: "", text: "Садовый инвентарь" },
    { href: "", text: "Столярные инструменты" },
    { href: "", text: "Строительные смеси" },
    { href: "", text: "Клеи" },
    { href: "", text: "Пены" },
    { href: "", text: "Растворители" },
  ];

  return (
    <ProductComponent
      title="Хозяйственные товары"
      imageSrc="/images/HouseholdProductsComponent.png"
      links={links}
    />
  );
};

export default HouseholdProductsComponent;
