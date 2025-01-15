import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail"; // Modular component for each thumbnail

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Default to first image
  console.log("1st image:", images[0]);
  console.log("Images:", images);

  // Set the default selected image when `images` is available
  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]); // Set the first image as default
    }
  }, [images]); // Only run when `images` changes

  // Return a fallback if no images are provided
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Main Image */}
      <div className="w-full h-80 bg-gray-200 flex justify-center items-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="object-contain h-full max-w-full"
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            image={image}
            isActive={selectedImage === image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
