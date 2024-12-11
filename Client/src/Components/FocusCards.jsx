import { FocusCards } from "../Components/utils/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Patents-India-filling-enforcement.jpg",
    },
    {
      title: "Valley of life",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Copyright-protection-enforcement-india.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Trademark-filing-enforcement-India.jpg",
    },
    {
      title: "Camping is for pros",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/civil-criminal-general-litigation-lawyer.jpg",
    },
    {
      title: "The road not taken",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/Insurance-lawyer.jpg",
    },
    {
      title: "The First Rule",
      src: "https://www.jusip.in/wp-content/uploads/2024/02/insolvency-bankruptcy.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
