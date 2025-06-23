
export const AffiliateDisclosure = () => {
  return (
    <section id="disclosure" className="py-12 bg-yellow-50 border-t border-yellow-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">
            <i className="fas fa-info-circle mr-2" aria-hidden="true"></i>
            FTC Affiliate Disclosure
          </h3>
          <div className="text-yellow-800 space-y-4">
            <p className="text-lg font-semibold">
              Transparency is important to us. Here's what you need to know:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-handshake text-blue-600 mr-2" aria-hidden="true"></i>
                  Affiliate Relationships
                </h4>
                <p>This website contains affiliate links to hosting providers. When you make a purchase through our links, we may earn a commission at no additional cost to you.</p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-shield-alt text-green-600 mr-2" aria-hidden="true"></i>
                  Our Promise
                </h4>
                <p>We only recommend services we genuinely believe in and use ourselves. Our affiliate relationships never influence our honest reviews and recommendations.</p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-dollar-sign text-purple-600 mr-2" aria-hidden="true"></i>
                  Commission Structure
                </h4>
                <p>Commissions help us maintain this free resource and continue providing valuable migration advice and tools to website owners.</p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-balance-scale text-orange-600 mr-2" aria-hidden="true"></i>
                  Your Choice
                </h4>
                <p>You're always free to go directly to any hosting provider's website. Our goal is to provide value whether you use our links or not.</p>
              </div>
            </div>
            <p className="text-sm mt-6 italic">
              This disclosure is in accordance with the Federal Trade Commission's guidelines on endorsements and testimonials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
