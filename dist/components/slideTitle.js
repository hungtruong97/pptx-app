"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSlideTitle = void 0;
function addSlideTitle(pptx, titleText) {
    let slide = pptx.addSlide();
    slide.addText(titleText, {
        x: 0.5, // X position on the slide
        y: 0.5, // Y position on the slide
        w: 8, // Width of the text box
        h: 2, // Height of the text box
        align: "center", // Text alignment
        fontSize: 44,
        color: "0088CC",
        bold: true,
    });
}
exports.addSlideTitle = addSlideTitle;
