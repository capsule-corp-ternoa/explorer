import React from 'react';

interface UpDownProps {
  className?: string
}

const UpDown: React.FC<UpDownProps> = ({ className }) => (
  <svg width="8" height="13" className={className} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.58266 0.632493C3.78028 0.332989 4.21972 0.332989 4.41734 0.632494L6.95249 4.47463C7.17184 4.80706 6.93342 5.25 6.53515 5.25H1.46485C1.06657 5.25 0.828165 4.80706 1.04751 4.47463L3.58266 0.632493Z" fill="white"/>
    <path d="M4.41734 12.3675C4.21972 12.667 3.78028 12.667 3.58266 12.3675L1.04751 8.52537C0.828165 8.19294 1.06658 7.75 1.46485 7.75L6.53515 7.75C6.93343 7.75 7.17184 8.19294 6.95249 8.52537L4.41734 12.3675Z" fill="white"/>
  </svg>
);

export default UpDown;
