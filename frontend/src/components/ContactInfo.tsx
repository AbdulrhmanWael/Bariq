import { Instagram, Facebook, Twitter } from 'lucide-react';



export default function ContactInfo() {
 return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        {/* Call Us */}
        <div className="flex items-start">
          <div className="shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="text-gray-900 font-medium">+20 134 567890</p>
            <p className="text-sm text-gray-500 mt-1">
              Customer support available Sunday–Thursday, 9am–6pm EST
            </p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-start">
          <div className="shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="text-gray-900 font-medium">contact@bariq.com</p>
            <p className="text-sm text-gray-500 mt-1">For general inquiries</p>
            <p className="text-gray-900 font-medium mt-2">support@bariq.com</p>
            <p className="text-sm text-gray-500">For order support and returns</p>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors">
              <Instagram className="w-5 h-5 text-gray-700" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors">
              <Facebook className="w-5 h-5 text-gray-700" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors">
              <Twitter className="w-5 h-5 text-gray-700" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
