export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Matthew Fowles
          </h1>
          <div className="space-y-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Web and mobile builds and refreshes for European SMEs.
            </p>
            <p>
              AI when it removes real admin inside a shipped product.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Remote from Albania.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="mailto:matt@matthewfowles.io"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Talk
            </a>
          </div>
        </div>
      </section>

      {/* What I do Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          What I do
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I build and refresh websites and mobile apps for teams that have outgrown a template. Senior-led. No agency layers.
          </p>
          <p>
            When the product needs it, I ship AI inside the work — workflow digitization and admin removal — the same way I approach legal-tech and my own product, Flumin. I do not sell "AI transformation."
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Offers
        </h2>
        <ol className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-decimal list-inside">
          <li>Web build / refresh</li>
          <li>Mobile app (Android / iOS)</li>
          <li>AI inside a shipped product (only where it cuts real admin)</li>
        </ol>
      </section>

      {/* Who this is for Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Who this is for
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <ul className="space-y-2 list-disc list-inside">
            <li>SMEs and practices that need a clearer site or a real app</li>
            <li>Founders whose product is further along than the marketing site</li>
            <li>Teams that want AI in the workflow, not a slide deck</li>
          </ul>
          <p className="pt-2">
            <span className="font-medium text-gray-900 dark:text-gray-100">Not for:</span> tire-kickers, "just exploring AI," or free strategy calls with no scope.
          </p>
        </div>
      </section>

      {/* How we work Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          How we work
        </h2>
        <ol className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-decimal list-inside">
          <li>You send the site or product.</li>
          <li>I reply with what I would change first — and what I would leave alone.</li>
          <li>If it is a fit, we scope a build. Pricing comes only after that, and only with approval.</li>
        </ol>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Contact
        </h2>
        <div className="space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          <p>
            <a href="mailto:matt@matthewfowles.io" className="underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              matt@matthewfowles.io
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/matt-fowles"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              https://www.linkedin.com/in/matt-fowles
            </a>
          </p>
          <p className="pt-4 text-sm text-gray-600 dark:text-gray-400 italic">
            Flumin is my product. It is not listed here as a client case study.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Matthew Fowles
        </p>
      </footer>
    </main>
  );
}
