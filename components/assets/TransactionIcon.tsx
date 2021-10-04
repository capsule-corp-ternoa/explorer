import React from 'react';

interface CAPSLogoProps {
  className?: string;
}

const TransactionIcon: React.FC<CAPSLogoProps> = ({ className }) => (
  <svg 
    className={className} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.87661 3.34788C2.87661 2.98629 3.16973 2.69317 3.53132 2.69317H8.26625C8.54037 2.69317 8.76259 2.91539 8.76259 3.18951C8.76259 3.62219 9.27764 3.8477 9.59558 3.55422L10.5958 2.63093C10.8767 2.37169 10.8767 1.928 10.5958 1.66876L9.59558 0.745479C9.27765 0.451998 8.76259 0.677504 8.76259 1.11019C8.76259 1.38431 8.54037 1.60653 8.26625 1.60653H2.35413C1.99254 1.60653 1.69941 1.89965 1.69941 2.26124V4.27786C1.69941 4.60293 1.96294 4.86645 2.28801 4.86645C2.61308 4.86645 2.87661 4.60293 2.87661 4.27786V3.34788ZM8.76259 7.47167C8.76259 7.83326 8.46947 8.12638 8.10788 8.12638H3.37295C3.09883 8.12638 2.87661 7.90416 2.87661 7.63004C2.87661 7.19736 2.36155 6.97185 2.04362 7.26533L1.04339 8.18862C0.762548 8.44786 0.762547 8.89155 1.04339 9.15079L2.04362 10.0741C2.36155 10.3676 2.87661 10.142 2.87661 9.70936C2.87661 9.43524 3.09883 9.21302 3.37295 9.21302H9.28507C9.64666 9.21302 9.93979 8.9199 9.93979 8.55831V6.5417C9.93979 6.21662 9.67626 5.9531 9.35119 5.9531C9.02611 5.9531 8.76259 6.21662 8.76259 6.5417V7.47167Z" fill="url(#paint0_radial)"/>
    <defs>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.11099 10.6053) rotate(-42.573) scale(11.1932 11.2221)">
      <stop offset="0.0767536" stopColor="#004FFF"/>
      <stop offset="0.477579" stopColor="#CB06ED"/>
      <stop offset="0.778711" stopColor="#FF0062"/>
      <stop offset="1" stopColor="#FF8500"/>
      </radialGradient>
    </defs>
  </svg>

);

export default TransactionIcon;