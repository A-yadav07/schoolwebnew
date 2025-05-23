// import React, { useState, useEffect, useRef } from "react";
// import * as echarts from "echarts";

// const AboutPage = () => {
//   const chartRef = useRef < HTMLDivElement > null;
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [counters, setCounters] = useState({
//     years: 0,
//     students: 0,
//     teachers: 0,
//     successRate: 0,
//   });
  
//   useEffect(() => {
//     if (chartRef.current) {
//       const chart = echarts.init(chartRef.current);
//       const option = {
//         animation: false,
//         title: {
//           text: "Academic Performance Trends",
//           left: "center",
//           top: 0,
//           textStyle: {
//             color: "#333",
//             fontSize: 20,
//             fontWeight: "bold",
//           },
//         },
//         tooltip: {
//           trigger: "axis",
//         },
//         legend: {
//           data: ["Pass Rate", "Distinction Rate"],
//           bottom: 0,
//         },
//         xAxis: {
//           type: "category",
//           data: ["2020", "2021", "2022", "2023", "2024"],
//         },
//         yAxis: {
//           type: "value",
//           axisLabel: {
//             formatter: "{value}%",
//           },
//         },
//         ////hello////
//         series: [
//           {
//             name: "Pass Rate",
//             type: "line",
//             data: [92, 94, 96, 97, 98],
//             smooth: true,
//             lineStyle: {
//               color: "#3B82F6",
//             },
//           },
//           {
//             name: "Distinction Rate",
//             type: "line",
//             data: [45, 52, 58, 62, 65],
//             smooth: true,
//             lineStyle: {
//               color: "#10B981",
//             },
//           },
//         ],
//       };
//       chart.setOption(option);

//       const handleResize = () => {
//         chart.resize();
//       };
//       window.addEventListener("resize", handleResize);

//       return () => {
//         chart.dispose();
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const targetCounters = {
//       years: 25,
//       students: 1500,
//       teachers: 120,
//       successRate: 98,
//     };
//     const duration = 2000;
//     const steps = 50;
//     const stepTime = duration / steps;
//     const stepValues = {
//       years: targetCounters.years / steps,
//       students: targetCounters.students / steps,
//       teachers: targetCounters.teachers / steps,
//       successRate: targetCounters.successRate / steps,
//     };
//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       if (currentStep <= steps) {
//         setCounters({
//           years: Math.round(stepValues.years * currentStep),
//           students: Math.round(stepValues.students * currentStep),
//           teachers: Math.round(stepValues.teachers * currentStep),
//           successRate: Math.round(stepValues.successRate * currentStep),
//         });
//       } else {
//         clearInterval(timer);
//       }
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, []);

//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "Alumni",
//       quote: "BaBa B.K. provided me with the foundation I needed to succeed.",
//       imageUrl:
//         "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       name: "Jane Smith",
//       role: "Current Student",
//       quote: "The faculty here is amazing, and the environment is inspiring.",
//       imageUrl:
//         "https://randomuser.me/api/portraits/women/1.jpg",
//     },
//     // Add more testimonials as needed
//   ];

//   const features = [
//     {
//       title: "Academic Excellence",
//       description:
//         "Committed to the highest standards of education with proven results and achievements.",
//       icon: "fa-solid fa-medal",
//     },
//     {
//       title: "Experienced Faculty",
//       description:
//         "Our teachers bring decades of experience and passion to inspire the next generation.",
//       icon: "fa-solid fa-chalkboard-teacher",
//     },
//   ];

//   const historyMilestones = [
//     {
//       year: "1998",
//       title: "Foundation",
//       description:
//         "BaBa B.K Higher Secondary School was established with a vision to provide quality education.",
//       imageUrl:
//         "https://readdy.ai/api/search-image?query=historic%20school%20building%20with%20traditional%20architecture%2C%20vintage%20school%20building%20with%20classic%20design%2C%20nostalgic%20educational%20institution%20with%20beautiful%20facade%2C%20old%20school%20building%20with%20charming%20details%2C%20heritage%20school%20structure%20with%20elegant%20features&width=400&height=300&seq=1&orientation=landscape",
//     },
//     {
//       year: "2005",
//       title: "Campus Expansion",
//       description:
//         "Major expansion of facilities including new science labs and library resources.",
//       imageUrl:
//         "https://readdy.ai/api/search-image?query=modern%20school%20campus%20with%20new%20buildings%2C%20contemporary%20educational%20facilities%20with%20glass%20architecture%2C%20expanded%20school%20grounds%20with%20innovative%20structures%2C%20new%20academic%20buildings%20with%20sustainable%20design%2C%20school%20expansion%20project%20with%20state-of-the-art%20facilities&width=400&height=300&seq=2&orientation=landscape",
//     },
//   ];

//   const coreValues = [
//     {
//       title: "Integrity",
//       description:
//         "We uphold the highest ethical standards in all our actions and decisions.",
//       icon: "fa-solid fa-shield-alt",
//     },
//     {
//       title: "Excellence",
//       description:
//         "We strive for excellence in teaching, learning, and all our endeavors.",
//       icon: "fa-solid fa-star",
//     },
//     {
//       title: "Innovation",
//       description:
//         "We embrace creative thinking and innovative approaches to education.",
//       icon: "fa-solid fa-lightbulb",
//     },
//   ];

//   const facilities = [
//     {
//       title: "Modern Classrooms",
//       description:
//         "Spacious, well-lit classrooms equipped with smart boards and comfortable seating.",
//       imageUrl:
//         "https://readdy.ai/api/search-image?query=modern%20classroom%20with%20smart%20boards%20and%20comfortable%20seating%2C%20bright%20educational%20space%20with%20technological%20integration%2C%20contemporary%20learning%20environment%20with%20interactive%20displays%2C%20well-designed%20classroom%20with%20digital%20teaching%20tools%2C%20innovative%20educational%20space%20with%20modern%20furniture&width=400&height=300&seq=5&orientation=landscape",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section with Background Image */}
//       <section
//         className="relative h-[600px] bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20educational%20campus%20with%20beautiful%20architecture%20and%20landscaping%2C%20stunning%20school%20building%20exterior%20with%20natural%20lighting%2C%20contemporary%20academic%20institution%20with%20impressive%20facade%2C%20professional%20educational%20facility%20with%20elegant%20design%20features%2C%20prestigious%20school%20building%20with%20scenic%20surroundings&width=1440&height=600&seq=15&orientation=landscape')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
//           <h1 className="text-6xl font-bold mb-6">About BaBa B.K</h1>
//           <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
//             Empowering minds, shaping futures, and fostering excellence in
//             education since 1998
//           </p>
//         </div>
//       </section>
//       {/* Vision & Mission Section */}
//       <section className="py-20 bg-gradient-to-b from-white-500 to-blue-200">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="text-black">
//               <h2 className="text-4xl font-bold mb-8">Our Vision & Mission</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <i className="fas fa-eye text-3xl text-blue-300 mt-1"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Vision</h3>
//                     <p className="text-black-100">
//                       To be a leading institution that nurtures global citizens
//                       who are innovative, ethical, and socially responsible.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <i className="fas fa-bullseye text-3xl text-blue-300 mt-1"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Mission</h3>
//                     <p className="text-black-100">
//                       To provide exceptional education through innovative
//                       teaching methods, fostering critical thinking, and
//                       promoting lifelong learning.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden">
//               <img
//                 src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20students%20studying%20in%20modern%20library%20setting%2C%20collaborative%20learning%20environment%20with%20advanced%20technology%2C%20students%20engaged%20in%20academic%20discussion%20with%20professional%20atmosphere%2C%20educational%20scene%20with%20contemporary%20learning%20tools%2C%20academic%20excellence%20portrayed%20in%20educational%20setting&width=600&height=400&seq=16&orientation=landscape"
//                 alt="Students in modern learning environment"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section className="py-16 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//       Our Journey
//     </h2>
//     <div className="space-y-12">
//       {historyMilestones.map((milestone, index) => (
//         <div
//           key={index}
//           className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
//         >
//           <div className="w-full md:w-1/2">
//             <img
//               src={milestone.imageUrl}
//               alt={milestone.title}
//               className="rounded-lg shadow-md w-full h-64 object-cover object-top"
//             />
//           </div>
//           <div className="w-full md:w-1/2 space-y-4">
//             <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-bold">
//               {milestone.year}
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800">
//               {milestone.title}
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               {milestone.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Testimonials */}
//       {/* <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             What People Say
//           </h2>
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key=
//                         src={testimonial.imageUrl}
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-bold text-gray-800">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-gray-600 text-sm">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 italic leading-relaxed">
//                       "{testimonial.quote}"
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-6 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={()jnk => setActiveTestimonial(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
//                   } cursor-pointer rounded-full`}
//                   aria-label={`View testimonial ${index + 1}`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}
//       {/* CTA Section */}
//       <section className="py-16 bg-blue-200 text-black">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Join BaBa B.K?</h2>
//           <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
//             Become part of an institution that fosters excellence, encourages
//             innovation, and shapes the leaders of tomorrow.
//           </p>
//           <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-800 transition">
//             Contact
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
