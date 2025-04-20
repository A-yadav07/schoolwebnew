import React, { useState } from "react";
import {
  Sparkles,
  Palette,
  Rocket,
  Server,
  HelpCircle,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@mui/material";

import Image1 from "../assets/404-Page.jpg";
import Image2 from "../assets/admin-dashboard-2.png";
import Image3 from "../assets/admin-dashboard-3.png";
import Image4 from "../assets/admin-dashboard.png";

const tabContent = [
  {
    key: "material",
    icon: <Sparkles size={18} />,
    title: "Material UI Powered",
    image: Image1,
    heading: "Leverage Power of Material UI Components",
    points: [
      "Next.js JavaScript/TypeScript",
      "Rich Form and Table Components",
      "Customizable Themes",
      "Responsive Grid System",
    ],
  },
  {
    key: "themes",
    icon: <Palette size={18} />,
    title: "Customizable Themes",
    image: Image2,
    heading: "Flexible Theming Options",
    points: [
      "Easy options for Theming",
      "Color Presets tailored to your Web Apps",
      "Layout Options",
      "Consistency in Design",
    ],
  },
  {
    key: "development",
    icon: <Rocket size={18} />,
    title: "Faster Development",
    image: Image3,
    heading: "Speed up Development",
    points: [
      "Pre-built UI Components",
      "Clean Codebase",
      "Reusable Hooks & Contexts",
      "Boost Team Productivity",
    ],
  },
  {
    key: "scalability",
    icon: <Server size={18} />,
    title: "Scalability",
    image: Image4,
    heading: "Build to Scale",
    points: [
      "Modular Architecture",
      "Extensible Codebase",
      "Performance Optimized",
      "Future Proof Design",
    ],
  },
];

const AdminInterface = () => {
  const [activeTab, setActiveTab] = useState("material");

  const content = tabContent.find((tab) => tab.key === activeTab);

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Powerful Admin Interface</h2>
      <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
        Manage data, users, and workflows effortlessly with intuitive, customizable admin controls and features.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabContent.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
              activeTab === tab.key
                ? "bg-gray-200 font-semibold"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-4xl p-4 w-full md:w-1/2 shadow-sm">
          <img src={content.image} alt="Admin UI" className="rounded-2xl" />
        </div>
        <div className="bg-gray-100 rounded-4xl p-8 text-left w-full md:w-1/2 shadow-sm">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-blue-900">
            {content.icon} {content.title}
          </h3>
          <h4 className="text-2xl font-bold mb-3">{content.heading}</h4>
          <ul className="text-gray-600 space-y-2 list-none">
            {content.points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span>⚙️</span> {point}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="w-full mt-6 p-4 rounded-3xl" style={{ backgroundColor: "#f5f8fb" }}>
            <div className="flex gap-4 flex-wrap justify-start">
              <Button
                className="text-white hover:bg-[#27642az]"
                variant="outlined"
                size="medium"
                startIcon={<HelpCircle size={18} />}
                sx={{
                  backgroundColor: "#2e7d32",
                  borderRadius: "9999px",
                  color: "#fff",
                  '&:hover': {
                    backgroundColor: "#27642a",
                  },
                }}
              >
                Docs
              </Button>

              <Button
                component="a"
                href="/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="medium"
                startIcon={<LinkIcon size={18} />}
                sx={{
                  borderRadius: "9999px",
                  backgroundColor: "#2e7d32",
                  color: "#fff",
                  '&:hover': {
                    backgroundColor: "#27642a",
                  },
                }}
              >
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminInterface;
