import React, { useState, useEffect } from "react";

const Gallery= () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("Latest");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      title: "Modern Library Interior",
      category: "Academic Buildings",
      date: "March 15, 2025",
      description:
        "Our state-of-the-art library features collaborative study spaces, digital resources, and a vast collection of academic materials.",
      imageUrl: "https://yourdomain.com/images/library.jpg",
    },
    // Add more images here
  ];

  const categories = [
    "All Photos",
    "Academic Buildings",
    "Student Life",
    "Athletics",
    "Events",
    "Campus Views",
  ];

  const filteredImages =
    activeCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const sortedImages = [...filteredImages].sort((a, b) => {
    if (sortOption === "Latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === "Oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.id - b.id;
    }
  });

  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = sortedImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(sortedImages.length / itemsPerPage);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (currentImage !== null && currentImage < sortedImages.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== null && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImage]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Campus Gallery</h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Explore our campus through photographs showcasing student life,
        facilities, and more.
      </p>

      {/* Filter and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex space-x-3">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option>Latest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
          </select>

          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${
              viewMode === "grid" ? "bg-blue-900 text-white" : "bg-white"
            }`}
          >
            <i className="fas fa-th"></i>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list" ? "bg-blue-900 text-white" : "bg-white"
            }`}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Gallery Display */}
      {viewMode === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentImages.map((img, index) => (
            <div
              key={img.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openLightbox(indexOfFirstImage + index)}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {currentImages.map((img, index) => (
            <div
              key={img.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full md:w-1/3 h-56 object-cover cursor-pointer"
                onClick={() => openLightbox(indexOfFirstImage + index)}
              />
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-blue-900">{img.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{img.date}</p>
                <p className="text-gray-700 mb-4">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && currentImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeLightbox}
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={prevImage}
            disabled={currentImage === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <img
            src={sortedImages[currentImage].imageUrl}
            alt={sortedImages[currentImage].title}
            className="max-w-full max-h-[80vh] object-contain"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={nextImage}
            disabled={currentImage === sortedImages.length - 1}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
