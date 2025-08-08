import { IconBox, IconBrandSketch, IconRocket } from "@tabler/icons-react";
import React from "react";

const SubHeader = () => {
  return (
    <div className="container mx-auto px-4 h-[48] flex items-center justify-between border-b text-white/70">
      <div>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-1">
            <IconRocket size={18} /> Overview
          </li>
          <li className="flex items-center gap-1">
            <IconBox size={18} /> Components
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-1">
            <IconBrandSketch size={18} /> Examples
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
