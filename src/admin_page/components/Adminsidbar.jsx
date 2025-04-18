import React from 'react'
import { FaCalendarCheck, FaChalkboardTeacher, FaChartBar, FaCog, FaSchool, FaSignOutAlt, FaTachometerAlt, FaUserGraduate } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
      }`
    }
  >
    <Icon className="text-lg" />
    <span>{label}</span>
  </NavLink>
);
const Adminsidbar = () => {
  return (
    <div className="min-h-screen w-64 bg-white shadow-md p-4 flex flex-col">
    <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">School Admin</h2>
    <nav className="flex-1 flex flex-col gap-2">
      <SidebarItem to="/admin" icon={FaTachometerAlt} label="Dashboard" />
      <SidebarItem to="/admin/students" icon={FaUserGraduate} label="Students" />
      <SidebarItem to="/admin/teachers" icon={FaChalkboardTeacher} label="Teachers" />
      <SidebarItem to="/admin/classes" icon={FaSchool} label="Classes" />
      <SidebarItem to="/admin/attendance" icon={FaCalendarCheck} label="Attendance" />
      <SidebarItem to="/admin/results" icon={FaChartBar} label="Results" />
      <SidebarItem to="/admin/settings" icon={FaCog} label="Settings" />
    </nav>
    <div className="mt-auto">
      <SidebarItem  to="/logout" icon={FaSignOutAlt

      } label="Logout" />
    </div>
  </div>
  )
}

export default Adminsidbar;