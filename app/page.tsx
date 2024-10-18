export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center -mt-12">
      {/* Staggered background layers */}
      <div className="absolute w-[640px] h-[232px] bg-black transform translate-x-4 translate-y-4"></div>
      <div className="absolute w-[640px] h-[232px] bg-black transform -translate-x-4 -translate-y-4"></div>
      <div className="absolute w-[640px] h-[232px] bg-black/20 transform -translate-x-8 translate-y-8"></div>
      <div className="absolute w-[640px] h-[232px] bg-black/20 transform translate-x-8 -translate-y-8"></div>

      {/* Main content */}
      <div className="relative w-[640px] h-[232px] p-8 border border-gray-700/20 bg-[rgba(3,3,3,1)] backdrop-blur-2xl backdrop-saturate-200 backdrop-opacity-80 dark:border-neutral-800 dark:bg-zinc-800/30 flex flex-col justify-center items-center">
        <div className="w-full max-w-[500px]">
          <h1 className="text-3xl font-bold text-[rgba(253,253,253,1)] dark:text-gray-100 mb-4">
            Highstorm Software
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
