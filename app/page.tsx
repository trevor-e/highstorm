export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Staggered background layers */}
      <div className="absolute w-[640px] h-[232px] bg-black transform translate-x-4 translate-y-4"></div>
      <div className="absolute w-[640px] h-[232px] bg-black transform -translate-x-4 -translate-y-4"></div>
      <div className="absolute w-[640px] h-[232px] bg-black/20 transform -translate-x-8 translate-y-8"></div>
      <div className="absolute w-[640px] h-[232px] bg-black/20 transform translate-x-8 -translate-y-8"></div>

      {/* Main content */}
      <div className="relative w-[640px] h-[232px] p-8 border border-gray-700/20 bg-[rgba(3,3,3,1)] backdrop-blur-2xl backdrop-saturate-200 backdrop-opacity-80 dark:border-neutral-800 dark:bg-zinc-800/30 flex flex-col justify-center items-center">
        <div className="w-full max-w-[500px]">
          <h1 className="text-3xl font-bold text-[rgba(253,253,253,1)] dark:text-gray-100 mb-4 relative inline-block">
            <span className="relative z-10">Highstorm Software</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500"></span>
          </h1>
          <h2 className="text-xl font-medium text-[rgba(253,253,253,1)] dark:text-gray-100 mb-4">
            Crafting memorable native iOS and Android apps
          </h2>
          <p className="text-[rgba(253,253,253,1)] dark:text-gray-100">
            Check back soon for our latest projects and updates.
          </p>
        </div>
      </div>
    </div>
  )
}
