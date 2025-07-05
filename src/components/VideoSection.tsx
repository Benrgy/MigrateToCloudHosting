
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            See How Easy Migration Can Be
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg relative overflow-hidden">
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={handlePlayVideo}
                >
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <i className="fas fa-play text-3xl ml-1" aria-hidden="true"></i>
                    </div>
                    <p className="text-xl font-semibold">Watch Migration Process Demo</p>
                    <p className="text-blue-200">See how we migrate your site with zero downtime</p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Website Migration Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button 
                onClick={handlePlayVideo}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                <i className="fas fa-play mr-2" aria-hidden="true"></i>
                Watch Demo Video
              </button>
              <a 
                href="https://www.cloudways.com/en/?id=1384181"
                target="_blank"
                rel="noopener"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 font-semibold"
              >
                <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
