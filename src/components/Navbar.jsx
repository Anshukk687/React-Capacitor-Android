import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Preferences } from '@capacitor/preferences';
import flowerIcon from "../assets/flower-icon.jpg";

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const { value } = await Preferences.get({ key: 'user' });
            if (value) {
                const user = JSON.parse(value);
                setUserName(user.name);
            }
        };

        getUser();
    }, []);

    const handleLogout = async () => {
        await Preferences.remove({ key: 'user' });
        setUserName(null);
        setShowDropdown(false);
        window.location.href = '/login';
    };

    return (
        <header className="flex items-center justify-between px-6 py-6 shadow-md bg-white sticky top-0 z-50">
            <div className="flex items-center space-x-3">
                <img src={flowerIcon} alt="Flower Icon" className="w-10 h-10 rounded-full" />
                <span className="text-2xl font-bold text-pink-600">FlowerApp</span>
            </div>

            <nav className="flex items-center relative">
                <div className="relative">
                    <div
                        className="flex items-center cursor-pointer space-x-2"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <FaUserCircle size={28} className="text-pink-600 hover:text-pink-800" />
                        {userName && <span className="text-pink-600 font-semibold select-none">{userName}</span>}
                    </div>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-36 bg-white border border-pink-200 rounded shadow z-50">
                            {!userName ? (
                                <>
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
                                </>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 text-pink-600 hover:bg-pink-100"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
