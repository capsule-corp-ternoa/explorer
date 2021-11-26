import React from 'react';

interface DetailProps {
  className?: string;
}

const Detail: React.FC<DetailProps> = ({ className }) => (
  <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17.5" cy="17.5" r="14.5" fill="#004FFF"/>
    <circle cx="17.5" cy="17.5" r="15.6447" stroke="#004FFF" strokeOpacity="1" strokeWidth="2.28947"/>
    <path d="M16.3189 11.7732C15.8918 11.3462 15.1995 11.3462 14.7724 11.7732C14.3457 12.2 14.3453 12.8917 14.7716 13.3189L19.0206 17.5772L14.7716 21.8355C14.3453 22.2627 14.3457 22.9545 14.7724 23.3812C15.1995 23.8082 15.8918 23.8082 16.3189 23.3812L21.0267 18.6734C21.6321 18.068 21.6321 17.0864 21.0267 16.481L16.3189 11.7732Z" fill="white"/>
  </svg>
);

export default Detail;
