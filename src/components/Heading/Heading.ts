// src/components/Heading.ts
import { themes } from "../../config/themeConfig";
import { headingStyles } from "./styleConfig";

export function addHeading(
  slide: any,
  headingText: string,
  themeName: string,
  styleName: string = "default"
): void {
  // Get the theme based on the theme name
  const theme = themes[themeName];

  // Get the specific style from headingStyles
  const style = headingStyles[styleName];

  // Add heading text with specified options
  slide.addText(headingText, {
    align: style.align, // Alignment
    fontSize: style.fontSize, // Font size
    bold: style.bold, // Bold text
    color: theme.primaryColor, // Font color (blue)
    fontFace: theme.font, // Font type
    fill: theme.secondaryColor, // Background for the text
  });
}
