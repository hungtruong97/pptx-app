"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/generatePptx.ts
const pptxgenjs_1 = __importDefault(require("pptxgenjs"));
const MainTitle_1 = require("./components//MainTitle/MainTitle");
const Heading_1 = require("./components/Heading/Heading");
const themeConfig_1 = require("./config/themeConfig");
function createPresentation(themeName) {
    let pptx = new pptxgenjs_1.default();
    let slide1 = pptx.addSlide();
    let slide2 = pptx.addSlide();
    const theme = themeConfig_1.themes[themeName];
    //Slide 1
    // Add a main title to the slide
    (0, MainTitle_1.addMainTitle)(slide1, "Welcome to Our Presentation!", themeName);
    // Set the background color of the slide
    slide1.background = { fill: theme.primaryColor };
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
