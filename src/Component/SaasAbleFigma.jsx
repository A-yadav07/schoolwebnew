import React from "react";
import {
  Component,
  Moon,
  Settings2,
  Accessibility,
  Shapes,
  FileText,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: <Component size={28} />, text: "Component Architecture" },
  { icon: <Moon size={28} />, text: "Dark Mode" },
  { icon: <Settings2 size={28} />, text: "Auto Layout" },
  { icon: <Accessibility size={28} />, text: "WCAG Compliant" },
  { icon: <Shapes size={28} />, text: "Custom Icons" },
  { icon: <FileText size={28} />, text: "Page Demos" },
  { icon: <span className="text-xl font-semibold">[m]</span>, text: "Material 3 Guideline" },
  { icon: <Sparkles size={28} />, text: "Quick Customization" },
];

const SaasAbleFigmaSection = () => {
  return (
    <section className="text-center py-20 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
        Design Faster, Smarter with SaasAble Figma
      </h2>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
        Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.
      </p>

      {/* Bigger Image Wrapper */}
      <div className="bg-[#f5f8fb] rounded-3xl shadow-md mb-12 max-w-6xl mx-auto px-6 py-6 flex justify-center items-center">
        <img
          src="src/assets/desktop1-light.svg" // change this to actual image path
          alt="SaasAble Dashboard Preview"
          className="w-full max-w-5xl"
        />
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f6fb] rounded-2xl py-10 px-4 flex flex-col items-center gap-3 min-h-[140px]"
          >
            <div className="text-blue-900">{item.icon}</div>
            <p className="text-gray-900 font-medium text-sm text-center">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="flex items-center gap-1 bg-white border border-blue-900 text-blue-800 hover:bg-blue-50 font-medium px-6 py-2 rounded-full text-sm transition">
          <span className="text-xs">👁</span> Preview Pro Figma
        </button>
        <button className="flex items-center gap-1 bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-full text-sm transition">
          ⭳ Free Figma
        </button>
      </div>
    </section>
  );
};

export default SaasAbleFigmaSection;
