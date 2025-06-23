
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the migration process take?",
      answer: "Most migrations complete within 24-48 hours. Small sites can be done in 6 hours, while large e-commerce sites may take up to 72 hours for full optimization."
    },
    {
      question: "Will my site experience any downtime?",
      answer: "Absolutely not. Our zero-downtime migration uses advanced cloning and synchronization technology. Your site remains fully accessible throughout the entire process."
    },
    {
      question: "How do you maintain SEO rankings during migration?",
      answer: "We preserve all SEO elements including meta data, URL structures, redirects, and internal linking. Our proprietary SEO protection system ensures search engines correctly index your new location without ranking loss."
    },
    {
      question: "What if something goes wrong during migration?",
      answer: "We provide a 100% money-back guarantee. If any issues occur, we'll restore your original site immediately and refund your payment. We also provide 30 days of post-migration support."
    },
    {
      question: "Do you migrate all types of websites?",
      answer: "Yes! We handle WordPress, Shopify, custom PHP sites, static HTML, and more. Our team has experience with all major platforms and content management systems."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our migration service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-600`} aria-hidden="true"></i>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
