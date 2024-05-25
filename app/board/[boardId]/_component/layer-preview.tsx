"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/type/canvas";
import React, { memo } from "react";
import Rectangle from "./rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) return null;

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPinterDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        // console.warn("Unknown layer type");
        return null;
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
