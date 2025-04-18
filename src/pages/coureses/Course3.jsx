export default function Course3() {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#005B96] mb-4">Course 3: Computer</h1>
  
        {/* Intro */}
        <p className="text-gray-700 text-lg mb-6">
          Master the basics of computers and become digitally smart! This course helps students and beginners understand essential tools like MS Office, safe internet usage, email, and digital citizenship.
        </p>
  
        {/* Course Overview */}
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#005B96]">💻 Course Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Computer Fundamentals course is perfect for school students and digital newcomers. It teaches practical computer usage with hands-on practice sessions. Whether it’s typing a document, creating a presentation, or browsing safely, this course covers it all.
          </p>
        </div>
  
        {/* Modules */}
        <div className="bg-[#f0f8ff] p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🧩 Modules Covered</h2>
  
          <h3 className="text-xl font-medium text-gray-800 mt-4">1. MS Office Suite</h3>
          <ul className="list-disc list-inside text-gray-700 mb-3">
            <li>MS Word – Writing and formatting documents</li>
            <li>MS Excel – Creating and analyzing spreadsheets</li>
            <li>MS PowerPoint – Making presentations</li>
          </ul>
  
          <h3 className="text-xl font-medium text-gray-800 mt-4">2. Internet & Email</h3>
          <ul className="list-disc list-inside text-gray-700 mb-3">
            <li>Using browsers (Chrome, Edge)</li>
            <li>Creating and managing email accounts</li>
            <li>Google search and online tools</li>
          </ul>
  
          <h3 className="text-xl font-medium text-gray-800 mt-4">3. Digital Safety</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cyberbullying awareness</li>
            <li>Strong passwords and privacy</li>
            <li>Recognizing online threats</li>
          </ul>
        </div>
  
        {/* Benefits */}
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🚀 Benefits of This Course</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Work confidently with computers</li>
            <li>Create assignments, reports, and presentations easily</li>
            <li>Use the internet responsibly and safely</li>
            <li>Improve your digital literacy for school and future jobs</li>
          </ul>
        </div>
  
        {/* Instructor */}
        <div className="bg-[#f5f8fb] p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">👨‍🏫 Instructor</h2>
          <p className="text-gray-700">
            <strong>Mr. Rahul Verma</strong> – A certified computer educator with 8+ years of experience in training students and professionals in computer fundamentals and digital tools.
          </p>
        </div>
  
        {/* Who Should Enroll */}
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">🎯 Who Should Enroll?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>School students (Grade 5–10)</li>
            <li>Beginners with little or no computer knowledge</li>
            <li>Parents or guardians wanting to guide their children</li>
          </ul>
        </div>
  
        {/* FAQs */}
        <div className="bg-[#f0f8ff] p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#005B96]">❓ Frequently Asked Questions</h2>
          <div className="mb-3">
            <h3 className="font-semibold text-gray-800">Do I need my own computer?</h3>
            <p className="text-gray-700">Yes, having access to a computer or laptop will help you practice daily.</p>
          </div>
          <div className="mb-3">
            <h3 className="font-semibold text-gray-800">Is this course available in Hindi?</h3>
            <p className="text-gray-700">Yes, instructions and videos are available in simple English and Hindi.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Are certificates provided?</h3>
            <p className="text-gray-700">Yes, certificates are awarded after completing all modules and tests.</p>
          </div>
        </div>
  
        {/* CTA */}
        <div className="text-center mt-8">
          <button className="bg-[#005B96] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#00457c] transition duration-300">
            Enroll Now
          </button>
        </div>
  
        {/* Contact Suggestion */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          Questions? <a href="/contact" className="text-[#005B96] underline">Contact Support</a>
        </div>
      </div>
    );
  }
  