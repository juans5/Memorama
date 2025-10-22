import { useState } from "react";
import { BoardGrid } from "../BoardReutilityCode";

export const HardMode = ({ setStorage }) => {
  const [NUMBERS_TO_FIND, setNUMBERS_TO_FIND] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32,
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#0a0f1c] text-white">
      <BoardGrid
        length={64}
        setStorage={setStorage}
        NUMBERS_TO_FIND={NUMBERS_TO_FIND}
        setNUMBERS_TO_FIND={setNUMBERS_TO_FIND}
      />
    </div>
  );
};
