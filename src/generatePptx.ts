// src/generatePptx.ts
import PptxGenJS from "pptxgenjs";
import { addHeading } from "./components/Heading/Heading";
import { createTitleSlide } from "./layouts/titleSlide/TitleSlide";
import { titleSlideContent } from "./content/titleSlide/content";
import { createOrdinaryWithHeadingAndTextSlide } from "./layouts/contentSlide/ordinaryWithHeadingAndText";
import { ordinaryWithHeadingAndTextSlideContent } from "./content/contentSlide/content";

function createPresentation(themeName: string) {
  const pptx = new PptxGenJS();
  const slide1 = createTitleSlide(pptx, themeName, titleSlideContent);
  const slide2 = createOrdinaryWithHeadingAndTextSlide(
    pptx,
    themeName,
    ordinaryWithHeadingAndTextSlideContent
  );

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
