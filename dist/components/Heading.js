"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHeading = void 0;
function addHeading(slide, headingText, options) {
    // Add heading text with specified options
    slide.addText(headingText, {
        x: options.x || 1, // Default X position
        y: options.y || 1, // Default Y position
        w: options.width || 6, // Default width
        h: options.height || 0.5, // Default height
        align: options.align || "left", // Default alignment
        color: options.fontColor || "305597", // Default font color (blue)
        fontSize: options.fontSize || 32, // Default font size
        bold: options.bold || true, // Bold text
        fontFace: options.fontFace || "Arial", // Default font type
        fill: options.fill || "00000000", // Transparent background for the text
    });
}
exports.addHeading = addHeading;
