import Sidebar from "../Sidebar/Sidebar";
import NannyPic from "../assets/images/testimage.jpg";

function Homepage() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div>
        <img src={NannyPic} alt="Nanny" className="z-0 opacity-70 w-full"/>
        <div className="z-1 absolute m-10">
          <h2 className="  text-2xl justify-center">Homepage</h2>
          <h2 className="">homepage:</h2>
        </div>
      </div>
    </div>
  );
}  

export default Homepage;