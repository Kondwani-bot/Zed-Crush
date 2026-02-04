
import React from 'react';

export const CompassIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21C7.029 21 3 16.971 3 12S7.029 3 12 3s9 4.029 9 9-4.029 9-9 9z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-3-9-3 9 5.5-2.5L9 15" />
  </svg>
);
