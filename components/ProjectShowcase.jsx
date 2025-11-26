import FrameOne from "./svgs/FrameOne";
import FrameTwo from "./svgs/FrameTwo";
import FrameThree from "./svgs/FrameThree";
import ImageFrame from "./svgs/ImageFrame";

const ProjectShowcase = ({ variant = "frameOne", reversed = false }) => {
  const FRAME_COMPONENTS = {
    frameOne: FrameOne,
    frameTwo: FrameTwo,
    frameThree: FrameThree,
  };

  const FRAME_CLASSES = {
    frameOne: "absolute top-[-1px] left-[-3px] h-[324px] w-[964px]",
    frameTwo: "absolute top-[-3px] left-[-3px] h-[326px] w-[964px]",
    frameThree: "absolute top-[-3px] left-[-3px] h-[326px] w-[964px]",
  };

  const Frame = FRAME_COMPONENTS[variant];

  const frameClasses = FRAME_CLASSES[variant];

  return (
    <div className="relative">
      {/* SVG frame floating on top */}
      <Frame className={`${frameClasses} text-gundam-blue`} strokeWidth={2} />

      {/* Frame contents */}
      <div
        className={`${reversed ? "flex-row-reverse" : "flex-row"} flex h-[320px] w-[960px]`}
      >
        {/* Project image */}
        <div className={`flex h-full w-[519px] justify-center align-middle`}>
          <ImageFrame className="text-gundam-blue w-[457px]" strokeWidth={2} />
        </div>
        {/* Project text */}
        <div className={`h-full w-[441px] flex-shrink-0`}>HELLO</div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
