"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const router = useRouter();
  
  // State untuk Form
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handler Input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Mengirim data:", formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', contact: '', message: '' });
      
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  const mapStyle = {
    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDS-k_BhoSC-CUoJs1pPhIxZtYtBRs-gA_oyJdncgH-hOLzACROEzKPLZxAusa_YmwWgW38oVGqLCcyUzY6kJO1bnjwKaiuSINh4f6XX2cgkROWIo1fj8Owk-52A4Qz0PR1iSPkSc2extNinhlX4YMRdtmwI14SCEbJgG0LFZXh0V4opE3pqtB3nvKX_tFgrskrqN0KSQgWKb6JyyhNq3ZPF4EKptUGHcfeHoIf7IKKjvsGEj6oMH2BLFC0hn7JIdEUPKv-pJmC_y4")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white transition-colors duration-300">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[100] bg-white dark:bg-[#1a2e1a] border-l-4 border-primary text-[#111811] dark:text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-in">
          <span className="material-symbols-outlined text-primary">check_circle</span>
          <span className="font-medium">Pesan berhasil dikirim!</span>
        </div>
      )}

      {/* Responsive Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#102210]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between p-4">
          
          {/* Back Button - Mobile Only */}
          <button 
            onClick={() => router.back()} 
            className="md:hidden text-[#111811] dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>

          {/* Logo/Brand - Desktop */}
          <div className="hidden md:block">
            <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
              Rumah Tempe Pakno
            </Link>
          </div>
          
          {/* Page Title - Mobile Only */}
          <h2 className="md:hidden text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Hubungi Kami
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#111811] dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Beranda
            </Link>
            <Link href="/produk" className="text-[#111811] dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Produk
            </Link>
            <Link href="/kontak" className="text-primary font-bold">
              Hubungi
            </Link>
            <Link href="/profil" className="text-[#111811] dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Profil
            </Link>
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#111811] dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#102210] border-t border-gray-100 dark:border-gray-800 animate-slide-down">
            <div className="flex flex-col py-2">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 text-[#111811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-gray-500">home</span>
                <span className="font-medium">Beranda</span>
              </Link>
              
              <Link 
                href="/produk" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 text-[#111811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-gray-500">shopping_basket</span>
                <span className="font-medium">Produk</span>
              </Link>
              
              <div className="px-6 py-4 bg-primary/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                <span className="font-bold text-primary">Hubungi</span>
              </div>
              
              <Link 
                href="/profil" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 text-[#111811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-gray-500">person</span>
                <span className="font-medium">Profil</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pb-24 md:pb-8">
        
        {/* Map Section */}
        <section className="mt-4">
          <div className="flex px-4 py-3 max-w-6xl mx-auto">
            <div 
              className="w-full aspect-video rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 group relative cursor-pointer overflow-hidden"
              style={mapStyle}
              aria-label="Peta lokasi Rumah Tempe Higienis Pakno"
              onClick={() => window.open('https://maps.google.com/?q=Desa+Spande+Sidoarjo', '_blank')}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Buka Peta
                 </span>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Hours Header */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-[#111811] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Lokasi &amp; Jam Operasional
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 px-4">
            {/* Address List Item */}
            <div className="flex gap-4 bg-white dark:bg-white/5 rounded-xl px-4 py-4 border border-gray-100 dark:border-gray-800">
              <div className="text-[#111811] dark:text-primary flex items-center justify-center rounded-lg bg-[#f0f4f0] dark:bg-primary/20 shrink-0 size-12">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#111811] dark:text-white text-base font-bold leading-normal">Alamat Produksi</p>
                <p className="text-[#618961] dark:text-gray-400 text-sm font-normal leading-normal">Rumah Tempe Higienis Pakno</p>
                <p className="text-[#618961] dark:text-gray-400 text-sm font-normal leading-normal">Desa Spande, Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            {/* Business Hours List Item */}
            <div className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-xl px-4 min-h-[72px] py-4 border border-gray-100 dark:border-gray-800">
              <div className="text-[#111811] dark:text-primary flex items-center justify-center rounded-lg bg-[#f0f4f0] dark:bg-primary/20 shrink-0 size-12">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111811] dark:text-white text-base font-bold leading-normal line-clamp-1">Jam Operasional</p>
                <p className="text-[#618961] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">Senin - Minggu: 08:00 - 17:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="px-4 mt-8 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4">Kirim Pertanyaan</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Kami berkomitmen memberdayakan UMKM lokal dengan produk higienis.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 ml-1">Nama Lengkap</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-[#1a2e1a] border-none focus:ring-2 focus:ring-primary text-sm outline-none transition-shadow"
                  placeholder="Masukkan nama anda" 
                  type="text"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 ml-1">Email / No. HP</label>
                <input 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-[#1a2e1a] border-none focus:ring-2 focus:ring-primary text-sm outline-none transition-shadow"
                  placeholder="kontak@email.com" 
                  type="text"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 ml-1">Pesan</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-[#1a2e1a] border-none focus:ring-2 focus:ring-primary text-sm outline-none transition-shadow resize-none"
                  placeholder="Tuliskan pesan atau pesanan anda di sini..." 
                  rows={4}
                  required
                />
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-[#0fbf0f] text-[#102210] font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2" 
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  "Kirim Pesan"
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        className="fixed bottom-24 md:bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform active:scale-95" 
        href="https://wa.me/6281234567890" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>

      {/* Bottom Tab Bar - Mobile Only */}
      <div className="md:hidden fixed bottom-0 w-full h-20 bg-white/90 dark:bg-[#102210]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex items-center justify-around px-6">
        
        <Link href="/" className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium">Beranda</span>
        </Link>
        
        <Link href="/produk" className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">shopping_basket</span>
          <span className="text-[10px] font-medium">Produk</span>
        </Link>
        
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>contact_support</span>
          <span className="text-[10px] font-bold">Hubungi</span>
        </div>
        
        <Link href="/profil" className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profil</span>
        </Link>

      </div>
    </div>
  );
}