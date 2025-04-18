export default function Course2() {
    return (
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#005B96] mb-4">Course 2: Science</h1>
  
        <p className="text-gray-700 text-lg mb-6">
          Dive into the fascinating world of Science! This course introduces key scientific concepts in Physics,
          Chemistry, and Biology using fun activities, experiments, and real-life examples to make learning interactive and easy.
        </p>
  
        {/* Topics Section */}
        <div className="bg-[#f0f8ff] p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🔬 Topics Covered</h2>
  
          <h3 className="text-xl font-medium text-gray-800 mt-2">Physics</h3>
          <ul className="list-disc list-inside text-gray-700 mb-3">
            <li>Force and Motion</li>
            <li>Light and Sound</li>
            <li>Electricity and Magnetism</li>
          </ul>
  
          <h3 className="text-xl font-medium text-gray-800 mt-2">Chemistry</h3>
          <ul className="list-disc list-inside text-gray-700 mb-3">
            <li>States of Matter</li>
            <li>Elements, Compounds & Mixtures</li>
            <li>Acids, Bases, and Salts</li>
          </ul>
  
          <h3 className="text-xl font-medium text-gray-800 mt-2">Biology</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cells and Tissues</li>
            <li>Human Body Systems</li>
            <li>Plants and Photosynthesis</li>
          </ul>
        </div>
  
        {/* Benefits Section */}
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🧠 What You'll Learn</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Apply scientific principles to everyday life</li>
            <li>Perform experiments safely and correctly</li>
            <li>Prepare for school exams and science fairs</li>
            <li>Improve scientific reasoning and critical thinking</li>
          </ul>
        </div>
  
        {/* Enroll CTA */}
        <div className="text-center mt-8">
          <button className="bg-[#005B96] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00457c] transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    );
  }
  