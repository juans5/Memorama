import { useEffect, useState } from "react";

export const BoardGrid = ({
  length,
  setStorage,
  NUMBERS_TO_FIND,
  setNUMBERS_TO_FIND,
}) => {
  const [boardLength, setBoardLength] = useState(Array(length).fill(null));
  // const [NUMBERS_TO_FIND, setNUMBERS_TO_FIND] = useState([
  //   // Esto crearlo en cada uno de los modos y pasarlo como prop
  //   1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
  // ]);
  const [flipped, setFlipped] = useState([]);
  const [locked, setLocked] = useState(false);
  const [countMovements, setCountMovements] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  // Save in LocalStorage Stats (after win)
  useEffect(() => {
    if (timer === 0 && countMovements === 0) return;
    const statsWinner =
      "TIME:" +
      " " +
      timer +
      "s" +
      " " +
      "MOVEMENTS:" +
      " " +
      countMovements +
      " " +
      "MODE: " +
      `${length === 16 ? "Easy" : length === 36 ? "Medium" : "Hard"}`;
    setStorage((prev) => [...prev, statsWinner]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWinner, setStorage]);

  useEffect(() => {
    const numberFind = NUMBERS_TO_FIND.sort(() => Math.random() - 0.5);
    setNUMBERS_TO_FIND(numberFind);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      console.log("Game over");
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (boardLength.every((value) => value !== null)) {
      setIsActive(false);
      console.log("Game is Completed");
      setTimeout(() => {
        setIsWinner(true);
      }, 1500);
    } else setIsWinner(false);
  }, [boardLength]);

  const timeFormat = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const playAgain = () => {
    window.location.reload();
  };

  const boardCardTurned = (valueCard, index) => {
    if (boardLength[index] !== null || locked) return;
    if (flipped.length === 2) return;

    setBoardLength((prev) => {
      const newBoard = [...prev];
      newBoard[index] = NUMBERS_TO_FIND[index];
      // setCountMovements(countMovements + 1);
      // console.log(flipped);
      setIsActive(true);
      return newBoard;
    });

    setFlipped((prev) => {
      const newFlipped = [...prev, index];

      if (newFlipped.length === 2) {
        const [a, b] = newFlipped;
        if (NUMBERS_TO_FIND[a] !== NUMBERS_TO_FIND[b]) {
          setLocked(true);
          setTimeout(() => {
            setBoardLength((prev) => {
              const newBoard = [...prev];
              newBoard[a] = null;
              newBoard[b] = null;
              return newBoard;
            });
            setFlipped([]);
            setLocked(false);
          }, 1000);
          setCountMovements(countMovements + 1);
        } else {
          setTimeout(() => {
            setFlipped([]);
          }, 800);
          setCountMovements(countMovements + 1);
        }
      }
      return newFlipped;
    });
  };

  return (
    <>
      <div className="flex justify-evenly items-center w-109 lg:w-145 md:w-125 h-15 shadow-xl shadow-[#131066] bg-[#050335] md:mt-10 p-10 rounded-2xl font-bold">
        <div className="text-center">
          <h3 className="text-2xl text-blue-500"> Timer</h3>
          <span className="">{timer ? timeFormat(timer) : "00:00"} </span>
        </div>

        <div className="text-center">
          <h3 className="text-2xl text-green-700"> Movements</h3>
          <span> {countMovements && countMovements} </span>
        </div>
      </div>

      {isWinner ? (
        <div className="flex flex-col gap-4 mt-20 md:m-20 lg:m-20 text-center">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl p-10">
            Congratulations{" "}
          </h1>{" "}
          <span className="text-xl">Game has been completed.</span>
          <button
            onClick={playAgain}
            className="bg-white text-black text-xl self-center font-bold py-7 mt-5 w-50 rounded-2xl cursor-pointer shadow-lg shadow-custom button"
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <div
          className={`${
            length === 36
              ? "grid grid-cols-6 gap-2 mt-5"
              : length === 64
              ? "grid grid-cols-8 gap-1 md:gap-1.5 lg:gap-1.5 mt-5"
              : "grid grid-cols-4 gap-3"
          } mt-10 md:m-10 lg:m-10 text-center`}
        >
          {boardLength &&
            boardLength.map((element, index) => (
              <button
                key={index}
                onClick={() => boardCardTurned(element, index)}
                className={` ${
                  length === 36
                    ? "h-15 w-15 md:h-20 md:w-20 lg:h-23 lg:w-23 p-3 text-2xl md:p-5 lg:p-5 md:text-3xl lg:text-3xl"
                    : length === 64
                    ? "h-13 w-13 md:h-16 md:w-16 lg:h-18 lg:w-18 p-2 text-2xl md:p-4 lg:p-5"
                    : "h-32 w-25 md:h-35 md:w-32 p-9 text-3xl md:p-12 lg:p-15"
                } flex items-center justify-center bg-green-800 cursor-pointer rounded-2xl text-white font-bold button`}
              >
                {element}
              </button>
            ))}
        </div>
      )}
    </>
  );
};
