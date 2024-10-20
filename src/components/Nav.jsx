

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src="../images/logo.jpg" alt="PetPal Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">PetPal</span>
            </div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#pets" className="hover:underline">Pets</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
        </nav>
    );
}