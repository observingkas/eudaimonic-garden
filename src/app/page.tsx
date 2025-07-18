export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF6EC] to-[#E6E0D9] text-gray-800 px-6 py-12 font-body">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-header text-indigo-900 tracking-wide">
            Welcome to The Eudaimonic Garden
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A quiet digital temple for reflection, growth, and soul-deep inquiry.
          </p>
          </header>

          <section className="space-y-6 mt-12">
            <article>
              <h2 className="text-2x1 font-header text-plum-700 mb-2">
                On Becoming
              </h2>
              <p className="text-gray-700">
                Who are we when we stop performing? What quiet truths emerge when no one's watching?
              </p>
            </article>

            <article>
              <h2 className="text-2x1 font-header text-plum-700 mb-2">
                Moments That Felt Eternal
              </h2>
              <p className="text-gray-700">
                Some memories stretch like golden threads across time. Here's where we gather them.
              </p>
            </article>
          </section>
          </div>

          <footer className="mt-16 text-center text-sm text-gray-500">
            "The soul becomes dyed with the color of it's thoughts." - Marcus Aurelius
          </footer>
          </main>);

          
}