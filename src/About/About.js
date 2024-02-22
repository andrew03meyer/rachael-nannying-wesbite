import Sidebar from "../Sidebar/Sidebar";
import NannyPic from "../assets/images/testimage.jpg";

function About() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <img src={NannyPic} alt="Nanny" className="absolute z-0 opacity-70"/>
        <div className="z-1 absolute m-10">
          <h2 className="  text-2xl justify-center">About</h2>
          <p className="">about me:</p>
        </div>
      </div>
    </div>
  );
}
export default About;