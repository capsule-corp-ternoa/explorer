import React from 'react';

interface DownArrowProps {
  className?: string
}

const DownArrow: React.FC<DownArrowProps> = ({ className }) => (
  <svg className={className} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.53495 3.92893C6.11575 4.45882 5.30422 4.43167 4.92477 3.87507L3.28966 1.47654C2.81134 0.774886 1.8363 0.629657 1.17059 1.16091C0.54013 1.66402 0.43342 2.58094 0.931886 3.21196L4.11351 7.23964C4.91648 8.25613 6.46205 8.24783 7.26049 7.22274L10.7441 2.75029C11.1455 2.23493 11.0988 1.50195 10.6355 1.04433C10.0909 0.506348 9.19813 0.562553 8.72167 1.16482L6.53495 3.92893Z"/>
  </svg>
  
);

export default DownArrow;
