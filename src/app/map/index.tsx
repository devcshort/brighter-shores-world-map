"use client";
import { Map as LibreMap } from "maplibre-gl";
import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

export function Map() {
  const bsmap = useRef(null);

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
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={bsmap}
      className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
    ></div>
  );
}
