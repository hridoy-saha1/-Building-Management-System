import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router'; 
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../Auth/AuthContext';
import photo from '../assets/Bannerphotos/logo.jpg';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed. Please try again.');
    }
  };

  // ✅ Hide navbar on any dashboard route
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  // ✅ Common routes (different for logged in/out)
  const loggedOutRoutes = [
    { path: "/", label: "Home" },
    { path: "/apartments", label: "Apartments" },
    { path: "/login", label: "Login/Register" }
  ];

  const loggedInRoutes = [
    { path: "/", label: "Home" },
    { path: "/apartments", label: "Apartments" },
    { path: "/announcements", label: "Announcements" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <>
     <nav className="bg-white text-black shadow-md sticky top-0 z-50 w-full">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    {/* Logo & Brand */}
    <div className="flex items-center gap-2 text-3xl font-bold tracking-wide">
      <img src={photo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
      <span>OneBuilding</span>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-8 font-medium items-center">
      {!user ? (
        loggedOutRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="text-black hover:text-yellow-500 transition"
          >
            {route.label}
          </Link>
        ))
      ) : (
        <>
          {loggedInRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="text-black hover:text-yellow-500 transition"
            >
              {route.label}
            </Link>
          ))}
          {/* User Dropdown */}
          <div className="relative group">
            <img
              src={user.photoURL || "https://i.ibb.co/2kR9YQZ/default.png"}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-black shadow-md cursor-pointer"
            />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black border rounded-md shadow-lg w-44 z-50">
              <p className="px-4 py-2 text-sm font-semibold">{user.displayName || 'User'}</p>
              <hr />
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 text-sm">Profile</Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>

    {/* Mobile Hamburger */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl text-black focus:outline-none"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Mobile Links */}
  {menuOpen && (
    <div className="md:hidden bg-white text-black px-6 py-4 space-y-3">
      {!user ? (
        loggedOutRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="block hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            {route.label}
          </Link>
        ))
      ) : (
        <>
          {loggedInRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block hover:text-yellow-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Link
            to="/profile"
            className="block hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="block text-left w-full text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </>
      )}
    </div>
  )}
</nav>


      {/* Toast container */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </>
  );
};

export default Navbar;
