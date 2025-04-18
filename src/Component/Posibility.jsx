import React from 'react';

const EndlessPossibilities = () => {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Endless Possibilities
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Everything you need to design both the marketing site and the admin interface for your SaaS product.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        {[
          { number: '200+', label: 'Blocks' },
          { number: '50+', label: 'Admin Pages' },
          { number: '7+', label: 'Landing Demos' },
          { number: '1200+', label: 'Hours Saved' }
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl py-6 px-4">
            <div className="text-3xl font-bold text-gray-900">{item.number}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-2xl py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Tailored for Every Industry
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From Project Management to AI, see how our UI Kit helps you build SaaS applications tailored for a variety of industries.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Project Management',
            'Customer Relationship Management (CRM)',
            'HR & Recruitment',
            'Finance & Accounting',
            'E-commerce Solutions',
            'Marketing Automation',
            'Healthcare & Telemedicine',
            'LMS',
            'AI & ML Platforms',
            'Inventory & Supply Chain Management',
            'Customer Support & Help Desk',
            'Email Marketing and SEO Tools',
            'Networking Platforms',
            'Blogging Tools',
            'Data Analytics & Business Intelligence'
          ].map((label, i) => (
            <span
              key={i}
              className="bg-white text-gray-800 px-4 py-2 rounded-full shadow text-sm font-medium"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium">
            📄 Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndlessPossibilities;
