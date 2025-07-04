
import { useState } from "react";
import { Link } from "react-router-dom";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the migration process take?",
      answer: "The migration timeline varies depending on your website's complexity, size, and current hosting environment. Most standard WordPress sites complete migration within 24-48 hours, while small static websites can often be migrated in just 6 hours. Larger e-commerce sites with extensive databases, custom integrations, or complex configurations may require 48-72 hours for complete migration and optimization. The process involves several critical phases: initial site analysis, file and database transfer, DNS configuration, SSL certificate setup, and comprehensive testing to ensure everything functions perfectly. Our migration experts work around the clock to minimize any potential delays and keep you informed throughout the entire process. We also conduct thorough pre-migration assessments to identify any potential issues and provide accurate timeline estimates. Want to know exactly how long your specific site will take to migrate? Use our advanced migration calculator to get a personalized timeline and cost estimate based on your website's unique requirements."
    },
    {
      question: "Will my site experience any downtime?",
      answer: "Absolutely not! We guarantee zero-downtime migration using our proprietary cloning and synchronization technology. Your existing website remains fully operational and accessible to visitors throughout the entire migration process. Our advanced migration methodology involves creating a complete replica of your site on the new cloud server, testing every component thoroughly, and only switching the DNS once we've verified everything works perfectly. This seamless transition typically takes just 5-10 minutes for the final DNS propagation, during which your site continues to function normally. We schedule the final switchover during your site's lowest traffic periods to minimize any potential impact. Our zero-downtime guarantee is backed by years of experience and thousands of successful migrations. We understand that every minute of downtime can cost you customers and revenue, which is why we've invested heavily in migration technology that eliminates this risk entirely. Ready to see how we can migrate your site without any interruption to your business? Calculate your migration timeline and get a detailed plan using our specialized migration assessment tool."
    },
    {
      question: "How do you maintain SEO rankings during migration?",
      answer: "Preserving your hard-earned SEO rankings is our top priority during migration. We employ a comprehensive SEO protection strategy that safeguards every element that search engines use to rank your site. This includes preserving all meta titles, descriptions, header tags, image alt text, URL structures, internal linking patterns, and schema markup. Our proprietary SEO migration toolkit automatically maps old URLs to new ones, implements proper 301 redirects for any structural changes, and ensures that all canonical tags remain intact. We also preserve your robots.txt file, XML sitemaps, and any existing Google Search Console or Bing Webmaster Tools configurations. Our team conducts pre-migration SEO audits to identify critical ranking factors and post-migration verification to confirm everything transferred correctly. We monitor your search rankings for 30 days after migration and provide detailed reports showing that your SEO performance remains stable or improves. Many clients actually see SEO improvements after migration due to faster page load speeds and better server response times that cloud hosting provides. Want to see how migration could actually boost your SEO performance? Use our SEO impact calculator to estimate potential ranking improvements and traffic increases after migrating to cloud hosting."
    },
    {
      question: "What if something goes wrong during migration?",
      answer: "We stand behind our migration service with a comprehensive 100% money-back guarantee and multiple layers of protection to ensure your complete peace of mind. Before starting any migration, we create full backups of your entire website, including all files, databases, email accounts, and configurations. These backups are stored securely and can be used to restore your original site instantly if needed. Our experienced migration team has successfully completed thousands of migrations with a 99.8% success rate, and we've developed detailed protocols for handling any rare issues that might arise. In the unlikely event something goes wrong, we immediately restore your original site to its exact previous state within minutes, ensuring zero data loss or extended downtime. We then analyze what happened, adjust our approach, and attempt the migration again at no additional cost. If we cannot successfully complete your migration for any reason, we provide a full refund and help you find alternative solutions. We also include 30 days of free post-migration support to address any questions or minor adjustments needed after the migration is complete. This comprehensive protection ensures you have nothing to lose by migrating with us. Ready to start your risk-free migration? Use our migration planner to get a detailed assessment and timeline for your specific website."
    },
    {
      question: "Do you migrate all types of websites?",
      answer: "Yes! Our migration expertise spans all major website platforms, content management systems, and hosting environments. We successfully migrate WordPress sites (including multisite networks), Shopify stores, Joomla and Drupal sites, custom PHP applications, static HTML websites, e-commerce platforms like Magento and WooCommerce, and even complex web applications with custom databases. Our team has extensive experience with shared hosting providers like GoDaddy, Bluehost, HostGator, and SiteGround, as well as VPS and dedicated server environments. We handle sites of all sizes, from simple blogs to enterprise-level applications processing thousands of daily transactions. Each migration is customized based on your specific platform requirements, including preserving custom code, third-party integrations, payment gateways, email configurations, and specialized plugins or modules. We also migrate associated services like email accounts, DNS records, SSL certificates, and CDN configurations. Our pre-migration assessment identifies any potential compatibility issues and ensures your site will perform optimally in the new cloud environment. We even provide recommendations for performance optimizations that can be implemented during the migration process. No matter what type of website you have, we have the expertise to migrate it safely and efficiently. Curious about the specific requirements for your website type? Use our compatibility checker tool to get a detailed analysis of your site's migration requirements and estimated timeline."
    },
    {
      question: "What are the main benefits of migrating from shared hosting to cloud hosting?",
      answer: "Migrating from shared hosting to cloud hosting offers significant advantages for website owners seeking better performance, security, and scalability. With cloud hosting, your site is no longer limited by the resources of a single physical server or affected by the activities of other users, as often happens in shared environments. Instead, your website benefits from dedicated resources, resulting in faster load times and improved uptime. Cloud hosting also makes it easy to scale resources up or down based on your traffic needs, so you only pay for what you use. Enhanced security features, such as isolated environments and advanced firewalls, provide greater protection against threats. Additionally, cloud hosting providers often include automated backups, disaster recovery, and robust monitoring tools, giving you peace of mind and freeing you to focus on growing your site. If you want to future-proof your website, handle traffic spikes effortlessly, and enjoy a more reliable hosting experience, cloud hosting is the logical next step after shared hosting."
    },
    {
      question: "Will my website experience downtime during migration to cloud hosting?",
      answer: "One of the biggest concerns for website owners is the risk of downtime during migration. The good news is that with proper planning and expert support, downtime can be minimized or even eliminated. The migration process typically involves creating a full backup of your website, transferring files and databases to the new cloud server, and thoroughly testing the site before making the final switch. A well-executed migration ensures that your current site remains live until the new environment is fully ready. DNS changes are made during off-peak hours to further reduce any potential disruption. For most users, the switch is seamless—visitors won't notice any interruption, and search engine rankings are preserved. To ensure a smooth transition, always choose a migration service that provides a detailed migration plan, testing, and post-migration support."
    },
    {
      question: "How do I migrate my emails and databases from shared hosting to cloud hosting?",
      answer: "Migrating emails and databases is a crucial part of the hosting transition process. For databases, the process involves exporting your current database (such as MySQL or PostgreSQL), importing it into the new cloud environment, and updating your website's configuration files to point to the new database location. This ensures all your data, including user accounts and content, is preserved. Email migration depends on how your current hosting provider manages email. If your emails are hosted with your shared hosting provider, you'll need to create the same email accounts on your new cloud host and transfer your messages using IMAP sync tools or by downloading and re-uploading mailboxes. Some cloud hosting providers offer integrated email migration tools or guides to streamline the process. It's important to plan your migration carefully, back up all data, and test everything in the new environment before updating your DNS records."
    },
    {
      question: "Is cloud hosting more expensive than shared hosting?",
      answer: "While the upfront monthly cost of cloud hosting can be higher than entry-level shared hosting, the value and long-term savings often outweigh the initial investment. Cloud hosting provides dedicated resources, better performance, and enhanced security, which can lead to higher conversion rates, lower bounce rates, and reduced downtime costs for your business. With cloud hosting, you only pay for the resources you use, which means you can scale up during busy periods and scale down when traffic is low. This flexibility prevents overpaying for unused capacity and allows your hosting expenses to align with your business growth. Additionally, many cloud hosts offer transparent pricing with no hidden fees, so you can budget more effectively. For growing websites or businesses that rely on their online presence, the improved reliability and performance of cloud hosting often result in a better return on investment compared to shared hosting."
    },
    {
      question: "What steps should I take before migrating my website to cloud hosting?",
      answer: "To ensure a successful migration, follow these essential steps: 1. Backup everything: Save copies of your website files, databases, and emails. 2. Audit your site: Check for outdated plugins, themes, or custom code that may not be compatible with the new environment. 3. Choose the right cloud hosting plan: Assess your current and future needs to select a plan that fits your traffic and resource requirements. 4. Test in a staging environment: Before going live, test your site in a staging area to catch any issues early. 5. Update DNS settings: Once migration is complete and tested, update your domain's DNS records to point to the new server. 6. Monitor performance: After launch, monitor your site for any errors or performance issues and address them promptly. By preparing thoroughly and working with experienced migration experts, you'll ensure a smooth transition with minimal risk."
    },
    {
      question: "How does cloud hosting improve website security compared to shared hosting?",
      answer: "Cloud hosting offers several security advantages over traditional shared hosting. In shared environments, multiple websites reside on the same server, which can make your site vulnerable if another site on the server is compromised. Cloud hosting, however, provides isolated environments for each website, reducing the risk of cross-site contamination. Additionally, cloud hosts often include advanced firewalls, automated malware scanning, DDoS protection, and regular security updates as part of their service. Many also offer easy integration with SSL certificates, two-factor authentication, and robust backup solutions. These features collectively safeguard your data and ensure business continuity. For businesses handling sensitive data or e-commerce transactions, the enhanced security of cloud hosting is a critical upgrade."
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
            Everything you need to know about migrating from shared hosting to cloud hosting
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-600 flex-shrink-0`} aria-hidden="true"></i>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    <p>{faq.answer}</p>
                    {index < 5 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link 
                            to="/calculator" 
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold text-sm"
                          >
                            <i className="fas fa-calculator mr-2" aria-hidden="true"></i>
                            Calculate Migration Time
                          </Link>
                          <a 
                            href="https://www.cloudways.com/en/?id=1384181" 
                            target="_blank" 
                            rel="noopener"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold text-sm"
                          >
                            <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
                            Start Free Assessment
                          </a>
                        </div>
                      </div>
                    )}
                    {index >= 5 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a 
                          href="https://www.cloudways.com/en/?id=1384181" 
                          target="_blank" 
                          rel="noopener"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
                        >
                          <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
                          Get Your Free Migration Assessment
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Benefits of Cloud Hosting?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Use our tools, get your free assessment, and take the next step towards a faster, more secure website!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/calculator" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              <i className="fas fa-calculator mr-2" aria-hidden="true"></i>
              Use Migration Calculator
            </Link>
            <a 
              href="https://www.cloudways.com/en/?id=1384181" 
              target="_blank" 
              rel="noopener"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              <i className="fas fa-cloud mr-2" aria-hidden="true"></i>
              Start Free Cloud Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
