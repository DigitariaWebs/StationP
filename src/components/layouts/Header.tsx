"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const scrollToForm = () => {
    close();
    setTimeout(() => {
      document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
    }, isOpen ? 300 : 0);
  };

  const navLinks = [
    { label: t.header.nav.how, href: "#comment-ca-marche" },
    { label: t.header.nav.faq, href: "#faq" },
  ];

  const LangSwitch = ({ variant }: { variant: "desktop" | "mobile" }) => {
    const base =
      variant === "desktop"
        ? `flex items-center rounded-full border text-[11px] font-bold overflow-hidden transition-colors ${
            scrolled
              ? "border-zinc-200 bg-white"
              : "border-white/40 bg-white/10 backdrop-blur-md"
          }`
        : "flex items-center rounded-full border border-zinc-200 bg-white text-xs font-bold overflow-hidden";

    const btnClass = (active: boolean) => {
      if (variant === "desktop") {
        if (active) {
          return scrolled
            ? "bg-[#4A7C44] text-white px-3 py-1.5"
            : "bg-white text-[#4A7C44] px-3 py-1.5";
        }
        return scrolled
          ? "text-zinc-600 hover:text-[#4A7C44] px-3 py-1.5"
          : "text-white/85 hover:text-white px-3 py-1.5";
      }
      return active
        ? "bg-[#4A7C44] text-white px-3 py-1.5"
        : "text-zinc-600 hover:text-[#4A7C44] px-3 py-1.5";
    };

    return (
      <div
        role="group"
        aria-label={t.header.switchLabel}
        className={base}
      >
        {(["fr", "nl"] as Locale[]).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`uppercase transition-colors ${btnClass(locale === l)}`}
          >
            {l}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-0 pt-4 lg:pt-5">
        <div
          className={`w-full h-16 min-h-16 max-h-16 flex items-center justify-between rounded-2xl pl-1 pr-4 lg:pr-6 transition-all duration-300 overflow-hidden ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border border-zinc-100"
              : "bg-white lg:bg-white/10 lg:backdrop-blur-md border border-zinc-100 lg:border-white/25 shadow-sm lg:shadow-none"
          }`}
        >
          <Link href="/" className="shrink-0 flex items-center h-full">
            <span className="relative block h-16 w-60 lg:w-64 overflow-hidden">
            <Image
              src="/w1.png"
              alt="StreetCharge"
              fill
              sizes="(min-width: 1024px) 256px, 240px"
              className="object-cover object-left scale-95 transition-all duration-300"
              priority
            />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-zinc-600 hover:text-[#4A7C44]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <LangSwitch variant="desktop" />
            <button
              onClick={scrollToForm}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md ${
                scrolled
                  ? "bg-[#4A7C44] text-white hover:bg-[#3a6235] shadow-[#4A7C44]/20"
                  : "bg-white text-[#4A7C44] hover:bg-white/90"
              }`}
            >
              {t.header.signup}
            </button>
          </nav>

          {/* Mobile: lang switch + burger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangSwitch variant="mobile" />
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={t.header.openMenu}
              className="p-2 rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.header.menuDialog}
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition-all duration-300 ease-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100">
          <div className="relative h-16 w-44 overflow-hidden">
            <Image
              src="/w1.png"
              alt="StreetCharge"
              fill
              sizes="176px"
              className="object-cover object-left scale-125"
            />
          </div>
          <div className="flex items-center gap-2">
            <LangSwitch variant="mobile" />
            <button
              onClick={close}
              aria-label={t.header.closeMenu}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="text-2xl font-black text-zinc-900 hover:text-[#4A7C44] py-5 border-b border-zinc-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-10 pt-6 space-y-3">
          <button
            onClick={scrollToForm}
            className="w-full bg-[#4A7C44] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#3a6235] transition-all shadow-lg active:scale-95"
          >
            {t.header.signupFree}
          </button>
          <p className="text-center text-xs text-zinc-400 font-medium">
            {t.header.noCommitment}
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/30 lg:hidden"
          onClick={close}
        />
      )}
    </>
  );
}
