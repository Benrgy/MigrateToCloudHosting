
export const TrustIndicators = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="trust-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="trust-heading" className="text-2xl font-bold text-gray-800 mb-4">Trusted by Over 10,000+ Websites Worldwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <i className="fas fa-users text-blue-600 mr-2" aria-hidden="true"></i>
              <span className="font-semibold">10,000+ Migrations</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-green-600 mr-2" aria-hidden="true"></i>
              <span className="font-semibold">99.9% Success Rate</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-award text-yellow-600 mr-2" aria-hidden="true"></i>
              <span className="font-semibold">Industry Leading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
