import { Link, useLocation } from "react-router-dom";
import { FaHome, FaPhone, FaInfoCircle } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-inner border-t border-pink-100">
      <div className="flex justify-around py-3 text-pink-600">
        <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-pink-800 font-bold" : ""}`}>
          <FaHome size={20} />
          <span className="text-sm">Home</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center ${isActive("/contact") ? "text-pink-800 font-bold" : ""}`}>
          <FaPhone size={20} />
          <span className="text-sm">Contact</span>
        </Link>
        <Link to="/about" className={`flex flex-col items-center ${isActive("/about") ? "text-pink-800 font-bold" : ""}`}>
          <FaInfoCircle size={20} />
          <span className="text-sm">About</span>
        </Link>
      </div>
    </footer>
  );
}
