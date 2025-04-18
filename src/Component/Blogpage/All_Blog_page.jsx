import React, { useState } from "react";
const AllBlogPosts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [loading, setLoading] = useState(false);
  const categories = [
    "All",
    "Academic",
    "Campus Life",
    "Research",
    "Events",
    "Student Stories",
  ];
  const allBlogPosts = [
    {
      id: 1,
      title: "Breakthrough Research in Quantum Computing",
      category: "Research",
      date: "April 15, 2025",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20quantum%20computing%20laboratory%20with%20advanced%20equipment%2C%20scientists%20working%20on%20quantum%20computers%2C%20futuristic%20technology%20environment%2C%20clean%20professional%20setting%20with%20blue%20lighting%2C%20high-tech%20research%20facility&width=800&height=400&seq=13&orientation=landscape",
      excerpt:
        "Our quantum computing team has made significant strides in quantum error correction, bringing us closer to practical quantum computers.",
      authorImage:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20female%20Asian%20scientist%20in%20lab%20coat%2C%20confident%20expression%2C%20clean%20background%2C%20studio%20lighting%2C%20high%20quality%20portrait&width=60&height=60&seq=14&orientation=squarish",
    },
    {
      id: 2,
      title: "Student Life: A Day in the Residence Halls",
      category: "Campus Life",
      date: "April 14, 2025",
      author: "Emma Rodriguez",
      readTime: "4 min read",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20university%20dormitory%20common%20area%20with%20students%20studying%20and%20socializing%2C%20contemporary%20interior%20design%2C%20warm%20lighting%2C%20comfortable%20furniture%2C%20vibrant%20campus%20life&width=800&height=400&seq=15&orientation=landscape",
      excerpt:
        "Experience the vibrant community and daily life in our newly renovated residence halls through the eyes of our students.",
      authorImage:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Hispanic%20female%20student%2C%20natural%20smile%2C%20clean%20background%2C%20studio%20lighting%2C%20high%20quality%20portrait&width=60&height=60&seq=16&orientation=squarish",
    },
    {
      id: 3,
      title: "New Environmental Science Program Launch",
      category: "Academic",
      date: "April 13, 2025",
      author: "Prof. James Wilson",
      readTime: "6 min read",
      image:
        "https://readdy.ai/api/search-image?query=Students%20conducting%20environmental%20research%20in%20modern%20laboratory%2C%20analyzing%20samples%2C%20using%20advanced%20equipment%2C%20bright%20well-lit%20space%2C%20professional%20scientific%20setting&width=800&height=400&seq=17&orientation=landscape",
      excerpt:
        "Introducing our new Environmental Science program, designed to address the growing challenges of climate change.",
      authorImage:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20middle-aged%20male%20professor%2C%20scholarly%20appearance%2C%20clean%20background%2C%20studio%20lighting%2C%20high%20quality%20portrait&width=60&height=60&seq=18&orientation=squarish",
    },
  ];
  const featuredPost = {
    title: "Innovation Hub: Opening New Frontiers in Technology",
    category: "Research",
    date: "April 16, 2025",
    author: "Dr. Michael Foster",
    readTime: "8 min read",
    image:
      "https://readdy.ai/api/search-image?query=Cutting%20edge%20university%20innovation%20center%20with%20students%20working%20on%20robotics%20and%20AI%20projects%2C%20modern%20architectural%20design%2C%20glass%20walls%2C%20natural%20lighting%2C%20collaborative%20workspace%20with%20high%20tech%20equipment&width=1200&height=600&seq=19&orientation=landscape",
    excerpt:
      "The newly inaugurated Innovation Hub represents a significant milestone in our commitment to advancing technological research and entrepreneurship. This state-of-the-art facility brings together students, faculty, and industry partners to collaborate on groundbreaking projects.",
    authorImage:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20distinguished%20male%20professor%20in%20business%20attire%2C%20confident%20pose%2C%20clean%20background%2C%20studio%20lighting%2C%20high%20quality%20portrait&width=60&height=60&seq=20&orientation=squarish",
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        {/* <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-[500px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-900 text-white text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {featuredPost.author}
                      </p>
                      <div className="text-gray-300 text-sm">
                        {featuredPost.date} · {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          {/* </div>
        </div> */}
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                activeCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts
            .filter(
              (post) =>
                activeCategory === "All" || post.category === activeCategory,
            )
            .slice(0, visiblePosts)
            .map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-900 text-white text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-900 transition duration-300">
                    <a href="#" className="cursor-pointer">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
        </div>
        {/* Load More Button */}
        <div className="text-center mt-12">
          {visiblePosts <
            allBlogPosts.filter(
              (post) =>
                activeCategory === "All" || post.category === activeCategory,
            ).length && (
            <button
              id="loadMoreBtn"
              onClick={async () => {
                setLoading(true);
                // Simulate API call delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setVisiblePosts((prev) => prev + 3);
                setLoading(false);
              }}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition duration-300 cursor-pointer whitespace-nowrap !rounded-button flex items-center justify-center gap-2 mx-auto"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Loading...
                </>
              ) : (
                "Load More Articles"
              )}
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
export default AllBlogPosts;
