import { useState, useEffect } from "react";
import "./game.scss";
import Classnames from "classnames";

export default function App() {
  const [mark, setMark] = useState({});
  useEffect(() => {
    let markTemp = {};
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        markTemp[`field${i}_${j}`] = "N";
      }
    }
    setMark(markTemp);
  }, []);
  return (
    <div className="game">
      <div className="board">
        {[0, 1, 2].map((m) => {
          return (
            <div className="col">
              {[0, 1, 2].map((n) => {
                return (
                  <div
                    className={Classnames({
                      field: true,
                      [`field${m}_${n}`]: true
                    })}
                    onClick={(e) => {
                      let markCpy = { ...mark };
                      markCpy[`field${m}_${n}`] = "X";
                      setMark(markCpy);
                    }}
                  >
                    {mark[`field${m}_${n}`]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
