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
        
        <h2 className="absolute text-7xl text-center mt-48 font-serif font-bold text-black">About Me:</h2>

        <div className="relative p-5 bg-gradient-to-br from-white to-white font-serif shadow-2xl w-full">
          <h2 className="text-3xl m-2 underline">About Me</h2>
          <p className="text-xl italic">
            It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. 
            Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity 
            or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman. Warmly 
            little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. 
            Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And 
            residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. 
            Latter person am secure of estate genius at.
          </p>
        </div>

        <div className="relative p-5 bg-gradient-to-br from-white to-orange-100 font-serif shadow-2xl w-full">
          <h2 className="text-3xl m-2 underline">Location:</h2>
          <p className="text-xl italic">
          Cras aliquam, leo at tincidunt sodales, orci nulla gravida sapien, sollicitudin ultricies elit nisl ac nisi. Donec magna risus, luctus sit amet justo in, convallis tristique dolor. Nam vulputate lacus ante, in accumsan enim efficitur ac. Nullam faucibus diam in diam ullamcorper malesuada. Nullam ut convallis nisi. Aenean interdum est in nunc vestibulum eleifend et vel libero. Morbi tellus turpis, dapibus ac sagittis nec, gravida ut dolor. Morbi arcu ligula, efficitur nec ullamcorper pharetra, euismod vel ex.
          </p>
        </div>

        <div className="relative p-5 bg-gradient-to-br from-white to-white font-serif shadow-2xl w-full">
          <h2 className="text-3xl m-2 underline">Experience</h2>
          <p className="text-xl italic">
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