import { Search, ShoppingBag, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/90 backdrop-blur-xl border border-pink-100 shadow-xl rounded-full px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#d81b60] flex items-center justify-center text-white font-bold">
            B
          </div>

          <div>
            <h2 className="font-bold text-[#4a1525]">
              Бегемоті
            </h2>

            <p className="text-xs text-[#885866]">
              Bubble Tea & Desserts
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-medium">

          <a
            href="#"
            className="text-[#d81b60]"
          >
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

        <div className="flex items-center gap-4">

          <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center hover:bg-pink-100 transition-colors">
            <Search className="w-5 h-5 text-[#d81b60]" />
          </button>

          <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center hover:bg-pink-100 transition-colors">
            <ShoppingBag className="w-5 h-5 text-[#d81b60]" />
          </button>

          <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center hover:bg-pink-100 transition-colors">
            <User className="w-5 h-5 text-[#d81b60]" />
          </button>

          <button className="hidden md:flex bg-[#d81b60] hover:bg-[#c2185b] text-white px-6 py-3 rounded-full font-medium transition-colors">
            Замовити
          </button>

        </div>

      </div>
    </header>
  )
}