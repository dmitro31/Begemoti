import { Star, Plus } from 'lucide-react'

const popularItems = [
  {
    name: 'Bubble Tea Strawberry',
    price: '129 грн',
    rating: '4.9',
  },
  {
    name: 'Milk Tea Oreo',
    price: '139 грн',
    rating: '4.8',
  },
  {
    name: 'Mango Bubble',
    price: '149 грн',
    rating: '5.0',
  },
  {
    name: 'Chocolate Shake',
    price: '119 грн',
    rating: '4.7',
  },
]

export default function Popular() {
  return (
    <section className="px-6 md:px-[8%] py-24">
      <div className="text-center mb-14">
        <span className="inline-block bg-pink-100 text-[#d81b60] px-4 py-2 rounded-full font-medium mb-4">
          Наші хіти
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#4a1525]">
          Популярні позиції
        </h2>

        <p className="mt-4 text-[#885866] max-w-xl mx-auto">
          Найулюбленіші напої та десерти наших гостей.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {popularItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-[32px] p-5 shadow-xl border border-pink-100 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-56 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200 mb-5 flex items-center justify-center">
              <span className="text-7xl">🧋</span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-[#4a1525]">
                {item.name}
              </h3>

              <div className="flex items-center gap-1 text-[#d81b60]">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">
                  {item.rating}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold text-[#d81b60] text-xl">
                {item.price}
              </span>

              <button className="w-11 h-11 rounded-full bg-[#d81b60] hover:bg-[#c2185b] text-white flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}