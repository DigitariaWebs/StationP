"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    setIsOpen(false);
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Comment ça marche", href: "#comment-ca-marche" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/w1.png"
            alt="StreetCharge"
            width={150}
            height={40}
            className="w-32 lg:w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={scrollToForm}
            className="bg-[#4A7C44] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-md hover:scale-105 active:scale-95"
          >
            S'inscrire
          </button>
        </nav>

        {/* Burger mobile */}
        <button
          className="lg:hidden relative z-50 p-2 text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-zinc-900 hover:text-[#4A7C44] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToForm}
              className="mt-4 bg-[#4A7C44] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-zinc-900 transition-all"
            >
              S'inscrire
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
