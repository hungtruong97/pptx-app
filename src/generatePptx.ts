// src/generatePptx.ts
import PptxGenJS from "pptxgenjs";
import { addMainTitle } from "./components//MainTitle/MainTitle";
import { addHeading } from "./components/Heading/Heading";
import { headingStyles } from "./components/Heading/styleConfig";
import { themes } from "./config/themeConfig";

function createPresentation(themeName: string) {
  let pptx = new PptxGenJS();
  let slide1 = pptx.addSlide();
  let slide2 = pptx.addSlide();
  const theme = themes[themeName];

  //Slide 1
  // Add a main title to the slide
  addMainTitle(slide1, "Welcome to Our Presentation!", themeName);
  // Set the background color of the slide
  slide1.background = { fill: theme.primaryColor };

  //Slide 2
  // Add a heading to the slide
  addHeading(slide2, "First Heading", themeName);

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
