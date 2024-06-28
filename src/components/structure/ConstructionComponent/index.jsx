import ProductComponent from "../ProductComponent";

const ConstructionComponent = () => {
  const links = [
    { href: "", text: "Добавки для строительных растворов" },
    { href: "", text: "Монтажные пены" },
    { href: "", text: "Сыпучие материалы" },
    { href: "", text: "Гипсокартон" },
    { href: "", text: "Цемент" },
    { href: "", text: "Сухие строительные смеси" },
    { href: "", text: "Теплоизоляционные материалы" },
    { href: "", text: "Стеновые и кладочные материалы" },
  ];

  return (
    <ProductComponent
      title="Стройматериалы"
      imageSrc="/images/dataImg/constructionImg/Цемент.png"
      links={links}
    />
  );
};

export default ConstructionComponent;
