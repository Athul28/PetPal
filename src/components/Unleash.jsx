import mobile from "../assets/mobile.jpg";
import u1 from "../assets/u1.jpg";

function Unleash() {
  return (
    <div className="bg-[#c86cbc]">
      <div className="py-10">
        <p className="text-white text-[80px] text-center">Unleash Your Pets</p>
        <p className="text-white text-xl text-center w-[50%] m-auto">
          Personalize your virtual pet's profile with unique features and
          accessories. Track its happiness, hunger levels, and more
        </p>
      </div>

      <div className="lg:flex py-10 md:space-x-1">
        <div className="lg:w-[50%] p-10 max-lg:m-auto">
          <img src={mobile} alt="cat-img" className="" />
        </div>
        <div className="flex flex-col justify-center space-y-10 max-lg:items-center">
          <div className="bg-white sm:flex items-center p-10 rounded-3xl space-x-10 w-[70%] hover:rotate-6 transition">
            <img src={u1} alt="img" className="h-24 max-sm:m-auto" />
            <div className="">
              <p className="text-4xl mb-3 max-sm:text-center">Connect</p>
              <p className="text-gray-500 text-xl">
                Chat with Your Virtual Companion
              </p>
            </div>
          </div>
          <div className="bg-white sm:flex items-center p-10 rounded-3xl space-x-10 w-[70%] hover:rotate-6 transition">
            <img src={u1} alt="img" className="h-24 max-sm:m-auto" />
            <div>
              <p className="text-4xl mb-3 max-sm:text-center">Explore</p>
              <p className="text-gray-500 text-xl">
                Unlock new experiences and milestones as you care for your pet
              </p>
            </div>
          </div>
          <div className="bg-white sm:flex items-center p-10 rounded-3xl space-x-10 w-[70%] hover:rotate-6 transition">
            <img src={u1} alt="img" className="h-24 max-sm:m-auto" />
            <div>
              <p className="text-4xl mb-3 max-sm:text-center max-sm:m-auto">Enjoy</p>
              <p className="text-gray-500 text-xl">
                Share your pet's journey with friends and family
              </p>
            </div>
          </div>
          <button className="bg-[#282c3c] text-white w-fit px-12 py-4 rounded-[50px] text-2xl hover:scale-110 transition">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unleash;
