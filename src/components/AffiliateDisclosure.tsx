
export const AffiliateDisclosure = () => {
  return (
    <section id="disclosure" className="py-8 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
            Affiliate Disclosure
          </h3>
          <div className="text-gray-600 text-sm leading-relaxed space-y-3">
            <p className="text-center">
              This website contains affiliate links to hosting providers. We may earn a commission when you make a purchase through our links at no additional cost to you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/60 p-4 rounded border-l-2 border-blue-300">
                <h4 className="font-medium text-gray-700 mb-1 text-sm">Our Promise</h4>
                <p className="text-xs">We only recommend services we genuinely use and believe in. Our affiliate relationships never influence our honest recommendations.</p>
              </div>
              <div className="bg-white/60 p-4 rounded border-l-2 border-green-300">
                <h4 className="font-medium text-gray-700 mb-1 text-sm">Your Choice</h4>
                <p className="text-xs">You're always free to visit any hosting provider directly. Our goal is to provide value whether you use our links or not.</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4 italic">
              This disclosure complies with Federal Trade Commission guidelines on endorsements and testimonials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
