import NannyPic from "../assets/images/testimage.jpg";

function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <img src={NannyPic} alt="Nanny" className="z-0 opacity-70 w-full"/>
      <div className="z-1 absolute m-10">
        <h2 className="underline text-4xl m-10 text-center">Rachael Wright Nannying</h2>

        <h2 className="text-3xl m-5">Location</h2>
        <p className="text-xl m-5 mb-10">
          I'm based in Tewkesbury, but am happy to travel to surrounding areas. Please contact me to discuss your requirements.
        </p>

        <h2 className="text-3xl m-5">About Me</h2>
        <p className="text-xl m-5 mb-10">
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
  );
}  

export default Homepage;