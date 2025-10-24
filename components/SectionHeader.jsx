import React from "react";

const SectionHeader = ({ num, title }) => {
  return (
    <div className="flex w-full items-center gap-4 pb-8">
      <h1 className="font-orbitron text-compliment-two text-[40px] whitespace-nowrap">
        [ {num} // <span className="text-gundam-blue font-bold">{title}</span> ]
      </h1>

      {/* Decorative line to fill remaining space */}
      <div className="aria-hidden='true' bg-gundam-blue relative h-1 flex-1">
        <div className="bg-gundam-yellow absolute top-[-2px] right-32 h-2 w-8"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
