"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHeading = void 0;
function addHeading(slide, headingText, style, theme) {
    // Add heading text with specified options
    slide.addText(headingText, {
        x: style.x || 1, // Default X position
        y: style.y || 1, // Default Y position
        w: style.width || 6, // Default width
        h: style.height || 0.5, // Default height
        align: style.align || "left", // Default alignment
        color: theme.primaryColor || "305597", // Default font color (blue)
        fontSize: style.fontSize || 32, // Default font size
        bold: style.bold || true, // Bold text
        fontFace: theme.font || "Arial", // Default font type
        fill: theme.secondaryColor || "00000000", // Transparent background for the text
    });
}
exports.addHeading = addHeading;
