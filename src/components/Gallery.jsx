import { useEffect, useRef } from "react";
import "./Gallery.css";

const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
  "img11.png",
  "img12.png",
  "img13.png",
  "img14.png",
  "img15.png",
  "img6.png",
];

export default function Gallery({ current, setCurrent, menu }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlideshow();
    return stopSlideshow; // cleanup
  }, []);

  const startSlideshow = () => {
    stopSlideshow();

    let speed = 1000;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + 1;

        if (next === 5) {
          clearInterval(intervalRef.current);
          speed = 320;
          intervalRef.current = setInterval(() => {
            setCurrent((p) => {
              if (p < images.length - 1) return p + 1;
              stopSlideshow();
              return p;
            });
          }, speed);
        }

        if (next >= images.length) {
          stopSlideshow();
          return prev;
        }
        return next;
      });
    }, speed);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      className={`relative md:w-screen 2xl:w-screen w-[400px] h-screen overflow-y-hidden flex flex-col justify-center items-center overflow-x-hidden mb-20 md:mb-0 2xl:mb-0 ${
        menu ? "blur-sm" : ""
      }`}
    >
      {images.map((item, index) => (
        <div
          key={index}
          className={`md:w-[400px] 2xl:w-[400px] w-[320px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl transition-all duration-500 ease-in-out flex justify-center items-center
    ${
      index === current ? "" : current % 2 === 0 ? "slide-left" : "slide-right"
    }`}
          style={{ zIndex: images.length - index }}
        >
          <img
            className="md:w-[400px] 2xl:w-[400px] w-[320px] h-auto"
            src={item}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
      {current > 3 && (
        <div
          className="z-[100] origin-center transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${0.01 + current * 0.1})`,
            opacity: 1,
          }}
        >
          <h2 className="font-extrabold 2xl:text-5xl md:text-5xl text-xl text-[#6a5bff]">
            FOR 100+ PROBLEMS
          </h2>
          <h2 className="font-extrabold 2xl:text-5xl md:text-5xl text-2xl text-[#6a5bff]">
            ONE SOLUTION
          </h2>
        </div>
      )}
    </div>
  );
}
