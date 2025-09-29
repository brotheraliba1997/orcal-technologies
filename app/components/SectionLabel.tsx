import React from "react";

interface Label {
  label: string;
}

function SectionLabel({ label }: Label) {
  return (
    <div className="flex gap-2 items-center">
      <div className="primary-main h-[8px] w-[8px] "></div>

      <p className="md:text-lg text-sm tracking-widest uppercase ">  {label} </p>
    </div>
  );
}

export default SectionLabel;
