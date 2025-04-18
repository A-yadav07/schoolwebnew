export default function Course1() {
    return (
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#005B96] mb-4">Course 1: Mathematics</h1>
  
        <p className="text-gray-700 text-lg mb-6">
          This course is designed for school students to build a strong foundation in Mathematics.
          From basic arithmetic to advanced algebra, this course helps sharpen your logic and problem-solving skills.
        </p>
  
        <div className="bg-[#f0f8ff] p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">📚 Topics Covered</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Arithmetic (Addition, Subtraction, Multiplication, Division)</li>
            <li>Fractions, Decimals & Percentages</li>
            <li>Algebraic Expressions</li>
            <li>Geometry Basics: Shapes, Area, Volume</li>
            <li>Introduction to Trigonometry</li>
            <li>Graph plotting and coordinate geometry</li>
          </ul>
        </div>
  
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🎯 Course Benefits</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Strengthen logical thinking and analytical skills</li>
            <li>Build a strong foundation for competitive exams</li>
            <li>Interactive examples and practice problems</li>
            <li>Helpful for school tests and board exams</li>
          </ul>
        </div>
  
        <div className="text-center mt-8">
          <button className="bg-[#005B96] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00457c] transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    );
  }
  