"use client";

import Lottie from "lottie-react";

const pulseAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 64,
  h: 64,
  nm: "pulse-dot",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Dot",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [32, 32, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [72, 72, 100] },
            { t: 30, s: [100, 100, 100] },
            { t: 60, s: [72, 72, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [26, 26] },
          nm: "Ellipse Path 1",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill 1",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

export function LottiePulseIcon() {
  return <Lottie animationData={pulseAnimation} loop autoplay className="h-7 w-7" />;
}
