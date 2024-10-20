import logo from "../assets/logo.jpg"

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between p-4 text-xl">
            <div className="flex items-center justify-center">
                <img src={logo} alt="PetPal Logo" className="h-10 w-10 mr-2" />
                <p className="text-3xl font-bold">PetPal</p>
            </div>
            <ul className="flex space-x-4 justify-center items-center max-sm:hidden">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#pets" className="hover:underline">Pets</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li className="px-4 py-1 bg-white rounded-3xl text-gray-500"><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
        </nav>
    );
}