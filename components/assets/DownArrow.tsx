import React from 'react';

interface DownArrowProps {
  className?: string
}

const DownArrow: React.FC<DownArrowProps> = ({ className }) => (
  <svg className={className} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.93197 1.82291C6.35148 2.79039 6.06123 3.27413 5.66873 3.40271C5.44684 3.47539 5.20784 3.47594 4.98607 3.40429C4.59379 3.27753 4.30435 2.79513 3.72547 1.83034L3.04654 0.698785C2.78633 0.26511 2.31767 2.38798e-08 1.81121 2.38798e-08C0.640623 2.38798e-08 -0.0484586 1.31889 0.621834 2.27645L3.21496 5.98092C4.01107 7.11822 4.40912 7.68687 4.93047 7.82898C5.1904 7.89984 5.46485 7.89926 5.72493 7.8273C6.24658 7.68299 6.64581 7.11265 7.44429 5.97198L10.0303 2.27773C10.7028 1.31696 10.0195 2.21174e-10 8.84846 3.82528e-10C8.33821 4.52834e-10 7.86472 0.268334 7.60183 0.706474L6.93197 1.82291Z" fill="white"/>
  </svg>  
);

export default DownArrow;
