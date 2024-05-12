"use client";

import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (setActive) return;

    setActive({ organization: id });
  };

  console.log(imageUrl);

  return (
    <div className="aspect-square relative">
      <Image
        fill
        src={imageUrl}
        alt={name}
        onClick={onClick}
        className={cn(
          "round cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
    </div>
  );
};

export default Item;
