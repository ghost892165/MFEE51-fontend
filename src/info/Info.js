import React, { useState, useEffect, useRef } from "react";
import "./Info.css";

import InfoPage1 from "./page1/InfoPage1";
import InfoPage2 from "./page2/InfoPage2";
import InfoPage3 from "./page3/InfoPage3";

function Info() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const pageHeight = container.clientHeight;
      const currentPageIndex = Math.round(scrollPosition / pageHeight) + 1;
      setCurrentPage(currentPageIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (pageNumber) => {
    const container = containerRef.current;
    container.scrollTo({
      top: (pageNumber - 1) * container.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="info-wrapper">
      <div className="dots-nav">
        {[1, 2, 3].map((pageNum) => (
          <span
            key={pageNum}
            className={`dot ${currentPage === pageNum ? "active" : ""}`}
            onClick={() => scrollToPage(pageNum)}
          ></span>
        ))}
      </div>
      <div className="container" ref={containerRef}>
        <InfoPage1 />
        <InfoPage2 />
        <InfoPage3 />
      </div>
    </div>
  );
}

export default Info;
