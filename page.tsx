"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReload,setIsReload] = useState(true)

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(()=>setIsReload(false),1000)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const features = [
    "Premium Quality",
    "Sustainable Packaging",
    "Natural Ingredients",
    "Eco-friendly",
    "Award Winning Design",
  ];

  const products = [
    {
      name: "Classic Edition",
      image: "https://iili.io/2LcRRCg.png",
      description: "Our signature bottle design with premium finish"
    },
    {
      name: "Eco Collection",
      image: "https://iili.io/2LccGB1.png",
      description: "Made from 100% recycled materials"
    },
    {
      name: "Limited Edition",
      image: "https://iili.io/2LcY4Pn.png",
      description: "Special release with unique patterns"
    }

  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-2xl">BOTOL</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="#features" className="text-gray-700 hover:text-gray-900">Features</Link>
              <Link href="#products" className="text-gray-700 hover:text-gray-900">Products</Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#" className="block px-3 py-2 text-gray-700">Home</Link>
              <Link href="#features" className="block px-3 py-2 text-gray-700">Features</Link>
              <Link href="#products" className="block px-3 py-2 text-gray-700">Products</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700">Contact</Link>
            </div>
          </div>
        )}
      </nav>


      <div className="h-screen relative overflow-hidden flex items-center justify-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
          className={`transition-transform duration-1000 ${
            isScrolled || isReload ? "translate-y-32" : "translate-y-0"
          }`}
        >
          <img
            src="https://iili.io/2LaoGGp.png"
            alt="Bottle Cap"
            className="w-24 mx-auto"
          />
          </div>


          <h6
            className={`text-4xl md:text-6xl font-bold text-center mt-8 transition-all duration-1000 ${
              isScrolled || isReload ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
            }`}
          >
            The Ultimate Companion for Hydration
          </h6>
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "translate-y-0" : "translate-y-full"
            }`}
          >

            <img
              src="https://iili.io/2Lae4gR.png"
              alt="Bottle"
              className="w-20 mx-auto"
            />
          </div>

          {/* <img
              src="https://iili.io/2Lae4gR.png"
              alt="Bottle"
              className="w-20 mx-auto"
            /> */}

        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between relative gap-8">
      {/* Our Story Section */}
      <div className="flex-1 bg-[#f8e5d8] p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
        Crafted with precision and care, our bottles represent the perfect blend of form and function. Each piece is a testament to our commitment to quality and sustainability—a promise we uphold in every detail, ensuring that every bottle not only serves its purpose but also reflects our dedication to a better, more sustainable future.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative z-10">
        <img
          src="https://iili.io/2LaILts.png"
          alt="Bottle"
          className="w-20 md:w-32 lg:w-48"
        />
      </div>

      {/* Features Section */}
      <div className="flex-1 bg-gray-800 p-12 rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

      {/* Products Section */}
      <div id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Hydration Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">BOTOL</h3>
              <p className="text-gray-400">
                Premium quality bottles for the modern lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@botol.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 BOTOL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
