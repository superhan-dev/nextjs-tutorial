"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/type/canvas";
import React, { memo } from "react";
import ResizePointer from "./resize-pointer";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (coorner: Side, initialBouds: XYWH) => void;
}

export const HANDLE_WIDTH = 8;

const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isSouwingHandles = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    );

    const bounds = useSelectionBounds();

    if (!bounds) return null;

    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
          style={{
            transform: `translate(${bounds.x}px, ${bounds.y}px )`,
          }}
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
        />
        {isSouwingHandles && (
          <>
            {/* NOTE: callback 함수를 SelectionBox단에서 parameter들을 넘겨준다.
                      side와 bounds는 SelectionBox의 기준에서 값이 측정되어야 하므로 
                      ResizePointer는 함수를 호춣하는 트리거 역할만 하면 되기 때문이다.
            */}
            <ResizePointer
              cursorStyle={"nwse-resize"}
              transformStyle={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Top + Side.Left, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"ns-resize"}
              transformStyle={`translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Top, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"nesw-resize"}
              transformStyle={`translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Top + Side.Right, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"ew-resize"}
              transformStyle={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Left, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"nesw-resize"}
              transformStyle={`translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"ns-resize"}
              transformStyle={`translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Bottom, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"nwse-resize"}
              transformStyle={`translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds)
              }
            />
            <ResizePointer
              cursorStyle={"ew-resize"}
              transformStyle={`translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`}
              onResizeHandlePointerDown={() =>
                onResizeHandlePointerDown(Side.Right, bounds)
              }
            />
          </>
        )}
      </>
    );
  }
);

export default SelectionBox;

SelectionBox.displayName = "SelectionBox";
