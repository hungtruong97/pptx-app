import { Component } from "../../types/componentTypes";

export const headingStyles: Record<string, Component> = {
  default: {
    x: 0.5,
    y: 1.75,
    width: 6,
    height: 0.5,
    align: "left",
    fontColor: "305597", // Blue font color
    fontSize: 32,
    bold: true,
    fill: "FFFFFF", // Transparent background
  },
  secondary: {
    x: 0.5,
    y: 2.25,
    width: 6,
    height: 0.5,
    align: "left",
    fontColor: "000000", // Black font color for contrast
    fontSize: 24,
    bold: false,
    fill: "FFFFFF", // Transparent background
  },
};
