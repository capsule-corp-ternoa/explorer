import React from 'react';

interface RightArrowProps {
  className?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ className }) => (
  <svg width="31" height="14" className={className} viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.95" d="M22.9219 4.96179C23.852 4.96179 24.6061 5.71583 24.6061 6.646C24.6061 7.57616 23.852 8.33021 22.9219 8.33021V4.96179ZM1.69111 8.33021C0.760942 8.33021 0.00689697 7.57616 0.00689697 6.646C0.00689697 5.71583 0.760942 4.96179 1.69111 4.96179V8.33021ZM22.9219 8.33021H1.69111V4.96179H22.9219V8.33021Z" fill="#9F9FFF"/>
      <g opacity="0.95">
      <mask id="path-2-inside-1" fill="white">
        <path d="M30.7655 6.78354L22.2957 0.572379C21.4058 -0.0802677 20.1516 0.555274 20.1516 1.6589V12.5872C20.1516 13.6909 21.4058 14.3264 22.2957 13.6738L30.7655 7.46262C30.9949 7.29438 30.9949 6.95177 30.7655 6.78354Z"/>
      </mask>
    <path d="M30.7655 6.78354L22.2957 0.572379C21.4058 -0.0802677 20.1516 0.555274 20.1516 1.6589V12.5872C20.1516 13.6909 21.4058 14.3264 22.2957 13.6738L30.7655 7.46262C30.9949 7.29438 30.9949 6.95177 30.7655 6.78354Z" fill="#9F9FFF"/>
    <path d="M22.2957 0.572379L20.3038 3.28869H20.3038L22.2957 0.572379ZM30.7655 6.78354L32.7575 4.06723L32.7575 4.06723L30.7655 6.78354ZM30.7655 7.46262L32.7575 10.1789L32.7575 10.1789L30.7655 7.46262ZM22.2957 13.6738L24.2877 16.3901L24.2877 16.3901L22.2957 13.6738ZM24.2877 -2.14393L32.7575 4.06723L28.7735 9.49985L20.3038 3.28869L24.2877 -2.14393ZM32.7575 10.1789L24.2877 16.3901L20.3038 10.9575L28.7735 4.7463L32.7575 10.1789ZM23.52 1.6589V12.5872H16.7832V1.6589H23.52ZM24.2877 16.3901C21.1728 18.6743 16.7832 16.45 16.7832 12.5872H23.52C23.52 10.9318 21.6387 9.9785 20.3038 10.9575L24.2877 16.3901ZM32.7575 4.06723C34.8222 5.58134 34.8222 8.66482 32.7575 10.1789L28.7735 4.74631C27.1677 5.92394 27.1677 8.32221 28.7735 9.49985L32.7575 4.06723ZM20.3038 3.28869C21.6387 4.26766 23.52 3.31435 23.52 1.6589H16.7832C16.7832 -2.2038 21.1728 -4.4282 24.2877 -2.14393L20.3038 3.28869Z" fill="#9F9FFF" mask="url(#path-2-inside-1)"/>
    </g>
  </svg>
);

export default RightArrow;
