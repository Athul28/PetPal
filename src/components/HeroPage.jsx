import Navbar from "./Nav"
import img from '../assets/file.png'

export default function HeroPage(){
    return(
        <div className="bg-[#4ac2b9] min-h-screen flex flex-col justify-end">
            <Navbar />
            <div className="lg:flex justify-between mt-auto">
                <div className="flex flex-col justify-center sm:ml-20 max-sm:m-8 space-y-4">
                    <p className="text-[70px] max-sm:text-[40px]">Welcome to Our Virtual Pet App</p>
                    <p className="text-white text-2xl max-sm:text-xl">Discover the joy of caring for your own virtual pet! Customize your pet's appearance</p>
                    <button className="bg-[#f074bc] px-10 py-3 text-2xl rounded-3xl transition text-white w-fit hover:scale-110 max-sm:m-auto">Start your Journey</button>
                </div>
                <img src={img} alt="dog-img" className="lg:h-[450px] md:h-[350px] max-lg:m-auto"/>
            </div>
        </div>
    )
}