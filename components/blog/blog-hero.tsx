export function BlogHero() {
  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Blurred Gradient Bubbles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-4rem] left-[-4rem] w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-30 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-500 to-purple-500 opacity-30 rounded-full filter blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 text-black">
          My <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Thoughts, tutorials, and insights on web development, design, and the ever-evolving world of technology.
        </p>
      </div>
    </section>
  )
}
