import { useState, WheelEvent } from "react";
import "./App.css";

const largestViewBoxSize = 1000000;

function App() {
  const [zoom, setZoom] = useState(1);

  function handleZoom(increment: number) {
    setZoom((zoom) => {
      const newZoom = zoom + increment;

      return newZoom <= 0 ? 1 : newZoom > 1000 ? 1000 : newZoom;
    });
  }

  function handleWheelEvent(event: WheelEvent) {
    const increment = Math.abs(event.deltaY) / -event.deltaY;

    handleZoom(increment);
  }

  const viewBoxSize = largestViewBoxSize * Math.pow(0.9, zoom);

  return (
    <div>
      <svg
        onWheel={handleWheelEvent}
        width="1000"
        height="1000"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ border: "1px solid black" }}
      >
        <Rectangle w={2 * 9000} viewBoxSize={viewBoxSize} />
        <Circle r={3000} viewBoxSize={viewBoxSize} />
        <Circle r={1000} viewBoxSize={viewBoxSize} />
      </svg>
      <button
        style={{ width: "100px", height: "100px", fontSize: "50px" }}
        type="button"
        onClick={() => handleZoom(1)}
      >
        +
      </button>
      <button
        style={{ width: "100px", height: "100px", fontSize: "50px" }}
        type="button"
        onClick={() => handleZoom(-1)}
      >
        -
      </button>
    </div>
  );
}

function Circle({ r = 1, viewBoxSize = 1 }) {
  return <circle cx={r * 2} cy={viewBoxSize - r} r={r} fill="green" />;
}

function Rectangle({ w = 1, viewBoxSize = 1 }) {
  return (
    <rect x={w / 2} y={viewBoxSize - w} width={w} height={w} fill="green" />
  );
}

export default App;
