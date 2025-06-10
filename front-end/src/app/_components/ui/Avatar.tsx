import React from "react";

export const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-10 h-10 rounded-full object-cover"
  />
);
