import { Store, Mail, Phone, MapPin } from 'lucide-react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Store className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">TrueHorizon</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products, designed for those who appreciate quality and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Store className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">TrueHorizon</span>
              </div>
              <p className="text-gray-600">
                Delivering premium quality products that elevate your lifestyle.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:contact@truehorizon.com" className="hover:text-blue-600">
                    contact@truehorizon.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+1234567890" className="hover:text-blue-600">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>123 Business Street, Suite 100<br />City, State 12345</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9AM - 6PM</li>
                <li>Saturday: 10AM - 4PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} TrueHorizon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;