import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const OverviewPage = () => {
  const { user } = useContext(AuthContext);
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      if (!user?.email) return;

      try {
        const adminRes = await axios.get('https://building-server-six.vercel.app/api/admin-dashboard-info');
        setAdminInfo(adminRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminInfo();
  }, [user]);

  if (loading) return <p className="p-6 text-center">Loading overview...</p>;

  if (!adminInfo) return <p className="p-6 text-center text-red-500">No admin data found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📊 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-purple-100 rounded shadow text-center">
          <strong>Total Rooms</strong>
          <p className="text-xl font-bold">{adminInfo.totalRooms}</p>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow text-center">
          <strong>Available Rooms</strong>
          <p className="text-xl font-bold">{adminInfo.availablePercentage}%</p>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow text-center">
          <strong>Unavailable Rooms</strong>
          <p className="text-xl font-bold">{adminInfo.unavailablePercentage}%</p>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow text-center">
          <strong>Members</strong>
          <p className="text-xl font-bold">{adminInfo.totalMembers}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="flex flex-col md:flex-row gap-6">
        <PieChart width={300} height={300}>
          <Pie
            data={[
              { name: 'Available', value: adminInfo.availablePercentage },
              { name: 'Unavailable', value: adminInfo.unavailablePercentage },
            ]}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {[
              { name: 'Available', value: adminInfo.availablePercentage },
              { name: 'Unavailable', value: adminInfo.unavailablePercentage },
            ].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <BarChart width={400} height={300} data={[
          { name: 'Total Users', count: adminInfo.totalUsers },
          { name: 'Members', count: adminInfo.totalMembers },
        ]}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default OverviewPage;
