import React from 'react';

interface HamburgerProps {
  className?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="20"
    height="14" 
    viewBox="0 0 20 14" 
  >
    <path fill={className} d="M0 0.995193C0 0.445563 0.445563 0 0.995193 0H9.00481C9.55444 0 10 0.445563 10 0.995193C10 1.54482 9.55444 1.99039 9.00481 1.99039H0.995194C0.445564 1.99039 0 1.54482 0 0.995193Z"/>
	  <path fill={className} d="M0 6.99976C0 6.45013 0.445563 6.00456 0.995193 6.00456H19.0048C19.5544 6.00456 20 6.45013 20 6.99976C20 7.54939 19.5544 7.99495 19.0048 7.99495H0.995194C0.445564 7.99495 0 7.54939 0 6.99976Z"/>
	  <path fill={className} d="M0.995193 12.0096C0.445563 12.0096 0 12.4552 0 13.0048C0 13.5544 0.445564 14 0.995194 14H13.0048C13.5544 14 14 13.5544 14 13.0048C14 12.4552 13.5544 12.0096 13.0048 12.0096H0.995193Z"/>
  </svg>
);

export default Hamburger;
