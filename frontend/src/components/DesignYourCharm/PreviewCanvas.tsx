import React, { useRef, useState } from 'react'
import type { CharmPlacement } from '../../types';

export default function PreviewCanvas({
  chainImage,
  charms,
  setSelectedCharms,
  innerRef,
}: Readonly<{
  chainImage: string;
  charms: CharmPlacement[];
  setSelectedCharms: React.Dispatch<React.SetStateAction<CharmPlacement[]>>;
  innerRef: React.RefObject<HTMLDivElement>;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<number | null>(null);

  const handleMouseDown = (index: number) => {
    setDragging(index);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging === null) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const leftPct = (x / rect.width) * 100;
    const topPct = (y / rect.height) * 100;

    setSelectedCharms((prev: CharmPlacement[]) => {
      const next = [...prev];
      if (next[dragging]) {
        next[dragging] = {
          ...next[dragging],
          leftPct,
          topPct,
        };
      }
      return next;
    });
  };

  const stopDragging = () => setDragging(null);

  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        (
          containerRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = el;
        if (innerRef) {
          if (typeof innerRef === "function") {
            (innerRef as (instance: HTMLDivElement | null) => void)(el);
          } else {
            try {
              (
                innerRef as React.MutableRefObject<HTMLDivElement | null>
              ).current = el;
            } catch {
              // read-only ref: ignore assignment
            }
          }
        }
      }}
      className="relative w-72 h-72 md:w-96 md:h-96"
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      <img alt="" src={chainImage} className="w-full h-full object-contain" />

      {charms.map((charm, i) => {
        if (!charm) return null;
        return (
          <img
            key={charm.src}
            src={charm.src}
            className="absolute w-20 h-20 object-contain cursor-grab active:cursor-grabbing -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${charm.leftPct}%`,
              top: `${charm.topPct}%`,
            }}
            onMouseDown={() => handleMouseDown(i)}
          />
        );
      })}
    </div>
  );
}
