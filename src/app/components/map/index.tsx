"use client";
import { Map as LibreMap, NavigationControl } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

export function Map() {
  const bsmap = useRef(null);
  const [coordinates, setCoordinates] = useState(["0", "0"]);

  useEffect(() => {
    if (!bsmap.current) return;

    const map = new LibreMap({
      container: bsmap.current,
      style: {
        version: 8,
        sources: {
          "world-tiles": {
            type: "raster",
            tiles: ["/tiles/{z}/{x}/{y}.png"],
            tileSize: 256,
            minzoom: 0,
            maxzoom: 5,
          },
        },
        layers: [
          {
            id: "world-layer",
            type: "raster",
            source: "world-tiles",
            paint: {
              "raster-opacity": 1,
            },
          },
        ],
      },
      center: [0, 0],
      minZoom: 1.5,
      maxZoom: 5,
      attributionControl: false,
      antialias: false,
      renderWorldCopies: false,
    });

    map.addControl(new NavigationControl({ showCompass: false }));

    map.on("mousemove", (e) => {
      const { lng, lat } = e.lngLat;
      setCoordinates([lng.toFixed(4), lat.toFixed(4)]);
    });

    map.on("load", () => {
      const canvasElements = document.getElementsByTagName("canvas");
      for (const canvas of canvasElements) {
        canvas.style.imageRendering = "pixelated"; // Modern browsers
        canvas.style.imageRendering = "-moz-crisp-edges"; // Firefox
        canvas.style.imageRendering = "-webkit-crisp-edges"; // Safari
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={bsmap}
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-0"
      ></div>

      <div className="bg-white p-2 bottom-2 right-2 absolute text-black font-semibold text-sm flex items-center justify-center rounded-md shadow-md">
        {coordinates.join(", ")}
      </div>
    </>
  );
}
