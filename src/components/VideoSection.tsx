
export const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            See How Easy Migration Can Be
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <i className="fas fa-play-circle text-6xl mb-4 opacity-80" aria-hidden="true"></i>
                <p className="text-xl">Watch Migration Process Demo</p>
                <p className="text-blue-200">See how we migrate your site with zero downtime</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold">
                <i className="fas fa-play mr-2" aria-hidden="true"></i>
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
