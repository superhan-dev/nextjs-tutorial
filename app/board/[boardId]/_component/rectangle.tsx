import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/type/canvas";
import React from "react";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPinterDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Rectangle = ({
  id,
  layer,
  onPinterDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, height, width, fill } = layer;

  return (
    <rect
      className="droup-shadow-md"
      onPointerDown={(e) => onPinterDown(e, id)}
      style={{ transform: `translate(${x}px,${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill={fill ? colorToCss(fill) : "#CCC"}
      stroke={selectionColor || "transparent"}
    ></rect>
  );
};

export default Rectangle;
