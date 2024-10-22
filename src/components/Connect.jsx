import mobile1 from "../assets/mobile1.jpg";
import connect from "../assets/connect.jpg";

function Connect() {
  return (
    <div className="bg-[#c86cbc] md:flex sm:p-20 justify-between text-white ">
      <div className=" text-xl space-y-5 my-auto max-sm:p-10">
        <p className="text-white md:text-[90px] text-[50px] max-sm:text-[40px] max-sm:text-center">Connect</p>
        <br />
        <p className="text-white text-3xl w-[50%] max-sm:text-2xl">Unleash Your Creativity</p>
        <br />
        <div className="flex space-x-10 mt-10">
          <img src={connect} alt="pet-img" className="h-24 max-sm:my-auto" />
          <p className="text-2xl max-sm:text-xl">
            Personalize your pet's profile with custom accessories
          </p>
        </div>
        <br />
        <br />
        <p>Immerse yourself in the vibrant world of our virtual pet app</p>
        <p>Share the Journey</p>
        <button className="bg-[#282c3c] text-white w-fit px-12 py-4 rounded-[50px] text-2xl hover:scale-110 transition max-sm:text-xl max-sm:px-10">
          Join the Adventure
        </button>
      </div>

      <div className="md:w-[50%] sm:p-10 max-sm:pl-3 max-sm:pt-3">
        <img src={mobile1} alt="moblie-img" />
      </div>
    </div>
  );
}

export default Connect;
