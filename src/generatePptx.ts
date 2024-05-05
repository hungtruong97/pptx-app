// src/generatePptx.ts
import PptxGenJS from "pptxgenjs";
import { addHeading } from "./components/Heading/Heading";
import { createTitleSlide } from "./layouts/TitleSlide/TitleSlide";
import { titleSlideContent } from "./content/TitleSlide/TitleSlide";

function createPresentation(themeName: string) {
  const pptx = new PptxGenJS();
  const slide1 = createTitleSlide(pptx, themeName, titleSlideContent);
  const slide2 = pptx.addSlide();

  //Slide 2
  // Add a heading to the slide
  addHeading(slide2, "First Heading", themeName);

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
