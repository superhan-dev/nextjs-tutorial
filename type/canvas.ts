import { JsonObject } from "@liveblocks/client";

export type Color = {
  r: number;
  g: number;
  b: number;
};

export interface Point {
  x: number;
  y: number;
}

export interface WidthHeight {
  width: number;
  height: number;
}

export interface Camera extends Point {}

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export type XYWH = Point & WidthHeight;

export interface ShapeLayer extends Point, WidthHeight {
  fill: Color;
  value?: string;
}

export interface RectangleLayer extends JsonObject, ShapeLayer {
  type: LayerType.Rectangle;
}

export interface EllipseLayer extends JsonObject, ShapeLayer {
  type: LayerType.Ellipse;
}

export interface PathLayer extends JsonObject, ShapeLayer {
  type: LayerType.Path;
  points: number[][];
}

export interface TextLayer extends JsonObject, ShapeLayer {
  type: LayerType.Text;
}

export interface NoteLayer extends JsonObject, ShapeLayer {
  type: LayerType.Note;
}

export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasMode.Translating; current: Point }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
    }
  | { mode: CanvasMode.Pencil }
  | { mode: CanvasMode.Pressing; origin: Point }
  | { mode: CanvasMode.Resizing; initialBounds: XYWH; corner: Side };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | TextLayer
  | NoteLayer;
