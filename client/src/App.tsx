import { Fragment, useEffect, useState, WheelEvent } from "react";
import "./App.css";
import { items, rulerLabel } from "./items.ts";
import type { Item } from "./items.ts";

const viewWidth = 1600;
const viewSize = 1000;
const zoomMultiplier = Math.pow(10, 1 / 10);
const sliceSize = 5;

function getAllTypes(items: Item[][]): string[] {
  const types = new Set<string>();
  items.flat().forEach((item: Item) => {
    if (item.type) {
      item.type.forEach((t) => types.add(t));
    }
  });
  return Array.from(types);
}

function App() {
  const [sliceStart, setSliceStart] = useState(34);
  const [zoom, setZoom] = useState(0);
  const [visibleTypes, setVisibleTypes] = useState<string[]>([]);
  const allTypes = getAllTypes(items);

  function handleTypeChange(type: string) {
    setVisibleTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

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

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: viewWidth,
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
                {(ims as Item[])
                  .filter(
                    (item: Item) =>
                      visibleTypes.length === 0 ||
                      (item.type &&
                        item.type.some((t) => visibleTypes.includes(t))),
                  )
                  .map((item: Item) => {
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
                    return null;
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
          {Array.from({ length: 9 }).map((_, i: number) => {
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
        <div style={{ marginTop: 20 }}>
          <div>Show only:</div>
          {allTypes.map((type: string) => (
            <label key={type} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={visibleTypes.includes(type)}
                onChange={() =>
                  handleTypeChange(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
