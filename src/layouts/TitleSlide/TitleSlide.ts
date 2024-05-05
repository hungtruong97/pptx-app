// src/slides/createTitleSlide.ts
import { cmToInches } from "../../utils/convertUnit";
import { themes } from "../../config/themeConfig";
import { addTitle } from "../../components/Title/Title";
import { addSubtitle } from "../../components/Subtitle/Subtitle";

export function createTitleSlide(pptx: any, themeName: string, content: any) {
  const slide = pptx.addSlide();
  const theme = themes[themeName];

  // Add background for title slides
  slide.background = { fill: theme.primaryColor };

  // Specify the position and size of the main title on the title slide
  const mainTitleSizeAndPosition = {
    x: 1.73, //  from the left
    y: 6.26, //  from the top
    w: 16, //  wide
    h: 4.5, //  high
  };

  // Specify the position and size of the subtitle on the title slide
  const subTitleSizeAndPosition = {
    x: 1.73,
    y: 10.08,
    w: 22,
    h: 1.8,
  };

  // Specify the position and size of the main title on the title slide

  // Adding shape to the slide
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: cmToInches(0),
    y: cmToInches(0),
    w: cmToInches(0.45),
    h: cmToInches(14.29),
    fill: theme.secondaryColor,
  });

  // Adding main title specific to title slide
  if (content.title) {
    addTitle(
      slide,
      cmToInches(mainTitleSizeAndPosition.x),
      cmToInches(mainTitleSizeAndPosition.y),
      cmToInches(mainTitleSizeAndPosition.w),
      cmToInches(mainTitleSizeAndPosition.h),
      content.title,
      themeName
    );
  }

  //Adding subtitle specific to title slide
  if (content.subtitle) {
    addSubtitle(
      slide,
      cmToInches(subTitleSizeAndPosition.x),
      cmToInches(subTitleSizeAndPosition.y),
      cmToInches(subTitleSizeAndPosition.w),
      cmToInches(subTitleSizeAndPosition.h),
      content.subtitle,
      themeName
    );
  }

  return slide;
}
