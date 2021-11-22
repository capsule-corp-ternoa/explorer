import React from 'react';

interface AccountProps {
  className?: string;
}

const Account: React.FC<AccountProps> = ({ className }) => (
  <svg className={className} width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M8.75 6.125L7.875 4.375H2.625V3.255C3.15 2.9575 3.5 2.3975 3.5 1.75C3.5 0.7875 2.7125 0 1.75 0C0.7875 0 0 0.7875 0 1.75C0 2.3975 0.35 2.9575 0.875 3.255V16.625H2.625V13.125H7L7.875 14.875H14V6.125H8.75ZM12.25 13.125H8.75L7.875 11.375H2.625V6.125H7L7.875 7.875H12.25V13.125Z" fill="white"/>
  </svg>
);

export default Account;
