import NannyPic from "../assets/images/testimage.jpg";
import TopBanner from "../TopBanner/TopBanner";

function About() {
  return (
    <>
    <div className="flex flex-col items-center relative w-screen h-auto mb-52">
      <TopBanner />
        <div className="max-h-[600px] overflow-y-hidden rounded-3xl shadow-2xl">
          <img src={NannyPic} alt="Nanny" className="opacity-70 w-full mt-5 mb-5 rounded-3xl"/>
        </div>
        
        <h2 className="absolute text-7xl text-center mt-48 font-serif font-bold text-orange-300">About Me:</h2>

        <div className="relative p-5 bg-gradient-to-r from-orange-100 to-orange-200 font-serif m-5 mr-10 shadow-2xl rounded-3xl w-5/6">
          <h2 className="text-3xl">Location:</h2>
          <p className="text-xl">
            I'm based in Tewkesbury, but am happy to travel to surrounding areas. Please contact me to discuss your requirements.
          </p>
        </div>

        <div className="relative p-5 bg-gradient-to-r from-orange-100 to-orange-200 font-serif m-5 mr-10 shadow-2xl rounded-3xl w-5/6">
          <h2 className="text-3xl">About Me</h2>
          <p className="text-xl">
            It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. 
            Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity 
            or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman. Warmly 
            little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. 
            Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And 
            residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. 
            Latter person am secure of estate genius at.
          </p>
        </div>
    </div>
    </>
  );
}
export default About;