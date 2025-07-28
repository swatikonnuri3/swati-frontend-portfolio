import { RiReactjsLine } from "react-icons/ri"
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaJava } from "react-icons/fa"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Python */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-yellow-100">
          <FaPython className="text-7xl text-yellow-300" />
        </div>

        {/* HTML */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-orange-100">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>

        {/* CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-blue-100">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>

        {/* JavaScript */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-yellow-100">
          <FaJsSquare className="text-7xl text-yellow-400" />
        </div>

        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-cyan-100">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </div>

        
        {/* Java */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-110 hover:border-red-100">
          <FaJava className="text-7xl text-red-500" />
        </div>

      </div>
    </div>
  )
}

export default Technologies
