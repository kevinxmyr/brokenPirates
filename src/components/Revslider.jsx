import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "rev-slider/image_1.jpg",
    caption: "Slide 1",
  },
  {
    url: "rev-slider/image_2.jpg",
    caption: "Slide 2",
  },
];

const Revslider = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div>
              <img
                id="rev"
                alt="revsliders"
                src={fadeImage.url}
                width={width}
                height={height}
                onLoad={(e) => {
                  setHeight(e.currentTarget.naturalHeight + "px");
                  setWidth(e.currentTarget.naturalWidth + "px");
                }}
              ></img>
            </div>
            <div id="banner-text-wrap">
              <div id="banner-text-container">
                <p>
                  <strong>
                    tudela <br />
                    alliance church
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Revslider;
