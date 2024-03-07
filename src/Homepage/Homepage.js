import React, { useState, useEffect } from "react";
import NannyPic from "../assets/images/testimage.jpg";
import NannyPic2 from "../assets/images/testimage2.jpg";
import GithubLogo from "../assets/images/github_logo.svg";
import InstagramLogo from "../assets/images/instagram_logo.webp";
import FacebookLogo from "../assets/images/facebook_logo.svg";
import ProfilePic from "../assets/images/profile_picture.webp";

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
    <>
    <div className="flex relative flex-col font-roboto mb-40 w-screen text-roboto">
      <div className="flex flex-col justify-center relative w-full h-auto max-h-screen overflow-y-hidden">
        
        <img id="image" src={images[index]} alt="Nanny" className="w-full h-auto opacity-80" />
        <div className="absolute m-10">
          <h2 className="text-7xl text-black font-bold">{captions[index]}</h2>
        </div>
        <div className="absolute w-14 flex flex-col justify-center items-center right-0 float-end m-10 rounded-2xl bg-gradient-to-br from-white to-gray-300">
          <img src={GithubLogo} alt="Github" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
          <img src={InstagramLogo} alt="Instagram" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
          <img src={FacebookLogo} alt="Facebook" className="w-10 h-10 m-2 hover:w-12 hover:h-12 transition-all duration-500" />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-gray-100 to-gray-300 italic p-5">
      {/* <div class="bg-blue-500 sm:bg-red-500">This background color is blue on small screens and red on larger screens.</div> */}
        <div className="flex flex-col items-center mt-5 mb-5 w-full h-auto sm:flex-row">
          <img src={ProfilePic} alt="Profile" className="w-full m-0 sm:h-20vw" />
          <div className="flex flex-col">
            <h1 className="text-4xl p-5 w-full font-bold text-black ">Profile:</h1>
            <p className="text-xl w-full m-0 p-5">We offer a number of different services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus eros, elementum et rutrum eget, porta sit amet ante. Duis scelerisque ante sed ex eleifend sollicitudin. Nunc dictum, enim vitae porta convallis, sapien mi convallis sapien, et sollicitudin orci sapien quis ex. Quisque dapibus magna tincidunt purus tempus, vestibulum vehicula sapien aliquet. Morbi sagittis purus auctor finibus volutpat. Praesent non scelerisque ligula. In posuere sollicitudin efficitur. Cras eget eros ultrices, volutpat diam a, volutpat ligula. Vivamus tincidunt accumsan lectus, vel pharetra urna. Ut pellentesque blandit metus sed porttitor. Aenean sit amet consectetur dolor. Sed rhoncus libero sit amet dui congue iaculis. Suspendisse mattis leo nisl, vitae lobortis magna lacinia eget.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full bg-gradient-to-br from-white to-gray-200 italic p-5 h-auto sm:flex-row">
        <div className="flex flex-col items-center w-1/2 h-auto m-5">
          <h1 className="text-4xl w-full font-bold text-black pb-5">About</h1>
          <p className="text-xl w-full m-auto">We are a team of dedicated and compassionate individuals who are here to help you and your loved ones. We understand that it can be difficult to trust someone else with the care of your family, but we are here to provide you with the peace of mind that you need. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs.</p>
          <a href="/about" className="text-xl bg-gradient-to-r from-gray-100 to-gray-300 text-center rounded-lg bold w-5/6 hover:w-full hover:text-2xl transition-all duration-700">Learn more</a>
        </div>
        <img src={NannyPic} alt="nanny" className="h-auto w-1/2 m-5"></img>
      </div>
    </div>
    </>
  );
}

export default Homepage;
