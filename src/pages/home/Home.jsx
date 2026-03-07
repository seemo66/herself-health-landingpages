export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50">

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-8 py-24 text-center">
        <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-sm font-medium text-rose-700 mb-6">
          Women's Health, Reimagined
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
          Healthcare designed <br className="hidden sm:block" />
          <span className="text-rose-600">for her</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Personalized, compassionate care that understands the unique needs of women at every stage of life.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-rose-700 transition-colors">
            Book an Appointment
          </button>
          <button className="rounded-full border border-rose-300 bg-white px-8 py-3 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-5xl px-8 pb-24 grid gap-6 sm:grid-cols-3">
        {[
          { title: 'Primary Care', desc: 'Comprehensive health checkups tailored to women.', color: 'bg-rose-100 text-rose-700' },
          { title: 'Mental Wellness', desc: 'Support for anxiety, stress, and emotional wellbeing.', color: 'bg-purple-100 text-purple-700' },
          { title: 'Reproductive Health', desc: 'Expert guidance through every stage of your journey.', color: 'bg-pink-100 text-pink-700' },
        ].map(({ title, desc, color }) => (
          <div key={title} className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${color}`}>{title}</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
