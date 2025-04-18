import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">The Affordable Unfair Advantage</h2>
        <p className="text-gray-600">Choose the plan that aligns with your SaaS product requirements.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-24">
        {/* Free Plan */}
        <div className="border rounded-2xl p-8 max-w-sm w-full shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <p className="text-4xl font-bold mb-6">$0</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li>✓ 1 Demo Landing</li>
            <li>✓ 25 Components Blocks</li>
            <li>✓ Dark/Light Mode</li>
            <li>✕ Typescript Version</li> 
            <li>✕ Design File (Figma)</li>
            <li>✕ Multiple Color Options</li>
            <li>✕ RTL</li>
            <li>✕ Supabase Authentication</li>
          </ul>
          <a href="#" className="text-blue-600 text-sm underline mb-4 block">Learn more about the MIT license</a>
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-4xl font-medium hover:bg-blue-50 transition">Get Started With Free</button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-2xl p-8 max-w-sm w-full shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-4xl font-bold mb-6">$69</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li>✓ 7 Demo Landing</li>
            <li>✓ 193+ Component Blocks</li>
            <li>✓ Dark/Light Mode</li>
            <li>✓ Typescript Version</li>
            <li>✓ Design File (Figma)</li>
            <li>✓ Multiple Color Options</li>
            <li>✓ RTL</li>
            <li>✓ Supabase Authentication</li>
          </ul>
          <a href="#" className="text-blue-600 text-sm underline mb-4 block">Learn more about the Pro license</a>
          <button className="w-full bg-blue-600 text-white py-2 rounded-4xl font-medium hover:bg-blue-700 transition">Get Started With Pro</button>
        </div>
      </div>

      {/* Discord Section */}
      <div className="bg-blue-50 rounded-4xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="uppercase text-sm text-blue-600 font-medium mb-2">Join the Community</p>
          <h3 className="text-2xl font-semibold mb-2">Connect with us on Discord</h3>
          <p className="text-gray-600 mb-4">Get support, share insights, and grow together.</p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-4xl font-medium hover:bg-blue-700 transition">Join Discord Community</button>
          <p className="text-xs mt-2 text-gray-500">Have questions? Our community is here to help. Learn more about our <a href="#" className="underline">community</a></p>
        </div>
        <div className="text-center md:border-l md:pl-8 md:w-1/3">
          <p className="text-3xl font-bold mb-1">8k+</p>
          <p className="text-gray-600 mb-2">Trusted by professionals worldwide</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <p className="text-sm text-gray-600">250k+ Reviews (4.65 out of 5)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
