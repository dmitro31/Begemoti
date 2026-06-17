import { ArrowRight, Star } from 'lucide-react'

const popularItems = [
  {
    name: 'Strawberry Bubble Tea',
    description: 'Полуничний смак з тапіокою',
    price: '129 грн',
    rating: '4.9',
  },
  {
    name: 'Oreo Milk Tea',
    description: 'Молочний чай з печивом Oreo',
    price: '139 грн',
    rating: '4.8',
  },
  {
    name: 'Mango Bubble',
    description: 'Тропічний манго та перлини',
    price: '149 грн',
    rating: '5.0',
  },
]

export default function Popular() {
  return (
    <section className="px-6 md:px-[8%] py-24 bg-[#fff8fc]">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">

        <div>
          <span className="inline-block bg-pink-100 text-[#d81b60] px-4 py-2 rounded-full font-medium mb-4">
            Популярне
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#4a1525]">
            Наші хіти
          </h2>

          <p className="mt-4 text-[#885866] max-w-lg">
            Найулюбленіші напої наших гостей.
          </p>
        </div>

        <button className="flex items-center gap-2 text-[#d81b60] font-semibold hover:gap-3 transition-all">
          Усе меню
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {popularItems.map((item) => (
          <div
            key={item.name}
            className="group bg-white rounded-[36px] border border-pink-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
          >

            <div className="relative h-[320px] bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">

              <div className="absolute w-52 h-52 bg-white/40 rounded-full blur-3xl" />

              <div className="relative z-10 w-44 h-44 rounded-full bg-white flex items-center justify-center text-7xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                🧋
              </div>

            </div>

            <div className="p-6">

              <div className="flex justify-between items-start mb-3">

                <h3 className="text-2xl font-bold text-[#4a1525]">
                  {item.name}
                </h3>

                <div className="flex items-center gap-1 text-[#d81b60]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">
                    {item.rating}
                  </span>
                </div>

              </div>

              <p className="text-[#885866] mb-6">
                {item.description}
              </p>

              <div className="flex justify-between items-center">

                <span className="text-2xl font-bold text-[#d81b60]">
                  {item.price}
                </span>

                <button className="bg-[#d81b60] hover:bg-[#c2185b] text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Замовити
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}