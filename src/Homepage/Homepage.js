import React, { useState, useEffect } from "react";
import NannyPic from "../assets/images/testimage.jpg";
import NannyPic2 from "../assets/images/testimage2.jpg";
import GithubLogo from "../assets/images/github_logo.svg";
import InstagramLogo from "../assets/images/instagram_logo.webp";
import FacebookLogo from "../assets/images/facebook_logo.svg";

const images = [NannyPic, NannyPic2, GithubLogo, InstagramLogo, FacebookLogo];
const captions = ["Quality care for your loved ones", "We are here to help", "howdy", "message", "hi how are you?"];

function Homepage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Stops repeating code
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative w-screen h-auto max-h-screen overflow-y-hidden mb-40">
      <img id="image" src={images[index]} alt="Nanny" className="w-full h-auto" />
      <div className="absolute m-10">
        <h2 className="text-7xl text-orange-50 font-bold">{captions[index]}</h2>
      </div>
      <div className="absolute w-14 flex flex-col justify-center items-center right-0 float-end m-10 items bg-orange-50 rounded-2xl">
        <img src={GithubLogo} alt="Github" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
        <img src={InstagramLogo} alt="Instagram" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
        <img src={FacebookLogo} alt="Facebook" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
      </div>
    </div>
  );
}

export default Homepage;
