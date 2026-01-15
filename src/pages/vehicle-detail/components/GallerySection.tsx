import { useState } from 'react';

interface GallerySectionProps {
  vehicle: {
    name: string;
    gallery: Array<{
      id: number;
      type: string;
      url: string;
      alt: string;
    }>;
  };
}

export default function GallerySection({ vehicle }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicle.gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicle.gallery.length) % vehicle.gallery.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-teal-600">Life</span> with the {vehicle.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicle.gallery.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openGallery(index)}
              className="relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line text-xl text-gray-900"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={vehicle.gallery[currentIndex].url}
              alt={vehicle.gallery[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {vehicle.gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}
