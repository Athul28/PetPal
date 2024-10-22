import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";

export default function Intro() {
  return (
    <div className="py-20">
      <p className="text-center text-5xl text-[#282c3c] max-sm:text-[40px]">
        Introducing Our Adorable Pets
      </p>
      <div className="md:flex flex-wrap justify-center md:space-x-10 pt-10">
        <div className="max-md:m-auto w-fit hover:scale-110 transition ">
          <img src={cat1} alt="cat-img" className="h-96 rounded-3xl cursor-pointer" />
          <p className="text-center text-gray-500 text-2xl mt-3">Meet</p>
        </div>
        <div className="max-md:m-auto w-fit hover:scale-110 transition cursor-pointer">
          <img src={cat2} alt="cat-img" className="h-96 rounded-3xl" />
          <p className="text-center text-gray-500 text-2xl mt-3">Discover</p>
        </div>
        <div className="max-md:m-auto w-fit hover:scale-110 transition cursor-pointer">
          <img src={cat3} alt="cat-img" className="h-96 rounded-3xl" />
          <p className="text-center text-gray-500 text-2xl mt-3">Explore</p>
        </div>
      </div>
    </div>
  );
}