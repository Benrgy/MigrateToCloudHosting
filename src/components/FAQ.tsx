
import { useState } from "react";

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      icon: "fas fa-clock",
      iconColor: "text-blue-600",
      question: "How long does the migration process take?",
      answer: "Most migrations complete within 24-48 hours. Small sites can be done in 6 hours, while large e-commerce sites may take up to 72 hours for full optimization. We work around the clock to minimize timing."
    },
    {
      icon: "fas fa-shield-alt",
      iconColor: "text-green-600",
      question: "Will my site experience any downtime?",
      answer: "Absolutely not. Our zero-downtime migration uses advanced cloning and synchronization technology. Your site remains fully accessible throughout the entire process with automatic rollback protection."
    },
    {
      icon: "fas fa-search",
      iconColor: "text-purple-600",
      question: "How do you maintain SEO rankings during migration?",
      answer: "We preserve all SEO elements including meta data, URL structures, redirects, and internal linking. Our proprietary SEO protection system ensures search engines correctly index your new location without ranking loss."
    },
    {
      icon: "fas fa-headset",
      iconColor: "text-orange-600",
      question: "What support is available during migration?",
      answer: "Our expert support team is available 24/7 via live chat, email, and emergency phone support. You'll have a dedicated migration specialist assigned to your project from start to finish."
    },
    {
      icon: "fas fa-undo",
      iconColor: "text-red-600",
      question: "What happens if something goes wrong?",
      answer: "Our system creates multiple backup points during migration. If any issues occur, we can instantly rollback to any previous state within minutes. Your site's safety is our top priority."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about the migration process</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <button
                className="w-full text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <div className="text-xl font-bold mb-4 flex items-center cursor-pointer">
                  <i className={`${faq.icon} ${faq.iconColor} mr-3`} aria-hidden="true"></i>
                  {faq.question}
                  <i className={`fas ${openFAQ === index ? 'fa-chevron-up' : 'fa-chevron-down'} ml-auto text-gray-400`} aria-hidden="true"></i>
                </div>
              </button>
              {openFAQ === index && (
                <p className="text-gray-600 text-lg mt-4 pl-10">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
