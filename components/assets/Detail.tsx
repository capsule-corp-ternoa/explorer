import React from 'react';

interface DetailProps {
  className?: string;
}

const Detail: React.FC<DetailProps> = ({ className }) => (
  <svg className={className} width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0279 9.61681L19.0557 15.6446L13.0279 21.6724" stroke="white" strokeWidth="1.80833" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1" y="1" width="29" height="29" rx="14.5" stroke="url(#paint0_linear_690_3111)" strokeWidth="2"/>
  <defs>
  <linearGradient id="paint0_linear_690_3111" x1="-4.39292e-07" y1="15.8626" x2="30.9698" y2="15.8626" gradientUnits="userSpaceOnUse">
  <stop stopColor="#004FFF"/>
  <stop offset="0.333333" stopColor="#CB06ED"/>
  <stop offset="0.682292" stopColor="#FF0062"/>
  <stop offset="1" stopColor="#FF8500"/>
  </linearGradient>
  </defs>
  </svg>
  
  
  
);

export default Detail;
