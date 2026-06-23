"use client";

import { useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
};

const BASE_PATH = "/personal-web-page";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState(0);

  if (screenshots.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="overflow-hidden rounded-lg border border-[var(--line)]">
        <img
          src={`${BASE_PATH}${screenshots[active].src}`}
          alt={screenshots[active].alt}
          className="w-full h-auto"
        />
      </div>

      {/* Thumbnails */}
      {screenshots.length > 1 && (
        <div className="flex gap-3">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-md border-2 transition ${
                i === active
                  ? "border-[var(--accent)]"
                  : "border-[var(--line)] opacity-60 hover:opacity-100"
              }`}
            >
              <img src={`${BASE_PATH}${s.src}`} alt={s.alt} className="w-20 h-14 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
