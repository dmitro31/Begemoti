import {
  ArrowRight,
  Truck,
  Star,
  MapPin,
  Coffee,
} from 'lucide-react'

import Begemot from '@/Photo/pngwing.com.png'

export default function BlobBackground() {
  return (
    <div className="min-h-screen bg-[#fff8fc] text-[#4a1525] relative overflow-hidden pt-30">

      <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] bg-pink-200 rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-pink-300 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="absolute top-[20%] left-[60%] w-[180px] h-[180px] bg-pink-100 rounded-full opacity-70 blur-2xl pointer-events-none" />

      <main className="relative z-10 px-6 lg:px-[8%] py-12 lg:py-20">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[85vh]">

          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-pink-100 mb-6">
              <span className="w-2 h-2 bg-[#e91e63] rounded-full animate-pulse" />
              Івано-Франківськ
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] mb-6">
              Bubble Tea,
              <br />
              десерти та
              <br />
              <span className="text-[#d81b60]">
                рожевий настрій
              </span>
            </h1>

            <p className="text-lg text-[#7b4a5f] leading-relaxed mb-10 max-w-lg">
              Найсолодше місце в Івано-Франківську.
              Спробуйте авторські напої, десерти та
              атмосферу, яку неможливо забути.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">

              <div className="bg-white px-6 py-4 rounded-3xl shadow-lg border border-pink-100 min-w-[120px]">
                <div className="text-2xl font-bold text-[#d81b60]">
                  50+
                </div>
                <div className="text-sm text-[#7b4a5f]">
                  позицій меню
                </div>
              </div>

              <div className="bg-white px-6 py-4 rounded-3xl shadow-lg border border-pink-100 min-w-[120px]">
                <div className="flex items-center gap-1 text-2xl font-bold text-[#d81b60]">
                  4.9
                  <Star className="w-5 h-5 fill-[#d81b60] stroke-none" />
                </div>
                <div className="text-sm text-[#7b4a5f]">
                  рейтинг
                </div>
              </div>

              <div className="bg-white px-6 py-4 rounded-3xl shadow-lg border border-pink-100 min-w-[120px]">
                <div className="text-2xl font-bold text-[#d81b60]">
                  2
                </div>
                <div className="text-sm text-[#7b4a5f]">
                  локації
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-4">

              <button className="bg-[#d81b60] hover:bg-[#c2185b] transition-colors text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl">
                Переглянути меню
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="bg-white hover:bg-pink-50 transition-colors px-8 py-4 rounded-full font-semibold border border-pink-100 shadow-lg">
                Наші локації
              </button>

            </div>

          </div>

          <div className="relative w-full max-w-[650px] h-[650px] flex items-center justify-center">

            <div className="absolute w-[520px] h-[520px] rounded-full bg-pink-200 opacity-60 blur-3xl" />

            <div className="absolute top-10 right-0 bg-white rounded-3xl p-5 shadow-xl border border-pink-100">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 fill-[#d81b60] stroke-none" />
                <div>
                  <div className="font-bold">4.9 рейтинг</div>
                  <div className="text-sm text-gray-500">
                    Відгуки гостей
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-0 bg-white rounded-3xl p-5 shadow-xl border border-pink-100">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#d81b60]" />
                <div>
                  <div className="font-bold">
                    Швидка доставка
                  </div>
                  <div className="text-sm text-gray-500">
                    По всьому місту
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 bg-white rounded-3xl p-5 shadow-xl border border-pink-100">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-[#d81b60]" />
                <div>
                  <div className="font-bold">
                    Bubble Tea
                  </div>
                  <div className="text-sm text-gray-500">
                    Хіт продажів
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 bg-white rounded-3xl p-5 shadow-xl border border-pink-100">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d81b60]" />
                <div>
                  <div className="font-bold">
                    2 локації
                  </div>
                  <div className="text-sm text-gray-500">
                    У центрі міста
                  </div>
                </div>
              </div>
            </div>

            <img
              src={Begemot.src}
              alt="Begemot"
              className="relative z-10 w-[500px] object-contain drop-shadow-[0_30px_60px_rgba(216,27,96,0.35)] hover:scale-105 transition-transform duration-500"
            />

          </div>

        </div>

      </main>
    </div>
  )
}