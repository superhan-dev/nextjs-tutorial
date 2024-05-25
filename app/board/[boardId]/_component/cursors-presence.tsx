"use client";

import React, { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

export default CursorsPresence;

CursorsPresence.displayName = "CursorsPresence";
