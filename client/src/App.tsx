import { useState, WheelEvent } from "react";
import "./App.css";

const viewSize = 1000;

function App() {
  const [zoom, setZoom] = useState(1);

  function handleZoom(increment: number) {
    setZoom((zoom) => {
      const newZoom = zoom + increment;

      return newZoom <= 0 ? 1 : newZoom > 10000 ? 10000 : newZoom;
    });
  }

  function handleWheelEvent(event: WheelEvent) {
    const increment = Math.abs(event.deltaY) / -event.deltaY;

    handleZoom(increment);
  }

  const relativeSize = viewSize * Math.pow(1.01, zoom);

  console.log(relativeSize);

  return (
    <div>
      <svg
        onWheel={handleWheelEvent}
        width="1000"
        height="1000"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ border: "1px solid black" }}
      >
        <text x="20" y="20">Zoom {Math.floor(relativeSize / viewSize)} x</text>
        <Rectangle w={500} zoom={zoom} name="Grain of salt (0.5 mm)" />
        <Rectangle w={100} zoom={zoom} name="Large cell (100 µm)" />
        <Rectangle w={10} zoom={zoom} name="Small cell (10 µm)" />
        <Rectangle
          w={1}
          zoom={zoom}
          name="Bacteria / Mitochondria / Chromosome (1 µm)"
        />
        <Rectangle
          w={0.1}
          zoom={zoom}
          name="Flu virus / Largest molecule (100 nm)"
        />
        <Rectangle w={0.01} zoom={zoom} name="Protein (10 nm)" />
        <Rectangle w={0.001} zoom={zoom} name="Lipid (1 nm)" />
        <Rectangle w={1e-4} zoom={zoom} name="Atom (0.1 nm)" />
      </svg>
      {
        /* <button
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
      </button> */
      }
    </div>
  );
}

function Rectangle({ w = 1, zoom = 1, name = "foo" }) {
  const size = w * Math.pow(1.01, zoom);

  return (
    <>
      <rect
        x={size / 2}
        y={1000 - size}
        width={size}
        height={size}
        fill="green"
      />
      <text
        x={size / 2}
        y={1000 - size - size / 60}
        style={{ fontSize: `${size / 20}px` }}
      >
        {name}
      </text>
    </>
  );
}

export default App;
