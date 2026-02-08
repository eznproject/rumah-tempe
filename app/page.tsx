"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function RumahTempePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fungsi Toggle Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
      {/* Head Assets */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .glass-nav {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.95);
          transition: all 0.3s ease;
        }
        .dark .glass-nav {
          background-color: rgba(15, 23, 42, 0.95);
        }
        .glass-nav.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .dark .glass-nav.scrolled {
          background-color: rgba(15, 23, 42, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .hero-pattern {
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(211, 31, 31, 0.05) 1px,
            transparent 0
          );
          background-size: 24px 24px;
        }
        @media (max-width: 768px) {
          .hero-pattern {
            background-size: 16px 16px;
          }
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 w-full z-50 glass-nav border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex items-center gap-3">
              {/* PERBAIKAN: Ganti dengan URL gambar yang valid */}
              <div className="relative w-32 h-12 md:w-40 md:h-16">
                <Image
                  alt="Logo Rumah Tempe Sepande"
                  src="/RT-LOGO.png"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    console.log("Gambar logo tidak ditemukan");
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    // Tambahkan fallback text
                    const fallback = document.createElement("div");
                    fallback.className =
                      "text-[#D31F1F] font-bold text-lg md:text-xl";
                    fallback.textContent = "Rumah Tempe Sepande";
                    target.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
                  close
                </span>
              ) : (
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
                  menu
                </span>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
              <a
                className="hover:text-[#D31F1F] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="#beranda"
              >
                Beranda
              </a>
              <a
                className="hover:text-[#D31F1F] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="#tentang"
              >
                Tentang Kami
              </a>
              <a
                className="hover:text-[#D31F1F] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="#produk"
              >
                Produk
              </a>
              <a
                className="hover:text-[#D31F1F] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="#edukasi"
              >
                Edukasi
              </a>
              <a
                className="hover:text-[#D31F1F] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                href="#testimoni"
              >
                Testimoni
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {!isDarkMode ? (
                  <span className="material-symbols-outlined text-slate-600">
                    dark_mode
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-yellow-400">
                    light_mode
                  </span>
                )}
              </button>
              <a
                className="bg-[#D31F1F] text-white px-5 py-2.5 rounded-full hover:bg-[#8B1A1A] transition-all shadow-md hover:shadow-lg font-medium"
                href="#kontak"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-4 rounded-xl shadow-lg p-4">
              <div className="flex flex-col space-y-3">
                <a
                  className="hover:text-[#D31F1F] transition-colors px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  href="#beranda"
                  onClick={toggleMenu}
                >
                  Beranda
                </a>
                <a
                  className="hover:text-[#D31F1F] transition-colors px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  href="#tentang"
                  onClick={toggleMenu}
                >
                  Tentang Kami
                </a>
                <a
                  className="hover:text-[#D31F1F] transition-colors px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  href="#produk"
                  onClick={toggleMenu}
                >
                  Produk
                </a>
                <a
                  className="hover:text-[#D31F1F] transition-colors px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  href="#edukasi"
                  onClick={toggleMenu}
                >
                  Edukasi
                </a>
                <a
                  className="hover:text-[#D31F1F] transition-colors px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  href="#testimoni"
                  onClick={toggleMenu}
                >
                  Testimoni
                </a>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    {!isDarkMode ? (
                      <span className="material-symbols-outlined text-slate-600">
                        dark_mode
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-yellow-400">
                        light_mode
                      </span>
                    )}
                  </button>
                  <a
                    className="bg-[#D31F1F] text-white px-5 py-2.5 rounded-full hover:bg-[#8B1A1A] transition-all font-medium"
                    href="#kontak"
                    onClick={toggleMenu}
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        className="relative pt-28 md:pt-32 lg:pt-48 pb-16 md:pb-20 lg:pb-32 overflow-hidden hero-pattern"
        id="beranda"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-red-50/30 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-red-950/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 px-4 py-2 rounded-full border border-[#D31F1F]/20">
                <span className="flex h-2 w-2 rounded-full bg-[#D31F1F] animate-pulse"></span>
                <span className="text-sm font-semibold text-[#D31F1F] uppercase tracking-wider">
                  Higiene Terjamin & Nutrisi Tinggi
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                Warisan Tradisi dengan{" "}
                <span className="text-[#D31F1F]">Kualitas Modern</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Rumah Tempe Sepande menghadirkan tempe berkualitas premium yang
                diproses secara higienis dengan teknologi terkini.
                Mempertahankan nutrisi alami kedelai untuk mendukung gaya hidup
                sehat keluarga Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#D31F1F] text-white font-bold rounded-xl shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  href="#produk"
                >
                  <span className="material-symbols-outlined text-lg">
                    storefront
                  </span>
                  Lihat Produk
                </a>
                <a
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                  href="#edukasi"
                >
                  <span className="material-symbols-outlined">school</span>
                  Program Edukasi
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-[#D31F1F]">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Pelanggan
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-[#D31F1F]">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Varian Produk
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-[#D31F1F]">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Higienis
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-[#D31F1F]">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Support
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-[#D31F1F]/10 rounded-full blur-3xl"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white dark:border-slate-800 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Fresh Tempeh Production"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgW1kHqYtYrOwFORXDO_QM9dGbwzj2OWn-DgyF0h3QvjEZOV2WJhVivIecdTfr7XkG3eo3M8XpHrrfv8b6eJNcsb2_UR_DAjQ5CxioagMldlZm2tL3Q_gUJai0XFLFzLvGfbu0nHgoPMANlTs8T2RTilmMxCTxMEldCens6p17l0xqDkctWUR0ouLVg1j1_wTlC5Q124q6uyHddZ01C8_n9nczHi2vDoI_kqD5CrfeGHiFPGzZTyfztouF1fXyL58WHHguwSwwQC7"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TENTANG KAMI --- */}
      <section
        className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
        id="tentang"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <img
                  alt="Tempe Production Process"
                  className="rounded-xl sm:rounded-2xl shadow-lg h-48 sm:h-64 w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAPMgKVbC-CjmsVqjDrNlI6Q_hQKg7wvmh8tnyauovzavDzyGi5XIMalXDUV4pA0X0Mn5YQJyYuS_J6HQMan2exqHMEfpXG3jKtyZkpO1uUbjG4smodRefJl-_0KHVFES3ika8zC07_zvJ6LN-a5BQ69iltv0sBg6jLpueoSysDQX7HE85S0HYJDiM6hyigwbvocOlGOtPAMUtnOkRxV73J4eaqX6eYQrhAbdBRS8FtwuzWk9KuSbw2shoFkP9RoW8Wb7kIkgdtdq"
                  loading="lazy"
                />
                <img
                  alt="Healthy Soybean Ingredients"
                  className="rounded-xl sm:rounded-2xl shadow-lg h-40 sm:h-48 w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEAFzD4tnAyw-8w-QJCGg_1xDQ8yCyae_PC1axI8k26fxDR4xUFjXr15yyjf55_hhoQcd0tUfQD39cqEwNX2jQq95jbLPIgSi5onAYSHbNxng4sND5jIUI1UaKx-Pd4NPAmoeL8OsItpAB5QmJ9BUn3pk4g-B77ykSR1gkx4QVuE3yopqzTcsEstbzIcNBhnYvousvcsm9dQ4H1_GzJ-LZGV-5GYTle3ol6P11Sq8hMH5yS6cxO16M3F3VBNkdF9tiSQe-Hu2cAgR-"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <img
                  alt="Organic Soybeans"
                  className="rounded-xl sm:rounded-2xl shadow-lg h-40 sm:h-48 w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVFxba-TcKVyyIFl7wX1K0AiyDi9zadgOVEhuH0H4V2m0FaXao8x3ikhAwHpaxxMHZeBpW9z3_J5POnKbHusuHI0dDB0b3PUIvZbwPM7TUly2XImsBkEoOuh1eER3HI5C5c4geW2Iu4a93FpbSOVegxyQ0XXrU2veUBqQrbKF56P8KRnzN54I5qIIU3V8P2IPGr4ipUG6xQid0-YHboWEegScb1QHxaEQA0u9mqqqngbJZolR-YVgj6um-MtP64ZHyvnbPTwCrT23F"
                  loading="lazy"
                />
                <img
                  alt="Vegetarian Food"
                  className="rounded-xl sm:rounded-2xl shadow-lg h-48 sm:h-64 w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI8eh-W2AzddEfrJ966Tg0KYfUH9gNburNlytntbNiBWu6BlawcQ-5lhVQeM-ZkkzEcZYk8AE93U0l1jBcOyBmeNe3uvDE-hD82t0_hSGRNWYjS4oRymTwa2TEVueiBxmyQFKk0MO06HoLgtsJuAH_SdThqhZZrLahsoe1Ua7ar7nPKtJE1jYWsNhwtwIr2BOsZAmYat0S372wxaDteV7p5mCJ8ji-DmuTudd-UCrtgdkte9K3TrVq4el5criTBbUOxniLtbOszdLt"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-[#D31F1F] font-bold tracking-widest uppercase text-sm mb-3">
                  Tentang Kami
                </h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  Standar Baru Produksi Tempe Higienis
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                  Sejak 2015, Rumah Tempe Sepande berkomitmen menghadirkan tempe
                  dengan kualitas premium melalui proses produksi yang
                  mengedepankan kebersihan dan teknologi modern. Kami
                  menggunakan kedelai pilihan non-GMO dan ragi berkualitas
                  tinggi untuk menghasilkan tempe dengan tekstur padat, aroma
                  khas, dan kandungan gizi optimal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-[#D31F1F] bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      verified
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Teruji Klinis</h4>
                    <p className="text-sm text-slate-500">
                      Setiap batch produk melalui uji laboratorium untuk
                      memastikan bebas dari bakteri berbahaya dan kontaminan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-[#D31F1F] bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      eco
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kedelai Pilihan</h4>
                    <p className="text-sm text-slate-500">
                      Hanya menggunakan kedelai lokal berkualitas tinggi,
                      non-GMO, dan bebas dari pestisida berbahaya.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-[#D31F1F] bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      diversity_3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kemitraan Petani</h4>
                    <p className="text-sm text-slate-500">
                      Bekerja sama dengan petani lokal untuk mendukung
                      perekonomian dan menjamin ketersediaan bahan baku
                      berkualitas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-[#D31F1F] bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                      local_shipping
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pengiriman Cepat</h4>
                    <p className="text-sm text-slate-500">
                      Sistem pendingin khusus untuk menjaga kesegaran produk
                      selama pengiriman ke seluruh wilayah Sidoarjo dan
                      sekitarnya.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#proses"
                  className="inline-flex items-center gap-2 text-[#D31F1F] font-semibold hover:gap-3 transition-all"
                >
                  Pelajari Proses Produksi Kami
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUK --- */}
      <section className="py-16 md:py-24" id="produk">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D31F1F] font-bold tracking-widest uppercase text-sm mb-3">
              Katalog Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Varian Tempe Terbaik
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
              Temukan beragam produk tempe premium kami yang cocok untuk
              berbagai kebutuhan kuliner dan gaya hidup sehat.
            </p>
          </div>

          {/* Product Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-5 py-2 bg-[#D31F1F] text-white rounded-full font-medium">
              Semua Produk
            </button>
            <button className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Tempe Segar
            </button>
            <button className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Olahan Tempe
            </button>
            <button className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Paket UMKM
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProductCard
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuASZVuZ3OKNOVTLeSBgvRS45Lkt_7ina20tQMYaQ1eDfj2o5NMdGTwQbszvIPyDuGk11RM9w8YQM7W2qCX17HmSXE7O8Ga0NkrP3MicRXAlpEEt6tSWybckd_EekjcYTwoh_CvJrKdO6oHhkp-EeUg5huBebj_hngRxiDzHbTM_zwx3EQVV0mo1EnV8h28zu2MoyNm6LrjUUkxQBgJoj8q4q_qVyUrIsJn2gDRILMhrjHePWnhSC43OLB2hpHBqn9VvIwWfVtYx8NbB"
              title="Tempe Daun Premium"
              description="Tempe fermentasi sempurna dibungkus daun pisang untuk aroma alami"
              price="Rp 15.000"
              weight="500 gram"
              badge="BEST SELLER"
              features={[
                "Fermentasi 48 jam",
                "Aroma khas daun",
                "Tanpa pengawet",
              ]}
            />
            <ProductCard
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCisKu6xgyPjttnBd5vjmQ8MyzI2jiq6ATgr3NEVa-c5bMhska-VQtTbRfgxC-ju6iXbAwuyGYV-vF6l3ruaTKe3V-KxOKpKLGj89XT2u6Gyij_456-kSvM8gZwyaPPWotxt54EVpeH8doPeXWScBG9X8sHGZw-6kvSVfXA2vpg8PGC0jXPS4M_xlxuzKA5f5-Fm-MH2C0nJ20PxCrM_tZscllbjp9FghwfHk9ps6IQXcIpSBYpodCi2st2MQQbTiqEl_PfvN_3U7-o"
              title="Keripik Tempe Original"
              description="Keripik tempe renyah dengan bumbu tradisional pilihan"
              price="Rp 25.000"
              weight="250 gram"
              badge="FAVORIT"
              features={[
                "Renyah tahan lama",
                "Bumbu tradisional",
                "Kemasan kedap udara",
              ]}
            />
            <ProductCard
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBLScog4mvf8m7iGHL7XCh-3V105u1-wZbYtZN6s37mM7jPJGL2b-fKxMnKHo9alMfgt6hr0oWlH1dsLattzZ34fo0kwRTEVyD1RboeFilbscwN3XA5tJiDDIdTVfReePoEjgp5Zga_1AXHdmsz-6wVIflLTh3rawW2lh7PDJMSPLTbdLLM0fUEMLF_3LOxrCRpGF5vr4b07gJE8OL6xnYk9cykQ9sSZ-b3oqVGhBKXnkSEwAhst30NVT4xo_R4EXYB0kG0xzkUn_qm"
              title="Tempe Organik Plastik"
              description="Tempe higienis dengan kemasan food grade untuk ketahanan lebih lama"
              price="Rp 12.000"
              weight="400 gram"
              features={[
                "Kemasan food grade",
                "Tahan 7 hari",
                "Higienis maksimal",
              ]}
            />
            <ProductCard
              img="https://images.unsplash.com/photo-1625943553857-96f53e6d6c7c?w=500&h=500&fit=crop"
              title="Tempe Frozen Ready-to-Cook"
              description="Tempe siap masak dalam kemasan frozen untuk penyimpanan praktis"
              price="Rp 18.000"
              weight="500 gram"
              features={["Siap masak", "Tahan 1 bulan", "Praktis"]}
            />
            <ProductCard
              img="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=500&fit=crop"
              title="Paket Tempe untuk Restoran"
              description="Paket khusus untuk kebutuhan usaha kuliner dengan harga grosir"
              price="Rp 150.000"
              weight="10 kg"
              badge="GROSIR"
              features={[
                "Harga spesial",
                "Pengiriman rutin",
                "Kualitas konsisten",
              ]}
            />
            <ProductCard
              img="https://images.unsplash.com/photo-1591382386627-349b692688ff?w=500&h=500&fit=crop"
              title="Tempe Spesial Diet"
              description="Tempe rendah sodium untuk program diet dan kesehatan khusus"
              price="Rp 20.000"
              weight="300 gram"
              badge="SEHAT"
              features={["Rendah sodium", "Protein tinggi", "Cocok untuk diet"]}
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="#semua-produk"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#D31F1F] text-[#D31F1F] font-bold rounded-xl hover:bg-[#D31F1F] hover:text-white transition-all"
            >
              Lihat Semua Produk
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- PROSES PRODUKSI --- */}
      <section
        className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
        id="proses"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D31F1F] font-bold tracking-widest uppercase text-sm mb-3">
              Proses Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Dari Kedelai Menjadi Tempe Premium
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Setiap langkah dalam proses produksi kami dijamin higienis dan
              terkontrol untuk menghasilkan tempe dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStep
              number="01"
              title="Seleksi Kedelai"
              description="Kedelai lokal pilihan melalui proses seleksi ketat untuk memastikan kualitas"
              icon="filter_alt"
            />
            <ProcessStep
              number="02"
              title="Perebusan & Pengupasan"
              description="Proses higienis untuk menghilangkan kulit dan mematikan enzim anti-nutrisi"
              icon="clean_hands"
            />
            <ProcessStep
              number="03"
              title="Fermentasi Terkontrol"
              description="Fermentasi dalam ruangan terkontrol suhu dan kelembaban optimal"
              icon="device_thermostat"
            />
            <ProcessStep
              number="04"
              title="Pengemasan Steril"
              description="Pengemasan dalam kondisi steril untuk menjaga kesegaran produk"
              icon="inventory_2"
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONI --- */}
      <section className="py-16 md:py-24" id="testimoni">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D31F1F] font-bold tracking-widest uppercase text-sm mb-3">
              Testimoni
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Kata Pelanggan Kami
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Bu Sari"
              role="Pemilik Warung Makan"
              text="Sejak pakai tempe dari Rumah Tempe Sepande, pelanggan saya selalu komplain kalo gak pake tempe mereka. Kualitasnya konsisten!"
              rating={5}
            />
            <TestimonialCard
              name="Pak Agus"
              role="Chef Restoran"
              text="Tekstur tempenya padat dan aroma fermentasinya pas. Cocok banget untuk berbagai kreasi masakan di restoran saya."
              rating={5}
            />
            <TestimonialCard
              name="Ibu Maya"
              role="Ibu Rumah Tangga"
              text="Anak-anak saya yang biasanya susah makan protein, sekarang suka banget sama tempe dari sini. Terima kasih Rumah Tempe!"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* --- EDUKASI --- */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-[#D31F1F] via-[#B91C1C] to-[#8B1A1A] text-white overflow-hidden relative"
        id="edukasi"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping"></span>
              <span className="font-bold uppercase text-sm text-yellow-200">
                Experience Learning
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="block mb-2">Belajar Langsung dari</span>
              <span className="text-yellow-300">Ahli Tempe Berpengalaman</span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Tidak hanya teori, tapi{" "}
              <span className="font-bold text-yellow-200">
                praktek langsung
              </span>{" "}
              dibimbing Pak Pon dengan pengalaman 20+ tahun dalam produksi tempe
              higienis
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Pricing & Features */}
            <div className="space-y-8">
              {/* Guarantee Badge */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-yellow-400 text-3xl">
                    verified_user
                  </span>
                  <div>
                    <h4 className="font-bold text-lg">
                      Garansi Pemahaman 100%
                    </h4>
                    <p className="text-red-100 text-sm">
                      Bingung setelah sesi? Gratis konsultasi lanjutan via
                      WhatsApp!
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-400">
                    library_books
                  </span>
                  Pilih Paket Belajar Anda
                </h3>

                {/* Package 1 - Basic */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span className="text-yellow-300 font-bold text-sm uppercase">
                          Paket Dasar
                        </span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          Terpopuler
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">
                        Kunjungan + Materi
                      </h4>
                      <p className="text-red-100 text-sm">
                        Cocok untuk siswa & mahasiswa
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Rp 5.000</div>
                      <div className="text-sm text-red-100">/orang</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Tour fasilitas produksi modern
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Materi dari Pak Pon langsung
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Sesi tanya jawab interaktif
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-yellow-500 group-hover:text-slate-900">
                    <span>Pilih Paket Ini</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>

                {/* Package 2 - Premium */}
                <div className="group bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400/50 hover:border-yellow-300 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 bg-yellow-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm rotate-12">
                    BEST VALUE
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span className="text-yellow-300 font-bold text-sm uppercase">
                          Paket Premium
                        </span>
                        <span className="text-xs bg-yellow-400/30 px-2 py-1 rounded-full">
                          Paling Diminati
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">
                        Full Experience
                      </h4>
                      <p className="text-yellow-100 text-sm">
                        Kunjungan + Praktek + Tempe Gratis
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Rp 10.000</div>
                      <div className="text-sm text-yellow-100">/orang</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-yellow-400 text-sm">
                        stars
                      </span>
                      <span className="text-sm font-semibold">
                        Semua benefit Paket Dasar
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-yellow-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Praktek langsung: Penyaringan & Fermentasi
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-yellow-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Pengemasan tempe hasil praktek (bawa pulang)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-yellow-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Sertifikat partisipasi digital
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                    <span>Pilih Paket Terbaik</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>

                {/* Package 3 - Ultimate */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span className="text-red-300 font-bold text-sm uppercase">
                          Paket Ultimate
                        </span>
                        <span className="text-xs bg-red-400/30 px-2 py-1 rounded-full">
                          Complete Package
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">
                        Experience + Souvenir
                      </h4>
                      <p className="text-red-100 text-sm">
                        Untuk kelompok & institusi
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Rp 15.000</div>
                      <div className="text-sm text-red-100">/orang</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-sm">
                        stars
                      </span>
                      <span className="text-sm font-semibold">
                        Semua benefit Paket Premium
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Goodie bag produk olahan UMKM sekitar
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        E-book resep olahan tempe eksklusif
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-sm">
                        check_circle
                      </span>
                      <span className="text-sm">
                        Diskon 20% untuk pembelian produk pertama
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-red-500 hover:bg-red-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                    <span>Pilih Paket Lengkap</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Features */}
            <div className="space-y-8">
              {/* USP Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-400">
                    diversity_3
                  </span>
                  Keunggulan Program Kami
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-yellow-400">
                          forum
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Interaksi Langsung dengan Pak Pon
                      </h4>
                      <p className="text-red-100">
                        Bukan hanya mendengar, tapi{" "}
                        <span className="font-semibold text-yellow-300">
                          berdialog langsung
                        </span>{" "}
                        dengan ahlinya. Tanyakan apapun seputar tempe!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-yellow-400">
                          schedule
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Fleksibilitas Waktu Belajar
                      </h4>
                      <p className="text-red-100">
                        Peserta{" "}
                        <span className="font-semibold text-yellow-300">
                          bisa request penambahan jam
                        </span>{" "}
                        jika materi belum dipahami. Kami pastikan Anda pulang
                        dengan ilmu yang matang!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-yellow-400">
                          book
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Learning by Doing
                      </h4>
                      <p className="text-red-100">
                        <span className="font-semibold text-yellow-300">
                          Ikut serta aktif dalam proses pembuatan
                        </span>{" "}
                        - dari penyaringan, fermentasi, hingga pengemasan.
                        Experience yang tidak akan terlupakan!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-lg mb-3">Masih Ragu?</h4>
                <p className="text-red-100 mb-4">
                  Kami menawarkan{" "}
                  <span className="font-bold text-yellow-300">
                    Sesi Percobaan Gratis
                  </span>
                  15 menit untuk merasakan pengalaman belajar dengan Pak Pon
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-white text-[#D31F1F] font-bold rounded-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">
                      calendar_today
                    </span>
                    Jadwalkan Trial Session
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">
                      video_library
                    </span>
                    Lihat Video Testimoni
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Additional Info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-yellow-400 text-3xl">
                    groups
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">Group Discount</h4>
                <p className="text-red-100">
                  Diskon spesial untuk rombongan {">"} 100 orang. Cocok untuk
                  sekolah/kampus!
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-yellow-400 text-3xl">
                    favorite
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">Follow-up Support</h4>
                <p className="text-red-100">
                  Gratis konsultasi via WhatsApp selama 2 hari setelah pelatihan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KONTAK --- */}
      <section className="py-16 md:py-24" id="kontak">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Siap melayani kebutuhan tempe berkualitas untuk rumah tangga,
                  restoran, atau usaha kuliner Anda.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfo
                  icon="location_on"
                  title="Alamat Produksi"
                  detail="Kauman, Sepande, Kec. Candi, Kabupaten Sidoarjo, Jawa Timur 61271"
                  subtitle="Buka: Senin - Sabtu, 08:00 - 17:00 WIB"
                />
                <ContactInfo
                  icon="call"
                  title="Telepon & WhatsApp"
                  detail="+62 812-3456-7890"
                  subtitle="Respon cepat via WhatsApp"
                />
                <ContactInfo
                  icon="mail"
                  title="Email"
                  detail="info@rumpahtempe.com"
                  subtitle="Balasan dalam 24 jam"
                />
                <ContactInfo
                  icon="social_distance"
                  title="Follow Kami"
                  detail="@rumpahtempe"
                  subtitle="Instagram & Facebook"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#D31F1F]"
                        placeholder="Masukkan nama Anda"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#D31F1F]"
                        placeholder="0812-3456-7890"
                        type="tel"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#D31F1F]"
                      placeholder="email@anda.com"
                      type="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Jenis Pesanan
                    </label>
                    <select className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#D31F1F]">
                      <option value="">Pilih jenis pesanan</option>
                      <option value="personal">Konsumsi Pribadi</option>
                      <option value="restaurant">Restoran/Rumah Makan</option>
                      <option value="catering">Catering</option>
                      <option value="reseller">Reseller</option>
                      <option value="training">Pelatihan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pesan
                    </label>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl p-4 h-32 outline-none focus:ring-2 focus:ring-[#D31F1F]"
                      placeholder="Jelaskan kebutuhan Anda..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded"
                    />
                    <label htmlFor="newsletter" className="text-sm">
                      Saya ingin menerima informasi promo dan update produk
                    </label>
                  </div>

                  <button className="w-full py-4 bg-[#D31F1F] text-white font-bold rounded-xl hover:bg-[#8B1A1A] transition-colors">
                    Kirim Pesan
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-slate-100 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-[#D31F1F]">
                    location_on
                  </span>
                  <h4 className="font-bold">Lokasi Kami di Maps</h4>
                </div>
                <div className="aspect-video bg-slate-300 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.632!2d112.6956231!3d-7.4646177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1447b53745d%3A0x9f297d3d36918637!2sRumah%20Tempe%20Pak%20Pon!5e0!3m2!1sid!2sid!4v1715000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Rumah Tempe Sepande"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 dark:bg-slate-900 pt-12 pb-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  alt="Logo"
                  src="/RT-LOGO.png"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <span className="font-bold text-lg">Rumah Tempe Sepande</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Menghadirkan tempe berkualitas premium dengan standar higienis
                modern untuk keluarga Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Tempe Segar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Keripik Tempe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Tempe Frozen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Paket Grosir
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Pelatihan UMKM
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Kemitraan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Konsultasi Produksi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D31F1F]">
                    Pengiriman
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Tetap Terhubung</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Berlangganan newsletter untuk update produk dan promo.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm"
                />
                <button className="bg-[#D31F1F] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#8B1A1A]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2026 Rumah Tempe Sepande. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-slate-500 hover:text-[#D31F1F] text-sm"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-[#D31F1F] text-sm"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-[#D31F1F] text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        aria-label="Chat via WhatsApp"
      >
        <span className="material-symbols-outlined">chat</span>
      </a>
    </div>
  );
}

// Komponen Pembantu
function ProductCard({
  img,
  title,
  description,
  price,
  weight,
  badge,
  features = [],
}: any) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={img}
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-[#D31F1F] text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-5 sm:p-6">
        <h4 className="text-lg sm:text-xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {description}
        </p>

        {features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.map((feature: string, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#D31F1F] font-bold text-lg">{price}</div>
            {weight && <div className="text-xs text-slate-500">{weight}</div>}
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-[#D31F1F] hover:bg-[#D31F1F] hover:text-white flex items-center justify-center transition-colors group/btn">
            <span className="material-symbols-outlined text-sm group-hover/btn:scale-110 transition-transform">
              shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, detail, subtitle }: any) {
  return (
    <div className="flex gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
      <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-[#D31F1F]">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-slate-900 dark:text-white">{detail}</p>
        {subtitle && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description, icon }: any) {
  return (
    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
      <div className="text-5xl font-bold text-slate-200 dark:text-slate-700 mb-4">
        {number}
      </div>
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="material-symbols-outlined text-[#D31F1F] text-3xl">
          {icon}
        </span>
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({ name, role, text, rating }: any) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined text-sm ${
              i < rating
                ? "text-yellow-400"
                : "text-slate-300 dark:text-slate-600"
            }`}
          >
            star
          </span>
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
