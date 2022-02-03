import React from 'react';

interface BackProps {
  className?: string;
}

const Back: React.FC<BackProps> = ({ className }) => (
  <svg width="46" height="45" className={className} viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="1">
      <rect x="41" y="40" width="36" height="35" rx="17.5" transform="rotate(-180 41 40)" fill="#004FFF"/>
      <rect x="43.5" y="42.5" width="41" height="40" rx="20" transform="rotate(-180 43.5 42.5)" stroke="#004FFF" strokeOpacity="0.3" strokeWidth="5"/>
    </g>
    <path d="M24.59 28L26 26.59L21.42 22L26 17.41L24.59 16L18.59 22L24.59 28Z" fill="white"/>
    <path d="M21.0661 21.6468L20.7137 22L21.0661 22.3532L25.2933 26.5896L24.59 27.2929L19.2971 22L24.59 16.7071L25.2933 17.4104L21.0661 21.6468Z" stroke="#004FFF" strokeOpacity="0.3"/>
  </svg>
);

export default Back;
