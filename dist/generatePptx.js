"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/generatePptx.ts
const pptxgenjs_1 = __importDefault(require("pptxgenjs"));
const Heading_1 = require("./components/Heading/Heading");
const TitleSlide_1 = require("./layouts/TitleSlide/TitleSlide");
const TitleSlide_2 = require("./content/TitleSlide/TitleSlide");
function createPresentation(themeName) {
    const pptx = new pptxgenjs_1.default();
    const slide1 = (0, TitleSlide_1.createTitleSlide)(pptx, themeName, TitleSlide_2.titleSlideContent);
    const slide2 = pptx.addSlide();
    //Slide 2
    // Add a heading to the slide
    (0, Heading_1.addHeading)(slide2, "First Heading", themeName);
    // Save the presentation
    pptx
        .writeFile({ fileName: "SamplePresentation.pptx" })
        .then(() => {
        console.log("Presentation created successfully!");
    })
        .catch((error) => {
        console.error("Failed to create the presentation:", error);
    });
}
createPresentation("defaultTheme");
