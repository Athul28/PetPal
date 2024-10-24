import d1 from "../assets/d1.jpg"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"


function Discover() {
  return (
    <div className="bg-[#c86cbc] max-sm:p-4 p-10">
      <p className="text-white text-[70px] text-center max-sm:text-[40px]">
        Discover the Joy of Pet
      </p>
      <p className="text-white text-xl text-center sm:w-[50%] m-auto">
        Create a Bond with Your Unique Virtual Pet
      </p>
      <div className="md:flex justify-center md:space-x-10 p-10 max-md:space-y-5 items-center">
        <div className="hover:scale-110 transition">
            <img src={d1} alt="img" className="h-64 m-auto"/>
        </div>
        <div className="hover:scale-110 transition">
            <img src={d2} alt="img" className="h-64 m-auto"/>
        </div>
        <div className="hover:scale-110 transition">
            <img src={d3} alt="img" className="h-64 m-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Discover;
