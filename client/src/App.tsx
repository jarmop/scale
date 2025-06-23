import { useState, WheelEvent } from "react";
import "./App.css";

const viewSize = 1000;

function App() {
  const [zoom, setZoom] = useState(0);

  function handleZoom(increment: number) {
    setZoom((zoom) => {
      const newZoom = zoom + increment;

      return newZoom < 0 ? 10 : newZoom > 10 ? 0 : newZoom;
    });
  }

  function handleWheelEvent(event: WheelEvent) {
    const increment = Math.abs(event.deltaY) / -event.deltaY;

    handleZoom(increment);
  }
  console.log(zoom);
  // const relativeSize = viewSize * Math.pow(1.01, zoom);

  const viewBoxSize = viewSize - zoom * 100;

  console.log(viewBoxSize);

  const items = [
    [{
      name: "orca",
      x: 10,
      y: viewSize - 500,
      width: 800,
      height: 100,
    }, {
      name: "human",
      x: 100,
      y: viewSize - 200,
      width: 50,
      height: 200,
    }],
    [{
      name: "cat",
      x: 100,
      y: 600,
      width: 400,
      height: 400,
    }],
    [{
      name: "mouse",
      x: 100,
      y: 400,
      width: 400,
      height: 200,
    }],
  ];

  return (
    <div style={{ display: "flex" }}>
      <div
        onWheel={handleWheelEvent}
      >
        <svg
          width={viewSize}
          height={viewSize}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ border: "1px solid black" }}
          viewBox={`0 ${viewSize - viewBoxSize} ${viewBoxSize} ${viewBoxSize}`}
        >
          {items.flatMap((ims, i) => {
            const multiplier = Math.pow(10, i);
            return (
              ims.map((item) => {
                return (
                  <rect
                    key={item.name}
                    x={item.x / multiplier}
                    y={viewSize - (viewSize - item.y) / multiplier}
                    width={item.width / multiplier}
                    height={item.height / multiplier}
                    fill="green"
                  />
                );
              })
            );
          })}
        </svg>
      </div>
      <div>
        <button
          style={{ width: "100px", height: "50px", fontSize: "20px" }}
          type="button"
          onClick={() => handleZoom(1)}
        >
          +
        </button>
        <button
          style={{ width: "100px", height: "50px", fontSize: "20px" }}
          type="button"
          onClick={() => handleZoom(-1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
