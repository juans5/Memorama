import { Link } from "react-router-dom";

export const StartGame = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen min-w-screen bg-[#0a0f1c] text-white">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold md:text-7xl">
            WELCOME TO MEMORAMA
            <p className="md:text-4xl text-3xl md:pt-30 pt-20 text-blue-300 font-thin">
              Select Difficulty:
            </p>
            <span className="absolute top-80 md:top-110 sm:top-100 right-0 left-0">
              ↓
            </span>
          </h1>
        </div>

        <div className="absolute top-10 right-10 md:right-10 md:top-8 transition-all duration-200 ease-in">
          <Link
            to="/historial"
            className="text-l py-3 px-2 md:text-xl md:py-3 md:px-6 bg-cyan-500 rounded-lg cursor-pointer shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 hover:shadow-cyan-500/40 transition-all duration-200 ease-in"
          >
            Game History
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-xl ml-4 font-bold sm:flex sm:flex-row sm:text-2xl md:flex md:flex-row md:text-3xl text-center">
        <Link
          to="/easy"
          className="md:mr-6 md:p-8 mr-4 p-6 rounded-full bg-blue-700 shadow-lg shadow-blue-500/40 cursor-pointer hover:bg-blue-700/80 hover:shadow-blue-500/30 transition-all duration-200 ease-in-out"
        >
          Easy: 4x4
        </Link>
        <Link
          to="/medium"
          className="md:mr-6 md:p-8 mr-4 p-6 rounded-full bg-green-700 shadow-lg shadow-green-500/40 cursor-pointer hover:bg-green-700/80 hover:shadow-green-500/30 transition-all duration-200 ease-in-out"
        >
          Medium: 6x6
        </Link>
        <Link
          to="/hard"
          className="md:mr-6 md:p-8 mr-4 p-6 rounded-full bg-red-800 shadow-lg shadow-red-700/40 cursor-pointer hover:bg-red-800/80 hover:shadow-red-500/30 transition-all duration-200 ease-in-out"
        >
          Hard: 8x8
        </Link>
      </div>
    </div>
  );
};
