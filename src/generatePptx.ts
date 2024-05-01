// src/generatePptx.ts
import PptxGenJS from "pptxgenjs";
import { addMainTitle } from "./components/MainTitle";
import { addHeading } from "./components/Heading";
import { headingStyles } from "./config/styleConfig";

function createPresentation() {
  let pptx = new PptxGenJS();
  let slide1 = pptx.addSlide();
  let slide2 = pptx.addSlide();

  // Add a main title to the slide
  addMainTitle(slide1, "Welcome to Our Presentation!");
  addHeading(slide2, "First Heading", headingStyles.default);

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

createPresentation();
