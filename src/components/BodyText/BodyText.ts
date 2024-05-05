import { themes } from "../../config/themeConfig";
import { bodyTextStyles } from "./styleConfig";

export function addBodyText(
  slide: any,
  x: number,
  y: number,
  w: number,
  h: number,
  titleText: string,
  themeName: string,
  styleName: string = "default"
): void {
  //Get the theme based on the theme name
  const theme = themes[themeName];

  // Get the specific style from mainTitleStyles
  const style = bodyTextStyles[styleName];

  slide.addText(titleText, {
    x,
    y,
    w,
    h, // Position and size
    align: style.align, // Alignment
    valign: style.valign, // Vertical alignment
    fontSize: style.fontSize, // Font size
    bold: style.bold, // Bold text
    color: theme.textColor, // White font color
    fontFace: theme.font, // Font type
  });
}
