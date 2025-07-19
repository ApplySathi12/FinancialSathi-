'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" style={{ fontFamily: '"Pacifico", serif' }}>
                  Financial Sathi
                </h1>
              </Link>
            </div>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Financial Sathi's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Financial Sathi is a financial comparison platform that helps users:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Compare credit cards, loans, and financial products</li>
                <li>Get AI-powered recommendations</li>
                <li>Access financial tools and calculators</li>
                <li>Connect with financial institutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Keep your account information secure</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to breach security or access unauthorized areas</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Financial Product Applications</h2>
              <p className="text-gray-700 mb-4">
                When you apply for financial products through our platform:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Applications are processed by respective financial institutions</li>
                <li>We act as an intermediary and do not guarantee approval</li>
                <li>Final terms and conditions are determined by the financial institution</li>
                <li>We may receive compensation from partners for successful applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Accuracy of all information displayed</li>
                <li>Approval of any financial product application</li>
                <li>Uninterrupted service availability</li>
                <li>Specific financial outcomes or benefits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Financial Sathi shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our service are owned by Financial Sathi 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to our services immediately, 
                without prior notice, for conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: legal@financialsathi.com<br/>
                  Phone: +91-XXXX-XXXX-XX<br/>
                  Address: [Your Company Address]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Financial Sathi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}