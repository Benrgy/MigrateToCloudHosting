
export const VideoSection = () => {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="video-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="video-heading" className="text-4xl md:text-5xl font-bold mb-6">See The Magic Happen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how we migrate a live website in under 24 hours with zero downtime
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/USaisLLUEVE" 
              title="Website Migration Tutorial - Zero Downtime Process" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              loading="lazy"
              width="800"
              height="450">
            </iframe>
          </div>
          <div className="text-center mt-8">
            <div className="flex justify-center items-center gap-6 mb-6 text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-play text-red-600 mr-2" aria-hidden="true"></i>
                <span className="font-semibold">50,000+ Views</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-blue-600 mr-2" aria-hidden="true"></i>
                <span className="font-semibold">Under 10 Minutes</span>
              </div>
            </div>
            <a href="https://www.cloudways.com/en/?id=1384181" 
               className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full hover:from-red-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
               target="_blank" rel="noopener">
                <i className="fas fa-play mr-2" aria-hidden="true"></i>Start Your Migration Like This
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
