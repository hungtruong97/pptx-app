"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/generatePptx.ts
const pptxgenjs_1 = __importDefault(require("pptxgenjs"));
const TitleSlide_1 = require("./layouts/titleSlide/TitleSlide");
const content_1 = require("./content/titleSlide/content");
const ordinaryWithHeadingAndText_1 = require("./layouts/contentSlide/ordinaryWithHeadingAndText");
const content_2 = require("./content/contentSlide/content");
function createPresentation(themeName) {
    const pptx = new pptxgenjs_1.default();
    const slide1 = (0, TitleSlide_1.createTitleSlide)(pptx, themeName, content_1.titleSlideContent);
    const slide2 = (0, ordinaryWithHeadingAndText_1.createOrdinaryWithHeadingAndTextSlide)(pptx, themeName, content_2.ordinaryWithHeadingAndTextSlideContent);
    // Save the presentation
    pptx
        .writeFile({ fileName: "SamplePresentationCanBeDeleted.pptx" })
        .then(() => {
        console.log("Presentation created successfully!");
    })
        .catch((error) => {
        console.error("Failed to create the presentation:", error);
    });
}
createPresentation("defaultTheme");
