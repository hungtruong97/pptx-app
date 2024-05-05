// src/slides/createTitleSlide.ts
import { cmToInches } from "../../utils/convertUnit";
import { themes } from "../../config/themeConfig";
import { addMainTitle } from "../../components/MainTitle/MainTitle";

export function createTitleSlide(pptx: any, themeName: string, content: any) {
  const slide = pptx.addSlide();
  const theme = themes[themeName];

  // Add background for title slides
  slide.background = { fill: theme.primaryColor };

  // Specify the position and size of the main title on the title slide
  const x = 0; //  from the left
  const y = 6.26; //  from the top
  const w = 17.39; //  wide
  const h = 4.53; //  high

  console.log(pptx.layoutWidth);

  // Adding shape to the slide
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: cmToInches(0),
    y: cmToInches(0),
    w: cmToInches(0.45),
    h: cmToInches(14.29),
    fill: theme.secondaryColor,
  });

  // Adding main title specific to title slide
  content.title?.addMainTitle(
    slide,
    cmToInches(x),
    cmToInches(y),
    cmToInches(w),
    cmToInches(h),
    content.title,
    themeName
  );
  return slide;
}
