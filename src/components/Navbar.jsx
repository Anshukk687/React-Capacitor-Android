import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import flowerIcon from "../assets/flower-icon.jpg";

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-6 shadow-md bg-white sticky top-0 z-50">
            <div className="flex items-center space-x-3">
                <img src={flowerIcon} alt="Flower Icon" className="w-10 h-10 rounded-full" />
                <span className="text-2xl font-bold text-pink-600">FlowerApp</span>
            </div>

            <nav className="flex space-x-6 items-center">
                <div className="relative">
                    <FaUserCircle
                        size={28}
                        className="text-pink-600 cursor-pointer hover:text-pink-800"
                        onClick={() => setShowDropdown(!showDropdown)}
                    />

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-36 bg-white border border-pink-200 rounded shadow z-50">
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
                                onClick={() => setShowDropdown(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
                                onClick={() => setShowDropdown(false)}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
