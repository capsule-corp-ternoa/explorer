import React from 'react';

interface RightArrowProps {
  className?: string;
  opacity?: number
}

const RightArrow: React.FC<RightArrowProps> = ({ className, opacity }) => (
  <svg width="35" height="34" className={className} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity? opacity:1}>
      <path d="M4 17C4 9.8203 9.8203 4 17 4H17.7429C24.9226 4 30.7429 9.8203 30.7429 17C30.7429 24.1797 24.9226 30 17.7429 30H17C9.8203 30 4 24.1797 4 17Z" fill="#004FFF"/>
      <path d="M17 7.71429H17.7429V0.285714H17V7.71429ZM17.7429 26.2857H17V33.7143H17.7429V26.2857ZM17 26.2857C11.8716 26.2857 7.71429 22.1284 7.71429 17H0.285714C0.285714 26.231 7.76895 33.7143 17 33.7143V26.2857ZM27.0286 17C27.0286 22.1284 22.8712 26.2857 17.7429 26.2857V33.7143C26.9739 33.7143 34.4571 26.231 34.4571 17H27.0286ZM17.7429 7.71429C22.8712 7.71429 27.0286 11.8716 27.0286 17H34.4571C34.4571 7.76896 26.9739 0.285714 17.7429 0.285714V7.71429ZM17 0.285714C7.76895 0.285714 0.285714 7.76896 0.285714 17H7.71429C7.71429 11.8716 11.8716 7.71429 17 7.71429V0.285714Z" fill="#004FFF" fillOpacity="0.3"/>
    </g>
    <path d="M16.1905 12.9141L15.1431 13.9615L18.5454 17.3712L15.1431 20.7809L16.1905 21.8283L20.6476 17.3712L16.1905 12.9141Z" fill="white"/>
    <path d="M18.8083 17.6336L19.0701 17.3712L18.8083 17.1089L15.6681 13.9618L16.1905 13.4393L20.1224 17.3712L16.1905 21.3031L15.6681 20.7806L18.8083 17.6336Z" stroke="#004FFF" strokeOpacity="0.3" strokeWidth="0.742857"/>
  </svg>
);

export default RightArrow;
