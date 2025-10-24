import { useState } from 'react';
import { ChevronDown, ChevronUp, } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>('Introduction');

  const toggleSection = (section: string) => {
  setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'Introduction',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            At Bariq, we value your privacy and are committed to protecting your personal information. This Privacy 
            and Refund Policy outlines how we collect, use, and safeguard your data when you visit our website or 
            make a purchase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you agree to the terms outlined in this policy. We encourage you to read this 
            document carefully to understand our practices regarding your personal information and how we will treat it.
          </p>
        </div>
      )
    },
    {
      id: 'Data Collection',
      title: 'Data Collection',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We collect information that you provide directly to us, including your name, email address, shipping 
            address, payment information, and phone number when you make a purchase or create an account.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also automatically collect certain information about your device when you use our website, including 
            your IP address, browser type, operating system, and browsing behavior.
          </p>
        </div>
      )
    },
    {
      id: 'Data Security',
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized 
            access, disclosure, alteration, or destruction. All payment transactions are processed through secure, 
            encrypted connections.
          </p>
          <p className="text-gray-600 leading-relaxed">
            While we strive to protect your data, no method of transmission over the internet is completely secure. 
            We cannot guarantee absolute security but continually work to maintain the safety of your information.
          </p>
        </div>
      )
    },
    {
      id: 'Cookies & Tracking',
      title: 'Cookies & Tracking',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
            and understand where our visitors are coming from. You can control cookie settings through your browser 
            preferences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Third-party services we use may also place cookies on your device. These include analytics tools and 
            advertising partners that help us improve our services and reach potential customers.
          </p>
        </div>
      )
    },
    {
      id: 'Refund Eligibility',
      title: 'Refund Eligibility',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We want you to be completely satisfied with your purchase. Items are eligible for return within 30 days 
            of delivery if they are unused, in their original condition, and in original packaging.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Custom-designed pieces and personalized jewelry cannot be returned or exchanged unless there is a 
            manufacturing defect. All sale items are final sale and not eligible for return.
          </p>
        </div>
      )
    },
    {
      id: 'Refund Process',
      title: 'Refund Process',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            To initiate a return, please contact our customer service team at support@bariq.com with your order 
            number and reason for return. We will provide you with a return authorization and shipping instructions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Once we receive and inspect your return, we will process your refund to the original payment method. 
            Please note that shipping costs are non-refundable unless the return is due to our error.
          </p>
        </div>
      )
    },
    {
      id: 'Refund Timelines',
      title: 'Refund Timelines',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Refunds are typically processed within 5-7 business days after we receive your returned item. Please 
            allow an additional 3-5 business days for the refund to appear in your account, depending on your 
            financial institution.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you have not received your refund after this timeframe, please contact your bank or credit card 
            company first, then reach out to our customer service team for assistance.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Privacy & Refund Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: June 15, 2023</p>
        </div>

        {/* Accordion Sections */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {sections.map((section, index) => (
            <div key={section.id} className={index !== sections.length - 1 ? 'border-b' : ''}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{section.title}</span>
                {openSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openSection === section.id && (
                <div className="px-6 pb-6 pt-2">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600 mb-4">
            If you have any questions about our Privacy & Refund Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-800">
            <p><span className="font-semibold">Email:</span> support@bariq.com</p>
            <p><span className="font-semibold">Phone:</span> +20 1234567890</p>
            <p><span className="font-semibold">Hours:</span> Sunday-Thursday, 9am-5pm EST</p>
          </div>
        </div>
      </main>
    </>
  );
}