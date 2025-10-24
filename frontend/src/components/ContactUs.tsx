import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <div>
      <div className="bg-linear-to-r from-pink-200 via-pink-300 to-pink-200 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Reach out with any questions about our
          accessories or for assistance with your order.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
