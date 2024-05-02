// src/components/Heading.ts
import PptxGenJS from "pptxgenjs";
import { themes } from "../../config/themeConfig";
import { headingStyles } from "./styleConfig";

export function addHeading(
  slide: any,
  headingText: string,
  themeName: string
): void {
  // Get the theme based on the theme name
  const theme = themes[themeName];

  // Add heading text with specified options
  slide.addText(headingText, {
    x: headingStyles.x, //  X position
    y: headingStyles.y, //  Y position
    w: headingStyles.width, // Width
    h: headingStyles.height, // Height
    align: headingStyles.align, // Alignment
    fontSize: headingStyles.fontSize, // Font size
    bold: headingStyles.bold, // Bold text
    color: theme.primaryColor, // Font color (blue)
    fontFace: theme.font, // Font type
    fill: theme.secondaryColor, // Background for the text
  });
}
