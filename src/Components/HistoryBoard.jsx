export const HistoryBoard = ({ storage }) => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="flex justify-center items-center font-bold w-full h-40 max-h-40 text-center pt-10">
        <h1 className="bg-[#1A0B3E] text-4xl px-13 sm:text-5xl py-8 md:px-25 md:text-5xl rounded-4xl shadow-2xl shadow-[#3E1D8A]">
          HISTORY BOARD
        </h1>
      </div>

      <div className="flex justify-center items-center w-full max-h-150 text-center mt-10 md:mt-12 lg:mt-15">
        <div className="bg-[#29382C] w-100 sm:w-130 md:w-150 lg:w-230 max-h-130 p-5 rounded-xl overflow-y-auto scroll-custom shadow-custom">
          <ul>
            {storage &&
              storage.map((value, index) => (
                <li
                  key={index}
                  className={`${
                    value.includes("Easy")
                      ? "text-yellow-400"
                      : value.includes("Medium")
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {" "}
                  {value}{" "}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
