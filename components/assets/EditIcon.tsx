import React from 'react';

interface CAPSLogoProps {
  className?: string;
}

const EditIcon: React.FC<CAPSLogoProps> = ({ className }) => (

  <svg className={className} width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M2.40939 7.1432H6.02261V8.09167H2.40939V7.1432ZM2.40939 5.24626H6.02261V6.19473H2.40939V5.24626ZM5.11931 0.503906H1.50609C1.00927 0.503906 0.602783 0.930718 0.602783 1.45238V9.04014C0.602783 9.5618 1.00475 9.98861 1.50157 9.98861H6.92592C7.42274 9.98861 7.82922 9.5618 7.82922 9.04014V3.34932L5.11931 0.503906ZM6.92592 9.04014H1.50609V1.45238H4.66766V3.82355H6.92592V9.04014Z" fill="white"/>
  </svg>

);

export default EditIcon;