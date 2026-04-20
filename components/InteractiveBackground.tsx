"use client";

import { useEffect, useRef, useState } from "react";

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  if (!isClient) return null;

  const offsetX = (mousePosition.x - 0.5) * 40;
  const offsetY = (mousePosition.y - 0.5) * 40;
  const offsetX2 = (mousePosition.x - 0.5) * 60;
  const offsetY2 = (mousePosition.y - 0.5) * 60;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" style={{ top: "-10%", left: "-10%", transform: `translate(${ offsetX}px, ${offsetY}px)`, transition: "transform 0.1s ease-out" }} />
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" style={{ top: "5%", right: "-5%", transform: `translate(${-offsetX}px, ${offsetY}px)`, transition: "transform 0.1s ease-out" }} />
      <div className="absolute w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl" style={{ bottom: "10%", left: "5%", transform: `translate(${offsetX2}px, ${-offsetY2}px)`, transition: "transform 0.1s ease-out" }} />
      <div className="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" style={{ bottom: "0%", right: "5%", transform: `translate(${-offsetX2}px, ${offsetY2}px)`, transition: "transform 0.1s ease-out" }} />
      <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" style={{ top: "50%", left: "50%", transform: `translate(calc(-50% + ${offsetX * 0.5}px), calc(-50% + ${offsetY * 0.5}px))`, transition: "transform 0.1s ease-out" }} />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%, transparent)", backgroundSize: "50px 50px", transform: `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)`, transition: "transform 0.1s ease-out" }} />
    </div>
  );
}
