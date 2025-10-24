// src/components/DesignYourCharm/DesignCanvas.tsx
import { useEffect, useRef, useState } from "react";
import type { Charm } from "../../types";

interface ChainPreset {
  id: string;
  label?: string;
  color: string;
  width: number;
}

interface Props {
  charms: Charm[];
  activeCharmId: string | null;
  onSelectCharm: (id: string | null) => void;
  onUpdateCharmT: (id: string, t: number) => void;
  chainPreset: ChainPreset;
}

/**
 * Canvas draws a cubic Bezier curve (chain) and places charms along it by t parameter.
 * It supports selecting a charm by clicking it and dragging (horizontal) to move along the curve.
 */
export default function DesignCanvas({
  charms,
  activeCharmId,
  onSelectCharm,
  onUpdateCharmT,
  chainPreset,
}: Readonly<Props>) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragCharmIdRef = useRef<string | null>(null);

  // curve control points (relative within canvas). You can later compute these from chain length.
  const P0 = { x: 40, y: 60 };
  const P1 = { x: 75, y: 10 };
  const P2 = { x: 225, y: 10 };
  const P3 = { x: 260, y: 60 };

  const canvasW = 320;
  const canvasH = 420;

  // evaluate cubic bezier at t
  const bezierPoint = (t: number) => {
    const mt = 1 - t;
    const x =
      mt * mt * mt * P0.x +
      3 * mt * mt * t * P1.x +
      3 * mt * t * t * P2.x +
      t * t * t * P3.x;
    const y =
      mt * mt * mt * P0.y +
      3 * mt * mt * t * P1.y +
      3 * mt * t * t * P2.y +
      t * t * t * P3.y;
    return { x, y };
  };

  // sample many points to find closest t to a mouse point (for projection)
  const findClosestT = (mx: number, my: number) => {
    let bestT = 0;
    let bestDist = Infinity;
    const samples = 200; // trade-off resolution/perf
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const p = bezierPoint(t);
      const dx = p.x - mx;
      const dy = p.y - my;
      const d = dx * dx + dy * dy;
      if (d < bestDist) {
        bestDist = d;
        bestT = t;
      }
    }
    return { t: bestT, dist2: bestDist };
  };

  // render loop
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // clear
    ctx.clearRect(0, 0, canvasW, canvasH);

    // background / frame
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasW, canvasH);

    // draw chain (cubic bezier stroke)
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = chainPreset.color;
    ctx.lineWidth = chainPreset.width;
    ctx.beginPath();
    ctx.moveTo(P0.x, P0.y);
    ctx.bezierCurveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
    ctx.stroke();

    // subtle chain shadow (thin)
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = "rgba(0,0,0,0.05)";
    ctx.beginPath();
    ctx.moveTo(P0.x, P0.y + 4);
    ctx.bezierCurveTo(P1.x, P1.y + 4, P2.x, P2.y + 4, P3.x, P3.y + 4);
    ctx.stroke();

    // draw charms
    charms.forEach((charm) => {
      const p = bezierPoint(charm.t);
      const isActive = charm.id === activeCharmId;
      // draw connector (tiny loop)
      ctx.beginPath();
      ctx.fillStyle = "#cfcfcf";
      ctx.arc(p.x, p.y - 6, 2.6, 0, Math.PI * 2);
      ctx.fill();

      // charm visual (circle with letter) - replace later with image/SVG drawing
      const r = isActive ? 14 : 11;
      ctx.beginPath();
      ctx.fillStyle = charm.color ?? "#f97316";
      ctx.arc(p.x, p.y + r, r, 0, Math.PI * 2);
      ctx.fill();

      // outline if active
      if (isActive) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ec4899";
        ctx.stroke();
      }

      // letter/value
      if (charm.value) {
        ctx.fillStyle = "#111827";
        ctx.font = `${isActive ? 12 : 11}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(charm.value).slice(0, 2), p.x, p.y + r);
      }
    });

    // optional: instructions text
    ctx.fillStyle = "#6b7280";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "Drag charms along the chain. Click a charm to select.",
      canvasW / 2,
      canvasH - 10
    );
  }, [charms, activeCharmId, chainPreset]);

  // mouse handlers: support selecting and dragging charms along curve
  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const rect = () => canvas.getBoundingClientRect();

    const onDown = (e: MouseEvent) => {
      const r = rect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      let chosen: { id: string; dist2: number } | null = null;
      charms.forEach((c) => {
        const p = bezierPoint(c.t);
        const dx = p.x - mx;
        const dy = p.y + (c.id === activeCharmId ? 14 : 11) - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 20 * 20) {
          if (!chosen || d2 < chosen.dist2) chosen = { id: c.id, dist2: d2 };
        }
      });

      if (chosen) {
        onSelectCharm((chosen as {id: string; dist2: number}).id);
        dragCharmIdRef.current = (chosen as {id: string; dist2: number}).id;
        setIsDragging(true);
      } else {
        onSelectCharm(null);
      }
    };

    const onMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const r = rect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;

      const { t } = findClosestT(mx, my);
      const id = dragCharmIdRef.current;
      if (id) {
        // clamp t slightly so charms don't go to extremes
        const clamped = Math.max(0.05, Math.min(0.95, t));
        onUpdateCharmT(id, clamped);
      }
    };

    const onUp = () => {
      setIsDragging(false);
      dragCharmIdRef.current = null;
    };

    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [charms, isDragging, onSelectCharm, onUpdateCharmT, activeCharmId]);

  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <canvas
        ref={ref}
        width={canvasW}
        height={canvasH}
        className="border border-gray-200 rounded-lg bg-white shadow-sm touch-none"
      />
    </div>
  );
}
