// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const attendanceChart = echarts.init(document.getElementById('attendanceChart'));
    const performanceChart = echarts.init(document.getElementById('performanceChart'));
    const distributionChart = echarts.init(document.getElementById('distributionChart'));

    const attendanceOption = {
      animation: false,
      title: { text: 'Attendance Trends' },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      yAxis: { type: 'value' },
      series: [{
        data: [95, 93, 94, 89, 92],
        type: 'line',
        smooth: true
      }]
    };

    const performanceOption = {
      animation: false,
      title: { text: 'Academic Performance' },
      xAxis: { type: 'category', data: ['Math', 'Science', 'English', 'History'] },
      yAxis: { type: 'value' },
      series: [{
        data: [85, 78, 82, 88],
        type: 'bar'
      }]
    };

    const distributionOption = {
      animation: false,
      title: { text: 'Department Distribution' },
      series: [{
        type: 'pie',
        data: [
          { value: 35, name: 'Science' },
          { value: 30, name: 'Arts' },
          { value: 25, name: 'Commerce' },
          { value: 10, name: 'Others' }
        ]
      }]
    };

    attendanceChart.setOption(attendanceOption);
    performanceChart.setOption(performanceOption);
    distributionChart.setOption(distributionOption);

    return () => {
      attendanceChart.dispose();
      performanceChart.dispose();
      distributionChart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-2xl font-semibold mt-1">2,547</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-users text-blue-600"></i>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <i className="fas fa-arrow-up text-green-500 text-sm"></i>
              <span className="text-green-500 text-sm ml-1">4.75%</span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Teachers</p>
                <p className="text-2xl font-semibold mt-1">157</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-purple-600"></i>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <i className="fas fa-arrow-up text-green-500 text-sm"></i>
              <span className="text-green-500 text-sm ml-1">2.5%</span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Attendance Rate</p>
                <p className="text-2xl font-semibold mt-1">94.2%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-green-600"></i>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <i className="fas fa-arrow-up text-green-500 text-sm"></i>
              <span className="text-green-500 text-sm ml-1">1.2%</span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Academic Performance</p>
                <p className="text-2xl font-semibold mt-1">87.5%</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-yellow-600"></i>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <i className="fas fa-arrow-up text-green-500 text-sm"></i>
              <span className="text-green-500 text-sm ml-1">3.1%</span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 grid gap-6">
            {/* Charts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div id="attendanceChart" style={{height: '300px'}}></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div id="performanceChart" style={{height: '300px'}}></div>
              </div>
            </div>
            
            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Recent Activities</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer !rounded-button whitespace-nowrap">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  {icon: 'fa-user-plus', color: 'blue', text: 'New student registration', time: '2 hours ago'},
                  {icon: 'fa-file-alt', color: 'green', text: 'Grade reports generated', time: '4 hours ago'},
                  {icon: 'fa-calendar', color: 'purple', text: 'Staff meeting scheduled', time: '5 hours ago'},
                  {icon: 'fa-bell', color: 'yellow', text: 'Exam notifications sent', time: '6 hours ago'}
                ].map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 rounded-full bg-${activity.color}-100 flex items-center justify-center mr-3`}>
                      <i className={`fas ${activity.icon} text-${activity.color}-600 text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-gray-700">{activity.text}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Department Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div id="distributionChart" style={{height: '300px'}}></div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {icon: 'fa-user-check', text: 'Attendance'},
                  {icon: 'fa-book', text: 'Grades'},
                  {icon: 'fa-calendar-alt', text: 'Schedule'},
                  {icon: 'fa-file-alt', text: 'Reports'}
                ].map((link, index) => (
                  <button key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    <i className={`fas ${link.icon} text-blue-600 mr-3`}></i>
                    <span className="text-gray-700">{link.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard