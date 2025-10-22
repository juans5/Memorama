import { useState } from "react";
import { BoardGrid } from "../BoardReutilityCode";

export const MediumMode = ({ setStorage }) => {
  const [NUMBERS_TO_FIND, setNUMBERS_TO_FIND] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#0a0f1c] text-white">
      <BoardGrid
        length={36}
        setStorage={setStorage}
        NUMBERS_TO_FIND={NUMBERS_TO_FIND}
        setNUMBERS_TO_FIND={setNUMBERS_TO_FIND}
      />
    </div>
  );
};
