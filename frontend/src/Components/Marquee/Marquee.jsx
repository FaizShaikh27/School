import React from "react";

const Marquee = ({ notices }) => {
  return (
    <div className="sticky bottom-0 w-full bg-black text-white z-50">
      <div className="overflow-hidden whitespace-nowrap py-2">
        <div className="animate-scroll inline-block">
          {notices.map((notice, index) => (
            <span
              key={index}
              className="mx-8 text-sm font-medium"
            >
              {notice}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
