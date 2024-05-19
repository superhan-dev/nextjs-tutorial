"use client";

import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/star.svg" alt="Empty" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">No result found!</h2>
      <p className="text-muted-foreground text-sm my-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
