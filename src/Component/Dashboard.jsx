import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import {
  FaUser,
  FaBullhorn,
  FaCreditCard,
  FaListAlt,
  FaHome,
  FaUsers,
  FaMoneyBillWave,
  FaArrowLeft,
  FaChartPie,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user?.email) return;
      try {
        const res = await fetch(
          `https://building-server-six.vercel.app/api/users/${user.email}`
        );
        const data = await res.json();
        setRole(data.role);
      } catch (error) {
        console.error("Failed to fetch user role", error);
      }
    };
    fetchUserRole();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-blue-800 text-white p-4">
        <h1 className="text-xl font-bold">🏢 Dashboard</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-blue-800 text-white p-5 space-y-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <h1 className="text-2xl font-bold text-center mb-6 hidden md:block">
          🏢 Dashboard
        </h1>

        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaChartPie /> Overview
          </Link>

          <Link
            to="/dashboard/profile"
            className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaUser /> My Profile
          </Link>

          <Link
            to="/dashboard/announcements"
            className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaBullhorn /> Announcements
          </Link>

          {/* Member Routes */}
          {role === "member" && (
            <>
              <Link
                to="/dashboard/make-payment"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaCreditCard /> Make Payment
              </Link>
              <Link
                to="/dashboard/payment-history"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaListAlt /> Payment History
              </Link>
            </>
          )}

          {/* Admin Routes */}
          {role === "admin" && (
            <>
              <Link
                to="/dashboard/manage-members"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaUsers /> Manage Members
              </Link>
              <Link
                to="/dashboard/agreementRequest"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaHome /> Agreement Requests
              </Link>
              <Link
                to="/dashboard/manage-coupons"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaMoneyBillWave /> Manage Coupons
              </Link>
              <Link
                to="/dashboard/make-announcement"
                className="block hover:bg-blue-700 p-2 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaBullhorn /> Make Announcement
              </Link>
            </>
          )}
        </nav>

        <div className="mt-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm hover:underline"
            onClick={() => setIsOpen(false)}
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 p-2 rounded text-white text-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
