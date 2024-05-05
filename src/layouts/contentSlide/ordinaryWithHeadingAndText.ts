// src/slides/createTitleSlide.ts
import { cmToInches } from "../../utils/convertUnit";
import { themes } from "../../config/themeConfig";
import { addHeading } from "../../components/Heading/Heading";
import { addBodyText } from "../../components/BodyText/BodyText";

export function createOrdinaryWithHeadingAndTextSlide(
  pptx: any,
  themeName: string,
  content: any
) {
  const slide = pptx.addSlide();
  const theme = themes[themeName];

  // Add background for title slides
  slide.background = { fill: theme.secondaryColor };

  // Specify the position and size of the main title on the title slide
  const headingSizeAndPosition = {
    x: 0.7, //  from the left
    y: 0, //  from the top
    w: 23, //  wide
    h: 2, //  high
  };

  // Specify the position and size of the main title on the title slide
  const bodyTextSizeAndPosition = {
    x: 0.7, //  from the left
    y: 2, //  from the top
    w: 23, //  wide
    h: 11, //  high
  };

  // Adding shape to the slide
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: cmToInches(0),
    y: cmToInches(0),
    w: cmToInches(0.45),
    h: cmToInches(14.29),
    fill: theme.primaryColor,
  });

  // Adding main title specific to title slide
  if (content.heading) {
    addHeading(
      slide,
      cmToInches(headingSizeAndPosition.x),
      cmToInches(headingSizeAndPosition.y),
      cmToInches(headingSizeAndPosition.w),
      cmToInches(headingSizeAndPosition.h),
      content.heading,
      themeName
    );
  }

  //Adding subtitle specific to title slide
  if (content.text) {
    addBodyText(
      slide,
      cmToInches(bodyTextSizeAndPosition.x),
      cmToInches(bodyTextSizeAndPosition.y),
      cmToInches(bodyTextSizeAndPosition.w),
      cmToInches(bodyTextSizeAndPosition.h),
      content.text,
      themeName
    );
  }

  return slide;
}
