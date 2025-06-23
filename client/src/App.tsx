import { Fragment, useEffect, useState, WheelEvent } from "react";
import "./App.css";
import { items, rulerLabel } from "./items.ts";

const viewSize = 1000;
const zoomMultiplier = Math.pow(10, 1 / 10);
const sliceSize = 5;

function App() {
  const [sliceStart, setSliceStart] = useState(30);
  const [zoom, setZoom] = useState(0);

  function handleZoom(increment: number) {
    setZoom((zoom) => {
      const newZoom = zoom + increment;
      if (newZoom < 0) {
        setSliceStart(sliceStart - 1);
        return 9;
      }
      if (newZoom > 9) {
        setSliceStart(sliceStart + 1);
        return 0;
      }
      return newZoom;
    });
  }

  function handleWheelEvent(event: WheelEvent) {
    const increment = Math.abs(event.deltaY) / -event.deltaY;

    handleZoom(increment);
  }

  /**
   * <Rectangle w={500} zoom={zoom} name="Grain of salt (0.5 mm)" />
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
   */
  useEffect(() => {
    console.log(sliceStart);
  }, [sliceStart]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: viewSize,
          height: viewSize + 25,
        }}
        onWheel={handleWheelEvent}
      >
        <div
          style={{
            border: "1px solid black",
            height: viewSize,
            position: "relative",
          }}
        >
          {items.slice(sliceStart, sliceStart + sliceSize).flatMap((ims, i) => {
            const multiplier = 100 * Math.pow(zoomMultiplier, zoom) /
              Math.pow(10, i);
            return (
              <Fragment key={i}>
                {ims.map((item) => {
                  if (item.image) {
                    return (
                      <img
                        key={item.name}
                        src={item.image}
                        alt={item.name}
                        width={item.width * multiplier}
                        style={{
                          position: "absolute",
                          left: item.left * multiplier,
                          bottom: item.bottom * multiplier,
                          clipPath: item.clipPath,
                          ...(item.imageStyle || {}),
                        }}
                        title={item.name}
                      />
                    );
                  }
                })}
              </Fragment>
            );
          })}
        </div>
        <div
          style={{
            position: "relative",
            right: 0,
            width: `${viewSize * Math.pow(zoomMultiplier, zoom)}px`,
            border: "1px solid black",
            borderWidth: "0 2px 0 0",
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "16px",
            display: "flex",
            textWrap: "nowrap",
          }}
        >
          {
            /* <div style={{ width: "100%", height: "10px" }}>
          </div> */
          }
          <div
            style={{
              width: "100%",
              height: "10px",
              // borderLeft: "1px solid black",
            }}
          >
            {rulerLabel[sliceStart - 2]}
          </div>
          {Array.from({ length: 9 }).map((_, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: "10px",
                  borderLeft: "2px solid black",
                }}
              />
            );
          })}
        </div>
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
