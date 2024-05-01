// src/components/MainTitle.ts
import PptxGenJS from "pptxgenjs";

export function addMainTitle(slide: any, titleText: string): void {
  // Set the background color of the slide
  slide.background = { fill: "305597" }; // Blue background for the slide

  slide.addText(titleText, {
    x: 0.5, // X position
    y: 0.25, // Y position
    w: 6, // Width
    h: 1.5, // Height
    align: "center", // Alignment
    fill: "305597", // Blue background color
    color: "FFFFFF", // White font color
    fontSize: 48, // Font size
    bold: true,
    fontFace: "Arial", // Font type
  });
}
