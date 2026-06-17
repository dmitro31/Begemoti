import {
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-6 md:px-[8%] py-16 border-t border-pink-100">
      <div className="grid md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#d81b60] flex items-center justify-center text-white font-bold">
              B
            </div>

            <div>
              <h3 className="font-bold text-[#4a1525]">
                Бегемоті
              </h3>

              <p className="text-sm text-[#885866]">
                Bubble Tea & Desserts
              </p>
            </div>
          </div>

          <p className="text-[#885866]">
            Найрожевіше місце в Івано-Франківську для справжніх поціновувачів солодкого.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#4a1525] mb-4">
            Навігація
          </h4>

          <ul className="space-y-3 text-[#885866]">
            <li>Головна</li>
            <li>Меню</li>
            <li>Локації</li>
            <li>Контакти</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#4a1525] mb-4">
            Контакти
          </h4>

          <div className="space-y-3 text-[#885866]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d81b60]" />
              +380 XX XXX XX XX
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#d81b60]" />
              info@begemoti.ua
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d81b60]" />
              Івано-Франківськ
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pink-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#885866] text-sm">
          © 2026 Бегемоті. Усі права захищені.
        </p>

        <p className="text-[#885866] text-sm">
          Design Concept by IJSNIPER
        </p>
      </div>
    </footer>
  )
}