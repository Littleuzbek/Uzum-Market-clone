"use client";

import { useState } from "react";
import "./globals.css";
import { FaAngleUp } from "react-icons/fa";

export default function Scroller() {
  const [scroller, setScroller] = useState(false);
  document.addEventListener("scroll", () =>
    setScroller(window.scrollY > 550 ? true : false)
  );
  return (
    <>
      {scroller && (
        <div className="upScroller">
          <FaAngleUp
            className="icon"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}
    </>
  );
}
