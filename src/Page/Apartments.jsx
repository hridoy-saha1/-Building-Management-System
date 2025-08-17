import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [page, setPage] = useState(1);
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userHasAgreement, setUserHasAgreement] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const limit = 6;

  const fetchApartments = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://building-server-six.vercel.app/api/apartments", {
        params: {
          page,
          min: minRent || 0,
          max: maxRent || Infinity,
        },
      });
      setApartments(res.data.apartments);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching apartments:", err);
      toast.error("Failed to load apartments");
    } finally {
      setLoading(false);
    }
  };

  const checkUserAgreement = async () => {
    if (!user?.email) return;
    try {
      const res = await axios.get("https://building-server-six.vercel.app/api/agreements", {
        params: { email: user.email },
      });
      setUserHasAgreement(!!res.data?.agreement);
    } catch (err) {
      console.error("Agreement check error:", err);
      toast.error("Error checking agreement status");
    }
  };

  useEffect(() => {
    fetchApartments();
  }, [page]);

  useEffect(() => {
    checkUserAgreement();
  }, [user]);

  const handleSearch = () => {
    setPage(1);
    fetchApartments();
  };

  const handleAgreement = async (apt) => {
    if (!user) return navigate("/login");

    try {
      await axios.post("https://building-server-six.vercel.app/api/agreements", {
        userName: user.displayName || user.name || "User",
        userEmail: user.email,
        floor: apt.floor,
        block: apt.block,
        apartmentNo: apt.apartmentNo,
        rent: apt.rent,
      });
      toast.success("Agreement submitted!");
      setUserHasAgreement(true);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to submit agreement";
      toast.error(message);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {userHasAgreement && (
        <marquee className="text-red-600 text-lg font-semibold mb-6">
          You have already made an agreement!
        </marquee>
      )}

      {/* Search Filter */}
      <div className="flex gap-2 mb-6">
        <input
          type="number"
          placeholder="Min Rent"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          className="border px-2 py-1 rounded w-28"
        />
        <input
          type="number"
          placeholder="Max Rent"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          className="border px-2 py-1 rounded w-28"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {/* Apartment Cards */}
      {/* Apartment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          apartments.map((apt) => (
            <div
              key={apt._id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={apt.image}
                  alt={`Apartment ${apt.apartmentNo}`}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-2 py-1 rounded">
                  Rent: ৳{apt.rent}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Apt #{apt.apartmentNo}
                </h3>
                <p className="text-gray-600">Floor: {apt.floor}</p>
                <p className="text-gray-600">Block: {apt.block}</p>
                <button
                  onClick={() => handleAgreement(apt)}
                  disabled={userHasAgreement}
                  className={`mt-3 w-full py-2 rounded-lg font-medium transition-colors duration-300 border-2 ${userHasAgreement
                      ? "border-gray-400 text-gray-400 cursor-not-allowed bg-transparent"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                >
                  {userHasAgreement ? "Already Applied" : "Apply for Agreement"}
                </button>

              </div>
            </div>
          ))
        )}
      </div>


      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
