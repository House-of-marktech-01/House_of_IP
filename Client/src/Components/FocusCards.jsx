import { FocusCards } from "../Components/utils/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "CopyRight",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Patents-India-filling-enforcement.jpg",
      link: "copyright",
    },
    {
      title: "Design",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Copyright-protection-enforcement-india.jpg",
      link: "design",
    },
    {
      title: "Patent",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Trademark-filing-enforcement-India.jpg",
      link: "patent",
    },
    {
      title: "Trademark",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/civil-criminal-general-litigation-lawyer.jpg",
      link: "trademark",
    },
  ];

  return <FocusCards cards={cards} />;
}
