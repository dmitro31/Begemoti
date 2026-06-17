export default function Photo() {
  return (
    <section className="px-6 md:px-[8%] py-24 bg-[#fff8fc]">

      <div className="text-center mb-16">

        <span className="inline-block bg-pink-100 text-[#d81b60] px-4 py-2 rounded-full font-medium mb-4">
          Галерея
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-[#4a1525] mb-4">
          Атмосфера Бегемоті
        </h2>

        <p className="text-[#885866] max-w-2xl mx-auto">
          Місце, де хочеться фотографувати кожен напій.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        <div className="md:col-span-5 h-[620px] rounded-[40px] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-xl border border-pink-100 flex items-center justify-center hover:-translate-y-2 transition-all duration-300">
          <span className="text-[#d81b60] text-xl font-semibold">
            Фото закладу
          </span>
        </div>

        <div className="md:col-span-7 flex flex-col gap-6">

          <div className="h-[300px] rounded-[40px] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-xl border border-pink-100 flex items-center justify-center hover:-translate-y-2 transition-all duration-300">
            <span className="text-[#d81b60] text-xl font-semibold">
              Bubble Tea
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="h-[290px] rounded-[40px] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-xl border border-pink-100 flex items-center justify-center hover:-translate-y-2 transition-all duration-300">
              <span className="text-[#d81b60] text-lg font-semibold">
                Десерти
              </span>
            </div>

            <div className="h-[290px] rounded-[40px] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-xl border border-pink-100 flex items-center justify-center hover:-translate-y-2 transition-all duration-300">
              <span className="text-[#d81b60] text-lg font-semibold">
                Інтер'єр
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}