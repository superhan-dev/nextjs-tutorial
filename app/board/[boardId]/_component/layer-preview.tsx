"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/type/canvas";
import React, { memo } from "react";
import Rectangle from "./rectangle";
import Ellipse from "./ellipse";
import Text from "./text";
import Note from "./note";
import Path from "./path";
import { colorToCss } from "@/lib/utils";

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
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Path:
        return (
          <Path
            x={layer.x}
            y={layer.y}
            points={layer.points}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
            onPointerDown={(e: React.PointerEvent) => onLayerPointerDown(e, id)}
            stroke={selectionColor}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
