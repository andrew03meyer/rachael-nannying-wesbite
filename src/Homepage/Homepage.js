import NannyPic from "../assets/images/testimage.jpg";

function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <img src={NannyPic} alt="Nanny" className="z-0 opacity-70 w-full"/>
      <div className="z-1 absolute m-10">
        <h2 className="  text-2xl">Homepage</h2>
        <h2 className="">homepage:</h2>
      </div>
    </div>
  );
}  

export default Homepage;