import { Theme } from "./themeTypes";
export interface TextComponent {
  align: "left" | "center" | "right" | "justify";
  valign: "top" | "middle" | "bottom";
  fontSize: number;
  bold: boolean;
  fill?: string;
  fontFace?: string;
  fontColor?: any;
}

export interface ImageComponent {
  width: number;
  height: number;
  imageUrl: string;
  aspectRatio?: boolean;
  border?: {
    width: number;
    color: string;
  };
}

export interface ChartComponent {
  width: number;
  height: number;
  type: "bar" | "pie" | "line";
  data: any[]; // Proper data type definitions would be specific to your data
  colors?: string[];
  legendPosition?: "top" | "bottom" | "left" | "right";
}
