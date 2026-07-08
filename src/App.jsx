import React from 'react';
import heroImage from './assets/hero.png';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-xs border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-emerald-600">
                Barokah<span className="text-amber-500">Ekspress</span>
              </span>
            </div>

            {/* Menu Navigasi (Desktop) */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
              <a href="#home" className="hover:text-emerald-600 transition-colors">Beranda</a>
              <a href="#layanan" className="hover:text-emerald-600 transition-colors">Layanan</a>
              <a href="#tentang" className="hover:text-emerald-600 transition-colors">Tentang Kami</a>
              <a href="#kontak" className="hover:text-emerald-600 transition-colors">Kontak</a>
            </div>

            {/* Tombol Login */}
            <div>
              <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-emerald-100 transition-all duration-300 transform hover:-translate-y-0.5">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-full blur-3xl transform translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Teks Utama */}
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                ✨ Cepat, Aman & Amanah
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Selamat Datang di <br />
                <span className="bg-gradient-to-r divide-emerald-600 from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Toko Barokah Ekspress
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Menyediakan segala kebutuhan harian Anda dengan layanan pengiriman ekspres yang super cepat, andal, dan penuh berkah. Belanja tenang, barang tenang sampai rumah.
              </p>
              
              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300">
                  Mulai Belanja Sekarang
                </button>
                <button className="cursor-pointer bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-xl border border-slate-200 transition-all duration-300">
                  Pelajari Layanan
                </button>
              </div>
            </div>

            {/* Gambar Hero */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute inset-0 bg-emerald-200 rounded-full filter blur-3xl opacity-30 w-72 h-72 m-auto"></div>
              <img 
                src={heroImage} 
                alt="Toko Barokah Ekspress" 
                className="relative z-10 max-w-full h-auto drop-shadow-2xl animate-fade-in object-contain max-h-[450px]"
              />
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;