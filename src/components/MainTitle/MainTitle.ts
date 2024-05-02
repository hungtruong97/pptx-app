// src/components/MainTitle.ts
import PptxGenJS from "pptxgenjs";
import { themes } from "../../config/themeConfig";
import { mainTitleStyles } from "./styleConfig";

export function addMainTitle(
  slide: any,
  titleText: string,
  themeName: string
): void {
  const theme = themes[themeName];

  slide.addText(titleText, {
    x: mainTitleStyles.x, // X position
    y: mainTitleStyles.y, // Y position
    w: mainTitleStyles.width, // Width
    h: mainTitleStyles.height, // Height
    align: mainTitleStyles.align, // Alignment
    fontSize: mainTitleStyles.fontSize, // Font size
    bold: mainTitleStyles.bold, // Bold text
    color: theme.primaryColor, // White font color
    fill: theme.secondaryColor, // Blue background color
    fontFace: theme.font, // Font type
  });
}
