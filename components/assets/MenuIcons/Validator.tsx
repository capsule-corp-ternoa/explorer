import React from 'react';

interface AccountProps {
  className?: string;
}

const Account: React.FC<AccountProps> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM11.672 4.464L6.4 9.736L4.328 7.672L3.2 8.8L6.4 12L12.8 5.6L11.672 4.464Z" fill="white"/>
  </svg>
);

export default Account;
