"use client";

import React from "react";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  return <div>{JSON.stringify(orgId, query)}</div>;
};

export default BoardList;
