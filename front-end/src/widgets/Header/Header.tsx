'use client'

import { useState } from 'react'
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-white/90 backdrop-blur-xl border border-pink-100 shadow-xl rounded-full px-5 md:px-8 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#d81b60] flex items-center justify-center text-white font-bold">
              B
            </div>

            <div>
              <h2 className="font-bold text-[#4a1525]">
                Бегемоті
              </h2>

              <p className="text-xs text-[#885866] hidden sm:block">
                Bubble Tea & Desserts
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 font-medium">
            <a href="#" className="text-[#d81b60]">
              Головна
            </a>

            <a
              href="#"
              className="text-[#885866] hover:text-[#d81b60] transition-colors"
            >
              Меню
            </a>

            <a
              href="#"
              className="text-[#885866] hover:text-[#d81b60] transition-colors"
            >
              Акції
            </a>

            <a
              href="#"
              className="text-[#885866] hover:text-[#d81b60] transition-colors"
            >
              Контакти
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#d81b60]" />
            </button>

            <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#d81b60]" />
            </button>

            <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
              <User className="w-5 h-5 text-[#d81b60]" />
            </button>

            <button className="bg-[#d81b60] hover:bg-[#c2185b] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Замовити
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-[#d81b60]" />
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-0 right-0 h-screen w-[280px] bg-white z-[60] shadow-2xl p-6">

            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-xl text-[#4a1525]">
                Меню
              </span>

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-[#d81b60]" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <a href="#">Головна</a>
              <a href="#">Меню</a>
              <a href="#">Акції</a>
              <a href="#">Контакти</a>
            </nav>

            <button className="w-full mt-10 bg-[#d81b60] text-white py-4 rounded-full font-semibold">
              Замовити
            </button>
          </div>
        </>
      )}
    </>
  )
}