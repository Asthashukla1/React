import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div
      style={{ width }}
      className="font-bold text-2xl text-white select-none"
    >
      MEGA BLOG
    </div>
  );
}

export default Logo;
