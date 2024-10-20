import Navbar from "./Nav"
import img from '../assets/file.png'

export default function HeroPage(){
    return(
        <div className="bg-[#4ac2b9]">
            <Navbar />
            <div className="md:flex justify-between">
                <div className="flex flex-col justify-center">
                <p className="text-5x">Welcome to Our Virtual Pet App</p>
                    <p className="text-white">Discover the joy of caring for your own virtual pet! Customize your pet's appearance</p>
                    <button className="bg-[#f074bc] px-5 py-2 text-2xl rounded-3xl text-white">Stary your Journey</button>
                </div>
                <img src={img} alt="dog-img" />
            </div>
        </div>
    )
}