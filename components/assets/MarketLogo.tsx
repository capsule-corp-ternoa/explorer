import React from 'react';

interface CAPSLogoProps {
  className?: string;
}

const CAPSLogo: React.FC<CAPSLogoProps> = ({ className }) => (
  <svg width="45" height="45" className={className} viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3134 26.3124C2.69137 28.6861 6.82528 28.6861 11.8927 27.1915C18.6492 32.1148 28.1171 30.6642 33.0512 24.0266C34.9625 21.4331 35.9849 18.356 35.9849 15.1471C35.9849 14.5757 35.9405 14.0482 35.896 13.4767C39.7632 9.8722 41.8524 6.35559 40.43 3.98188C39.052 1.60817 34.9181 1.65213 29.8507 3.10273C23.1387 -1.82052 13.6262 -0.413879 8.69221 6.26768C6.78083 8.86118 5.71402 11.9382 5.71402 15.1471C5.71402 15.7186 5.75847 16.2461 5.80292 16.8175C1.98016 20.422 -0.109019 23.9386 1.3134 26.3124ZM20.8717 27.9388C18.6936 27.9388 16.5155 27.3673 14.6041 26.3124C18.0713 25.0376 21.4495 23.4551 24.65 21.6089C27.8504 19.8066 30.9175 17.6967 33.8068 15.3669C33.6735 22.3122 27.9393 27.8948 20.8717 27.9388ZM38.5186 5.08082C39.052 6.00393 37.9852 8.15786 35.407 10.8832C34.7403 8.64139 33.5401 6.57538 31.8954 4.86104C35.5404 3.98188 37.9852 4.11376 38.5186 5.08082ZM20.8717 2.35545C27.0503 2.35545 32.34 6.6633 33.5401 12.6415C30.473 15.3229 27.0948 17.6967 23.5387 19.7187C19.9827 21.7847 16.2488 23.4551 12.3372 24.7738C6.95863 20.1143 6.42523 12.0701 11.137 6.75121C13.6262 3.93793 17.1378 2.35545 20.8717 2.35545ZM6.33633 19.411C7.00308 21.6528 8.20325 23.7189 9.84793 25.4332C6.20297 26.3124 3.75819 26.1365 3.22478 25.2134C2.69137 24.2903 3.75819 22.0924 6.33633 19.411Z" fill="white"/>
  </svg>
);

export default CAPSLogo;