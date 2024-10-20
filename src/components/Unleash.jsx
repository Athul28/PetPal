import mobile from "../assets/mobile.jpg";

function Unleash() {
  return (
    <div className="bg-[#c86cbc]">
      <p>Unleash Your Pets</p>
      <p>
        Personalize your virtual pet's profile with unique features and
        accessories. Track its happiness, hunger levels, and more
      </p>
      <div className="flex">
        <div>
          <img src={mobile} alt="cat-img" className="md:w-[50%]" />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <img src="" alt="" />
            <p>Connect</p>
            <p>Chat with Your Virtual Companion</p>
          </div>
          <div></div>
          <div></div>
          <button className="bg-[#282c3c] text-white w-fit px-5 py-2 rounded-3xl">Start Exploring</button>
        </div>
      </div>
    </div>
  );
}

export default Unleash;
