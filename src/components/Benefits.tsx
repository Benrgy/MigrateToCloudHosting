
export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold mb-6">The Results Speak for Themselves</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real improvements our clients see within 24 hours of migration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="text-6xl font-bold text-blue-600 mb-4">60%</div>
            <h3 className="text-xl font-bold mb-4">Faster Migration</h3>
            <p className="text-gray-600">Complete your move in record time with our automated tools and streamlined processes.</p>
          </article>
          <article className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
            <div className="text-6xl font-bold text-green-600 mb-4">2.5x</div>
            <h3 className="text-xl font-bold mb-4">Performance Boost</h3>
            <p className="text-gray-600">Experience dramatically faster page loads and improved user experience immediately.</p>
          </article>
          <article className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
            <div className="text-6xl font-bold text-purple-600 mb-4">40%</div>
            <h3 className="text-xl font-bold mb-4">Cost Savings</h3>
            <p className="text-gray-600">Reduce hosting expenses while getting enterprise-grade features and performance.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
