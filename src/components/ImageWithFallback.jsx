import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = "",
  className = "",
  fallbackText = "Image unavailable",
  loading = "lazy",
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`bg-brand-surface border border-brand-border flex flex-col items-center justify-center p-4 text-brand-muted text-xs text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 mb-2 text-brand-border" />
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-brand-surface ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-brand-surface animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
}
