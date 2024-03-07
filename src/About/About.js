import NannyPic from "../assets/images/testimage.jpg";
import TopBanner from "../TopBanner/TopBanner";
import ProfilePic from "../assets/images/profile_picture.webp";

function About() {
  return (
    <>
    <div className="flex flex-col items-center relative w-screen h-auto mb-52">
      <TopBanner />
        <div className="max-h-[600px] overflow-y-hidden w-full">
          <img src={NannyPic} alt="Nanny" className="opacity-70 w-full"/>
        </div>
        
        <h2 className="absolute text-7xl text-center mt-96 font-roboto font-bold text-black">About Me:</h2>

        <div className="relative flex flex-col p-5 font-roboto w-full">
          <h2 className="text-3xl m-2 underline text-black">Testimonials:</h2>
          <div className="flex">

            <div className="flex flex-col items-center m-2 p-5 rounded-3xl bg-gradient-to-br from-white to-gray-200 hover:border border-gray-300 border-solid">
              <img src={ProfilePic} alt="Profile" className="animated-item w-1/2 m-5 tstm-photo rounded-3xl" />
              <h1 className="animated-item text-2xl m-2 text-black">"Adam Smith"</h1>
              <p className="animated-item text-xl italic">I love Rachael's Nannying! They are the best in the business. I would recommend them to anyone who needs help with their loved ones.</p>
            </div>

            <div className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 m-2 p-5 rounded-3xl hover:border border-gray-300 border-solid">
              <img src={ProfilePic} alt="Profile" className="animated-item w-1/2 m-5 tstm-photo rounded-3xl" />
              <h1 className="animated-item text-2xl m-2">"Adam Smith"</h1>
              <p className="animated-item text-xl italic">I love Rachael's Nannying! They are the best in the business. I would recommend them to anyone who needs help with their loved ones.</p>
            </div>

            <div className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 m-2 p-5 rounded-3xl hover:border border-gray-300 border-solid">
              <img src={ProfilePic} alt="Profile" className="animated-item w-1/2 m-5 tstm-photo rounded-3xl" />
              <h1 className="animated-item text-2xl m-2">"Adam Smith"</h1>
              <p className="animated-item text-xl italic">I love Rachael's Nannying! They are the best in the business. I would recommend them to anyone who needs help with their loved ones.</p>
            </div>

            <div className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 m-2 p-5 rounded-3xl hover:border border-gray-300 border-solid">
              <img src={ProfilePic} alt="Profile" className="animated-item w-1/2 m-5 tstm-photo rounded-3xl" />
              <h1 className="animated-item text-2xl m-2">"Adam Smith"</h1>
              <p className="animated-item text-xl italic">I love Rachael's Nannying! They are the best in the business. I would recommend them to anyone who needs help with their loved ones.</p>
            </div>

            <div className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 m-2 p-5 rounded-3xl hover:border border-gray-300 border-solid">
              <img src={ProfilePic} alt="Profile" className="animated-item w-1/2 m-5 tstm-photo rounded-3xl" />
              <h1 className="animated-item text-2xl m-2">"Adam Smith"</h1>
              <p className="animated-item text-xl italic">I love Rachael's Nannying! They are the best in the business. I would recommend them to anyone who needs help with their loved ones.</p>
            </div>
          </div>
        </div>

        <div className="relative animated-item p-5 font-roboto bg-gradient-to-br from-white to-gray-200 w-full">
          <h2 className="text-3xl m-2 underline text-black">About</h2>
          <p className="text-xl w-full m-auto">We are a team of dedicated and compassionate individuals who are here to help you and your loved ones. We understand that it can be difficult to trust someone else with the care of your family, but we are here to provide you with the peace of mind that you need. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs. We are here to help you and your loved ones with any and all of your needs.</p>
        </div>

        <div className="relative animated-item p-5 font-roboto w-full bg-gradient-to-br from-white to-white">
          <h2 className="text-3xl m-2 underline text-black">Location:</h2>
          <p className="text-xl italic">
          Cras aliquam, leo at tincidunt sodales, orci nulla gravida sapien, sollicitudin ultricies elit nisl ac nisi. Donec magna risus, luctus sit amet justo in, convallis tristique dolor. Nam vulputate lacus ante, in accumsan enim efficitur ac. Nullam faucibus diam in diam ullamcorper malesuada. Nullam ut convallis nisi. Aenean interdum est in nunc vestibulum eleifend et vel libero. Morbi tellus turpis, dapibus ac sagittis nec, gravida ut dolor. Morbi arcu ligula, efficitur nec ullamcorper pharetra, euismod vel ex.
          </p>
        </div>

        <div className="relative animated-item p-5 font-roboto w-full bg-gradient-to-br from-white to-gray-200">
          <h2 className="text-3xl m-2 underline text-black">Experience</h2>
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