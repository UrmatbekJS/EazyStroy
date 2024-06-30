import CatalogCardComponent from "..";

const ConstructionComponent = () => {
  const links = [
    {
      href: "/construction/additives",
      text: "Добавки для строительных растворов",
    },
    { href: "/construction/foams", text: "Монтажные пены" },
    { href: "/construction/materials", text: "Сыпучие материалы" },
    { href: "/construction/gypsum-board", text: "Гипсокартон" },
    { href: "/construction/cement", text: "Цемент" },
    { href: "/construction/dry-mixtures", text: "Сухие строительные смеси" },
    { href: "/construction/insulation", text: "Теплоизоляционные материалы" },
    {
      href: "/construction/wall-materials",
      text: "Стеновые и кладочные материалы",
    },
  ];

  return (
    <CatalogCardComponent
      title="Стройматериалы"
      imageSrc="/images/dataImg/constructionImg/Цемент.png"
      links={links}
    />
  );
};

export default ConstructionComponent;
