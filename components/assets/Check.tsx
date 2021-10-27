import React from 'react';

interface CheckProps {
  className?: string;
  fillColor?: string;
}

const Check: React.FC<CheckProps> = ({ className, fillColor }) => (
  <svg width="17" height="14" className={className} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.85" d="M5.9987 11.2353L2.21012 7.1138L0.947266 8.48762L5.9987 13.9829L16.8232 2.20731L15.5603 0.833496L5.9987 11.2353Z" fill={fillColor ? fillColor : 'white'}/>
  </svg>
);

export default Check;