export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF6EC] to-[#E6E0D9] text-gray-800 px-6 py-12 font-body garden-path">

      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-body text-indigo-900 tracking-wide breathe">
            Welcome to The Eudaimonic Garden
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A quiet digital temple for reflection, growth, and soul-deep inquiry.
          </p>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
<article className="p-6 ethereal-zone rounded-2xl cursor-pointer border-l-4 border-indigo-300 hover:border-indigo-400">

  <div className="flex items-center mb-3">
    <svg width="32" height="32" viewBox="0 0 32 32" className="mr-3">
      <rect x="14" y="20" width="4" height="8" fill="#8B4513"/>
      <circle cx="16" cy="16" r="8" fill="#22C55E"/>
      <circle cx="12" cy="12" r="4" fill="#16A34A"/>
      <circle cx="20" cy="14" r="3" fill="#15803D"/>
    </svg>
    <h2 className="text-2xl font-body text-indigo-700">
      The Becoming Grove
    </h2>
  </div>
  <p className="text-gray-700">
    Who are we when we stop performing? What quiet truths emerge when no one's watching?
  </p>
</article>

<section className="mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <article className="p-6 ethereal-zone rounded-2xl cursor-pointer border-l-4 border-indigo-300 hover:border-indigo-400">
      {/* your first article content */}
    </article>
    
    <div className="garden-path-connector md:hidden"></div>
    
    <article className="p-6 ethereal-zone rounded-2xl cursor-pointer border-l-4 border-amber-300 hover:border-amber-400">
      {/* your second article content */}
    </article>
  </div>
</section>


          
          <article className="p-6 garden-zone rounded-2xl hover:bg-white/30 transition-all duration-500 cursor-pointer border-l-4 border-amber-300 hover:border-amber-500 float">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">✨</span>
              <h2 className="text-2xl font-body text-indigo-700">
                Memory Meadow
              </h2>
            </div>
            <p className="text-gray-700">
              Some memories stretch like golden threads across time. Here's where we gather them.
            </p>
          </article>
        </section>
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        "The soul becomes dyed with the color of its thoughts." - Marcus Aurelius
      </footer>
    </main>
  );
}
