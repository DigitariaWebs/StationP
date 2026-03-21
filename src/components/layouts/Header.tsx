"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour l'effet de sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Comment ça marche", href: "#comment-ca-marche" },
    { name: "Trouver une borne", href: "#trouver" },
    { name: "Devenir Hôte", href: "#inscription" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <Image
            src="/w1.png"
            alt="StreetCharge Logo"
            width={150}
            height={40}
            className="w-32 lg:w-40 h-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-900 hover:text-[#4A7C44] transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#4A7C44] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-md hover:scale-105 active:scale-95">
            Connexion
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden relative z-50 p-2 text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE NAV OVERLAY */}
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
                className="text-2xl font-bold text-zinc-900 hover:text-[#4A7C44]"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 bg-[#4A7C44] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg">
              Connexion
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}