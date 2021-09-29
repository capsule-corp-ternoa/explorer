import React from 'react';

interface CAPSLogoProps {
  className?: string;
}

const CAPSLogo: React.FC<CAPSLogoProps> = ({ className }) => (
  <svg 
    width="36" 
    height="36" 
    viewBox="0 0 36 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.1307 0.0731812C8.25791 0.0731812 0.25 8.22793 0.25 18.17C0.25 26.1014 5.29608 33.0273 12.6458 35.4849C12.9749 35.5966 13.304 35.4849 13.6331 35.3732L13.8525 35.2615H13.9622C15.1689 34.9263 16.0464 33.6976 16.0464 32.4688V21.1862H12.207C11.0004 21.1862 10.1228 20.1808 10.1228 19.0637C10.1228 17.9466 11.11 16.9412 12.207 16.9412H24.0544C25.261 16.9412 26.1386 17.9466 26.1386 19.0637C26.1386 20.1808 25.1513 21.1862 24.0544 21.1862H20.3246V32.4688C20.3246 33.8093 21.2022 35.0381 22.4089 35.4849H22.5186C22.738 35.5966 22.9574 35.5966 23.1768 35.5966C23.2865 35.5966 23.3962 35.5966 23.5059 35.5966C32.9398 32.5805 38.0956 22.3032 35.1338 12.808C32.7205 5.21179 25.9192 0.18489 18.1307 0.0731812ZM5.62518 21.0744C4.4185 21.0744 3.54092 20.0691 3.54092 18.952C3.54092 17.8349 4.5282 16.8295 5.62518 16.8295C6.83185 16.8295 7.70943 17.8349 7.70943 18.952C7.70943 20.0691 6.83185 21.0744 5.62518 21.0744ZM18.1307 13.1431C15.827 13.1431 13.9622 11.2441 13.9622 8.89818C13.9622 6.5523 15.827 4.65324 18.1307 4.65324C20.4343 4.65324 22.2992 6.5523 22.2992 8.89818C22.2992 11.2441 20.4343 13.1431 18.1307 13.1431ZM30.7459 21.1862C29.5392 21.1862 28.6616 20.1808 28.6616 19.0637C28.6616 17.9466 29.6489 16.9412 30.7459 16.9412C31.8429 16.9412 32.8302 17.9466 32.8302 19.0637C32.8302 20.1808 31.9526 21.0744 30.7459 21.1862Z" fill="white"/>
  </svg>
);

export default CAPSLogo;