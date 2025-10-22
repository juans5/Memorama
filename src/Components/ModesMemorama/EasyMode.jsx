import { useState } from "react";
import { BoardGrid } from "../BoardReutilityCode";

export const EasyMode = ({ setStorage }) => {
  const [NUMBERS_TO_FIND, setNUMBERS_TO_FIND] = useState([
    // Esto crearlo en cada uno de los modos y pasarlo como prop
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#0a0f1c] text-white">
      <BoardGrid
        length={16}
        setStorage={setStorage}
        NUMBERS_TO_FIND={NUMBERS_TO_FIND}
        setNUMBERS_TO_FIND={setNUMBERS_TO_FIND}
      />
    </div>
  );
};
