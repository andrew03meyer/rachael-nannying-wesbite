import React, { useState, useEffect } from "react";
import NannyPic from "../assets/images/testimage.jpg";
import NannyPic2 from "../assets/images/testimage2.jpg";

const images = [NannyPic, NannyPic2];
const captions = ["Quality care for your loved ones", "We are here to help"];

function Homepage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Stops repeating code
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative w-screen h-screen">
      <img src={images[index]} alt="Nanny" className="z-0 opacity-80 w-full" />
      <div className="z-1 absolute m-10">
        <h2 className="text-2xl">{captions[index]}</h2>
      </div>
    </div>
  );
}

export default Homepage;