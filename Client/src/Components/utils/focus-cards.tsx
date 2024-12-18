"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <NavLink to={`/${card.link}`} className="block h-full w-full">
        {" "}
        {/* Wrap content with NavLink */}
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end py-8 px-4">
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </NavLink>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  link:string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 px-3 bg-white md:grid-cols-2 xl:grid-cols-2 gap-10 mx-auto md:px-8 w-full pt-8 pb-8 lg:px-20">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
