"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

type Props = Omit<ImageProps, "onLoad" | "onError"> & {
  skeletonClassName?: string;
  // Set true when a parent Framer Motion element already handles the reveal —
  // skips the internal skeleton/fade so the two don't conflict.
  plain?: boolean;
};

export default function ImageWithFallback({ skeletonClassName, className, alt, plain, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-charcoal-light gap-2 ${skeletonClassName ?? "w-full h-full"}`}>
        <ImageOff size={22} className="text-gray-600" strokeWidth={1.5} />
        <span className="text-[10px] text-gray-600 uppercase tracking-wider">Bild nicht verfügbar</span>
      </div>
    );
  }

  if (plain) {
    return (
      <Image
        {...props}
        alt={alt}
        className={className}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`absolute inset-0 animate-pulse bg-gradient-to-br from-gray-700/40 to-gray-800/40 ${skeletonClassName ?? ""}`} />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}
