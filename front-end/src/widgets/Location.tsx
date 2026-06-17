import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react'

const locations = [
  {
    name: 'Бегемоті Центр',
    address: 'вул. Незалежності, 1',
    hours: '09:00 - 22:00',
    phone: '+380 XX XXX XX XX',
    map: 'https://maps.google.com',
  },
  {
    name: 'Бегемоті Пасаж',
    address: 'вул. Галицька, 15',
    hours: '09:00 - 22:00',
    phone: '+380 XX XXX XX XX',
    map: 'https://maps.google.com',
  },
]

export default function Locations() {
  return (
    <section className="px-6 md:px-[8%] py-24 bg-[#fff8fc]">

      <div className="text-center mb-16">

        <span className="inline-block bg-pink-100 text-[#d81b60] px-4 py-2 rounded-full font-medium mb-4">
          Локації
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-[#4a1525] mb-4">
          Завітайте до нас
        </h2>

        <p className="text-[#885866] max-w-2xl mx-auto">
          Обирайте найближчу локацію та насолоджуйтесь улюбленими напоями та десертами.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {locations.map((location) => (
          <div
            key={location.name}
            className="bg-white rounded-[36px] overflow-hidden border border-pink-100 shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="h-56 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
              <span className="text-[#d81b60] font-semibold text-lg">
                Фото локації
              </span>
            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold text-[#4a1525] mb-6">
                {location.name}
              </h3>

              <div className="space-y-4 text-[#885866] mb-8">

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#d81b60]" />
                  {location.address}
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d81b60]" />
                  {location.hours}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d81b60]" />
                  {location.phone}
                </div>

              </div>

              <a
                href={location.map}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#d81b60] hover:bg-[#c2185b] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Google Maps
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}