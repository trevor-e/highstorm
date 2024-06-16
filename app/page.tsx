export default function Home() {
  return (
    <div className="w-[640px] p-8 border border-gray-700/20 bg-white/60 backdrop-blur-2xl backdrop-saturate-200 backdrop-opacity-80 rounded-lg shadow-custom dark:border-neutral-800 dark:bg-zinc-800/30">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      Highstorm Software
    </h1>
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
        Crafting <span className="inline-block underline animate-bounce bg-gradient-to-t from-red-500 via-indigo-500 to-teal-500 text-transparent bg-clip-text">
      memorable
    </span> native iOS and Android apps
      </h2>
      <p>
        Check back soon for our latest projects and updates.
      </p>
    </div>
  )
}