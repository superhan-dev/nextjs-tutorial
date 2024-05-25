import React from "react";
import { HANDLE_WIDTH } from "./selection-box";

interface ResizePointerProps {
  cursorStyle: string;
  transformStyle: string;
  onResizeHandlePointerDown: () => void;
}

const ResizePointer = ({
  cursorStyle,
  transformStyle,
  onResizeHandlePointerDown,
}: ResizePointerProps) => {
  return (
    <rect
      className="fill-white stroke-1 stroke-blue-500"
      x={0}
      y={0}
      style={{
        cursor: cursorStyle,
        width: `${HANDLE_WIDTH}px`,
        height: `${HANDLE_WIDTH}px`,
        transform: transformStyle,
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onResizeHandlePointerDown();
        // TODO: Add resize handler
      }}
    />
  );
};

export default ResizePointer;
