import React from 'react';

interface CopyProps {
  className?: string;
}

const Copy: React.FC<CopyProps> = ({ className }) => (
  <svg className={className} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4.5673C1 4.06144 1.41008 3.65137 1.91593 3.65137H8.32744C8.83329 3.65137 9.24336 4.06144 9.24336 4.5673V10.9788C9.24336 11.4847 8.83329 11.8947 8.32743 11.8947H1.91593C1.41007 11.8947 1 11.4847 1 10.9788V4.5673Z" stroke="white" strokeWidth="1.09912"/>
    <path d="M2.83185 1.00004L10.1593 1.00001C11.171 1 11.9911 1.82016 11.9911 2.83187V10.0629" stroke="white" strokeWidth="1.09912"/>
  </svg>
);

export default Copy;
