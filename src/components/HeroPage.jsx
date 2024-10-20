import Navbar from "./Nav"
import img from '../assets/file.png'

export default function HeroPage(){
    return(
        <div className="bg-[#4ac2b9] min-h-screen flex flex-col justify-end">
            <Navbar />
            <div className="lg:flex justify-between mt-auto">
                <div className="flex flex-col justify-center ml-20 space-y-4">
                    <p className="text-[70px]">Welcome to Our Virtual Pet App</p>
                    <p className="text-white text-2xl">Discover the joy of caring for your own virtual pet! Customize your pet's appearance</p>
                    <button className="bg-[#f074bc] px-10 py-3 text-2xl rounded-3xl transition text-white w-fit hover:scale-110">Start your Journey</button>
                </div>
                <img src={img} alt="dog-img" className="lg:h-[450px] md:h-[350px] max-lg:m-auto"/>
            </div>
        </div>
    )
}