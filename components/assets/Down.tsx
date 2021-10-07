import React from 'react';

interface DownProps {
  className?: string;
}

const Down: React.FC<DownProps> = ({ className }) => (
  /* candidate color: #9F9FFF */
  <svg width="15" height="10" className={className} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.95164 3.3445C8.14968 4.21516 6.76199 4.16648 6.02814 3.24196L4.08157 0.789594C3.41389 -0.0515719 2.17518 -0.157208 1.37032 0.558384C0.624783 1.22124 0.526558 2.35017 1.14675 3.12798L5.96712 9.17339C6.72215 10.1203 8.15595 10.1392 8.94104 9.21255L14.1784 3.03088C14.7947 2.30344 14.7474 1.22543 14.07 0.558482C13.3381 -0.162042 12.1532 -0.13131 11.4554 0.626295L8.95164 3.3445Z" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0.0659614" y1="3.84816" x2="10.0386" y2="3.66884" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5921"/>
        <stop offset="1" stopColor="#FF8501"/>
      </linearGradient>
    </defs>
  </svg>
);

export default Down;
