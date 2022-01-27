import React from 'react'

interface LogoTernoaExplorerProps {
    className?: string;
}

const LogoTernoaExplorer: React.FC<LogoTernoaExplorerProps> = ({ className }) => (
  <svg className={className} width="110" height="41" viewBox="0 0 110 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.0262 22.1823C44.208 22.1823 43.5022 22.0227 42.9087 21.7036C42.3151 21.3844 41.866 20.9216 41.5451 20.3152C41.2243 19.7087 41.0639 18.9586 41.0639 18.0809V12.5751H39.0266V10.0536H41.0479V6.96973H44.192V10.0536H47.4324V12.5751H44.192V17.6979C44.192 18.2565 44.3043 18.7033 44.5449 19.0065C44.7855 19.3097 45.1545 19.4693 45.6518 19.4693C45.9085 19.4693 46.1812 19.4374 46.4699 19.3576C46.7587 19.2778 47.0474 19.1821 47.3041 19.0704L47.8655 21.4163C47.4805 21.6397 47.0474 21.8312 46.5662 21.9749C46.0849 22.1025 45.5716 22.1823 45.0262 22.1823Z" fill="white"/>
    <path d="M55.0999 22.1821C54.2176 22.1821 53.3994 22.0226 52.6615 21.7193C51.9236 21.4161 51.282 20.9852 50.7365 20.4267C50.1911 19.8681 49.774 19.2138 49.4853 18.4318C49.1805 17.6658 49.0361 16.82 49.0361 15.9263C49.0361 15.0485 49.1805 14.2346 49.4853 13.4686C49.7901 12.7026 50.2072 12.0483 50.7365 11.4897C51.2659 10.9311 51.8915 10.5002 52.6134 10.1811C53.3353 9.86189 54.1053 9.71826 54.9555 9.71826C55.8217 9.71826 56.6078 9.86189 57.3296 10.1651C58.0355 10.4683 58.6451 10.8833 59.1584 11.4418C59.6717 12.0004 60.0567 12.6547 60.3294 13.4048C60.6021 14.1708 60.7465 15.0166 60.7465 15.9582V16.7242H52.2445C52.3728 17.6019 52.6936 18.2882 53.2069 18.7829C53.7203 19.2776 54.3619 19.533 55.1319 19.533C55.6774 19.533 56.1586 19.4053 56.6078 19.15C57.0569 18.8946 57.4098 18.5276 57.6986 18.0488L60.5059 18.9425C60.2332 19.6128 59.8321 20.1873 59.2867 20.666C58.7413 21.1448 58.1157 21.5119 57.3938 21.7672C56.6719 22.0545 55.918 22.1821 55.0999 22.1821ZM54.9394 12.1281C54.2497 12.1281 53.6722 12.3515 53.2069 12.7983C52.7417 13.2452 52.4209 13.8516 52.2765 14.6336H57.5061C57.3938 13.8516 57.1051 13.2452 56.6399 12.7983C56.1907 12.3515 55.6132 12.1281 54.9394 12.1281Z" fill="white"/>
    <path d="M62.6875 21.8474V10.0538H65.591L65.7033 11.8412C66.0081 11.2188 66.4092 10.74 66.9225 10.4049C67.4358 10.0697 68.0294 9.91016 68.7191 9.91016C68.9277 9.91016 69.1362 9.92612 69.3448 9.95803C69.5533 9.98995 69.7458 10.0378 69.9062 10.1017L69.5693 13.1817C69.4089 13.1179 69.2325 13.086 69.0721 13.0541C68.8956 13.0381 68.7191 13.0221 68.5427 13.0221C67.6764 13.0221 67.0027 13.2934 66.5375 13.8201C66.0723 14.3467 65.8477 15.0968 65.8477 16.0703V21.8474H62.6875Z" fill="white"/>
    <path d="M71.6072 21.847V10.0534H74.5107L74.607 11.5695C74.9438 11.0109 75.4251 10.5481 76.0347 10.213C76.6442 9.87785 77.334 9.71826 78.104 9.71826C78.9703 9.71826 79.7242 9.92573 80.3819 10.3247C81.0396 10.7396 81.5369 11.3141 81.8898 12.0802C82.2428 12.8462 82.4353 13.7399 82.4353 14.7613V21.847H79.2911V15.1602C79.2911 14.3463 79.0986 13.692 78.7296 13.2292C78.3607 12.7664 77.8313 12.527 77.1736 12.527C76.6924 12.527 76.2753 12.6387 75.9224 12.8462C75.5695 13.0696 75.2807 13.3569 75.0722 13.7559C74.8636 14.1389 74.7513 14.5857 74.7513 15.0804V21.847H71.6072Z" fill="white"/>
    <path d="M90.6485 22.1821C89.7662 22.1821 88.9481 22.0226 88.1941 21.7193C87.4402 21.4002 86.7985 20.9693 86.2371 20.4107C85.6756 19.8521 85.2585 19.1978 84.9537 18.4318C84.6489 17.6658 84.4885 16.8519 84.4885 15.9582C84.4885 15.0645 84.6489 14.2346 84.9537 13.4846C85.2746 12.7345 85.7077 12.0802 86.2691 11.5057C86.8306 10.9471 87.4883 10.5002 88.2423 10.1811C88.9962 9.86189 89.8304 9.71826 90.7287 9.71826C91.611 9.71826 92.4291 9.87785 93.1831 10.1811C93.937 10.5002 94.5787 10.9311 95.1401 11.4897C95.7016 12.0483 96.1187 12.7026 96.4235 13.4526C96.7283 14.2027 96.8887 15.0326 96.8887 15.9263C96.8887 16.82 96.7283 17.6498 96.4235 18.3999C96.1026 19.1659 95.6695 19.8202 95.1081 20.3947C94.5466 20.9533 93.8889 21.4002 93.1349 21.7193C92.3649 22.0226 91.5468 22.1821 90.6485 22.1821ZM90.6806 19.3734C91.242 19.3734 91.7554 19.2298 92.2045 18.9265C92.6537 18.6233 93.0066 18.2243 93.2633 17.7137C93.5199 17.203 93.6483 16.6125 93.6483 15.9582C93.6483 15.3039 93.5199 14.7134 93.2633 14.2027C93.0066 13.692 92.6537 13.2771 92.2045 12.9898C91.7554 12.6866 91.242 12.543 90.6806 12.543C90.1191 12.543 89.6058 12.6866 89.1566 12.9898C88.7075 13.293 88.3546 13.692 88.0979 14.2027C87.8412 14.7134 87.7129 15.3039 87.7129 15.9582C87.7129 16.6125 87.8412 17.203 88.0979 17.7137C88.3546 18.2243 88.7075 18.6393 89.1566 18.9265C89.6058 19.2138 90.1191 19.3734 90.6806 19.3734Z" fill="white"/>
    <path d="M102.615 22.1823C102.006 22.1823 101.444 22.0865 100.931 21.911C100.417 21.7354 99.9844 21.4801 99.5994 21.145C99.2144 20.8098 98.9256 20.4268 98.7171 19.98C98.5085 19.5331 98.3962 19.0384 98.3962 18.5118C98.3962 17.7617 98.6048 17.1074 99.0058 16.5488C99.4069 15.9903 99.9844 15.5434 100.706 15.2242C101.444 14.905 102.294 14.7455 103.273 14.7455C103.77 14.7455 104.235 14.7933 104.669 14.8731C105.118 14.9689 105.535 15.0966 105.952 15.2561V14.5699C105.952 13.8996 105.759 13.357 105.374 12.9421C104.989 12.5272 104.476 12.3197 103.818 12.3197C103.321 12.3197 102.872 12.4474 102.471 12.6868C102.07 12.9261 101.781 13.2772 101.621 13.7241L98.8133 13.1655C98.9737 12.4793 99.3106 11.8888 99.7919 11.3622C100.273 10.8515 100.867 10.4525 101.572 10.1653C102.278 9.878 103.032 9.73438 103.866 9.73438C104.636 9.73438 105.326 9.84609 105.952 10.0855C106.577 10.3249 107.123 10.66 107.572 11.1068C108.021 11.5537 108.374 12.0803 108.631 12.6868C108.871 13.2932 109 13.9635 109 14.7135V21.8631H106.192L106.096 20.4747C105.775 20.9854 105.326 21.4003 104.733 21.7195C104.139 22.0227 103.433 22.1823 102.615 22.1823ZM101.492 18.3362C101.492 18.7511 101.669 19.1022 102.006 19.3576C102.342 19.6289 102.808 19.7565 103.369 19.7565C103.866 19.7565 104.3 19.6448 104.701 19.4374C105.086 19.2299 105.39 18.9426 105.615 18.5756C105.84 18.2085 105.952 17.8096 105.952 17.3627V17.251C105.615 17.1233 105.278 17.0116 104.893 16.9318C104.524 16.852 104.139 16.8042 103.77 16.8042C103.064 16.8042 102.503 16.9478 102.102 17.2191C101.685 17.5063 101.492 17.8734 101.492 18.3362Z" fill="white"/>
    <path d="M40.0781 29.5977H46.2012V30.7988H41.2793V33.2012H45.4805V34.4023H41.2793V36.7988H46.2012V38H40.0781V29.5977ZM55.9603 31.7598L53.6927 34.8066L56.0658 38H54.6713L52.9955 35.7441L51.3138 38H49.9193L52.2982 34.8066L50.0306 31.7598H51.4193L52.9955 33.8691L54.5658 31.7598H55.9603ZM65.5495 36.8457C65.5495 37.0059 65.5183 37.1562 65.4558 37.2969C65.3972 37.4375 65.3152 37.5605 65.2097 37.666C65.1081 37.7676 64.987 37.8496 64.8464 37.9121C64.7058 37.9707 64.5554 38 64.3952 38H61.1784V40.5195H60.03V31.7598H61.1784V32.8145C61.1902 32.666 61.2292 32.5293 61.2956 32.4043C61.362 32.2754 61.446 32.1641 61.5476 32.0703C61.6491 31.9727 61.7663 31.8965 61.8991 31.8418C62.0359 31.7871 62.1804 31.7598 62.3327 31.7598H64.3952C64.5554 31.7598 64.7058 31.791 64.8464 31.8535C64.987 31.9121 65.1081 31.9941 65.2097 32.0996C65.3152 32.2012 65.3972 32.3223 65.4558 32.4629C65.5183 32.6035 65.5495 32.7539 65.5495 32.9141V36.8457ZM64.3952 36.8457V32.9141H61.1784V36.8457H64.3952ZM71.2598 29.3574V38H70.1114V29.3574H71.2598ZM81.2182 36.8457C81.2182 37.0059 81.187 37.1562 81.1245 37.2969C81.0659 37.4375 80.9838 37.5605 80.8784 37.666C80.7768 37.7676 80.6557 37.8496 80.5151 37.9121C80.3784 37.9707 80.2299 38 80.0698 38H76.9702C76.8139 38 76.6655 37.9707 76.5248 37.9121C76.3842 37.8496 76.2612 37.7676 76.1557 37.666C76.0541 37.5605 75.9721 37.4375 75.9096 37.2969C75.851 37.1562 75.8217 37.0059 75.8217 36.8457V32.9141C75.8217 32.7539 75.851 32.6035 75.9096 32.4629C75.9721 32.3223 76.0541 32.2012 76.1557 32.0996C76.2612 31.9941 76.3842 31.9121 76.5248 31.8535C76.6655 31.791 76.8139 31.7598 76.9702 31.7598H80.0698C80.2299 31.7598 80.3784 31.791 80.5151 31.8535C80.6557 31.9121 80.7768 31.9941 80.8784 32.0996C80.9838 32.2012 81.0659 32.3223 81.1245 32.4629C81.187 32.6035 81.2182 32.7539 81.2182 32.9141V36.8457ZM76.9702 32.9141V36.8457H80.0698V32.9141H76.9702ZM86.9344 32.9141V38H85.7859V31.7598H86.9344V32.8613C86.9422 32.709 86.9773 32.5664 87.0398 32.4336C87.1023 32.2969 87.1844 32.1797 87.2859 32.082C87.3914 31.9805 87.5125 31.9023 87.6492 31.8477C87.7859 31.7891 87.9324 31.7598 88.0887 31.7598H89.3133C89.4734 31.7598 89.6219 31.791 89.7586 31.8535C89.8992 31.9121 90.0223 31.9941 90.1277 32.0996C90.2332 32.2012 90.3152 32.3223 90.3738 32.4629C90.4363 32.6035 90.4676 32.7539 90.4676 32.9141V33.9688H89.3133V32.9141H86.9344ZM99.8224 35.4688H95.6916V36.8457H99.8224V38H95.6916C95.5353 38 95.3869 37.9707 95.2463 37.9121C95.1056 37.8496 94.9826 37.7676 94.8771 37.666C94.7755 37.5605 94.6935 37.4375 94.631 37.2969C94.5724 37.1562 94.5431 37.0059 94.5431 36.8457V32.9141C94.5431 32.7539 94.5724 32.6035 94.631 32.4629C94.6935 32.3223 94.7755 32.2012 94.8771 32.0996C94.9826 31.9941 95.1056 31.9121 95.2463 31.8535C95.3869 31.791 95.5353 31.7598 95.6916 31.7598H98.6681C98.8283 31.7598 98.9787 31.791 99.1193 31.8535C99.2599 31.9121 99.381 31.9941 99.4826 32.0996C99.588 32.2012 99.6701 32.3223 99.7287 32.4629C99.7912 32.6035 99.8224 32.7539 99.8224 32.9141V35.4688ZM95.6916 32.9141V34.3145H98.6681V32.9141H95.6916ZM105.539 32.9141V38H104.39V31.7598H105.539V32.8613C105.546 32.709 105.582 32.5664 105.644 32.4336C105.707 32.2969 105.789 32.1797 105.89 32.082C105.996 31.9805 106.117 31.9023 106.253 31.8477C106.39 31.7891 106.537 31.7598 106.693 31.7598H107.918C108.078 31.7598 108.226 31.791 108.363 31.8535C108.503 31.9121 108.626 31.9941 108.732 32.0996C108.837 32.2012 108.919 32.3223 108.978 32.4629C109.041 32.6035 109.072 32.7539 109.072 32.9141V33.9688H107.918V32.9141H105.539Z" fill="white" fillOpacity="0.6"/>
    <g clipPath="url(#clip0_2401_7169)">
      <path d="M16.4627 7C12.9021 6.99827 9.43889 8.16306 6.60242 10.3163C3.76595 12.4696 1.71227 15.4929 0.755277 18.9241C-0.201712 22.3554 -0.00935908 26.0057 1.30294 29.3172C2.61523 32.6288 4.97528 35.4193 8.02233 37.2622C8.64244 37.6387 9.35391 37.8378 10.0793 37.8377H10.1324C10.6624 37.8406 11.1877 37.7383 11.6779 37.5367C12.1681 37.3352 12.6134 37.0383 12.9882 36.6634C13.3629 36.2885 13.6596 35.8429 13.8611 35.3524C14.0626 34.862 14.1648 34.3365 14.1619 33.8063V33.8063V26.3783C14.1611 26.3371 14.1444 26.2978 14.1152 26.2686C14.0861 26.2395 14.0468 26.2227 14.0056 26.2219H11.5548C11.2465 26.2333 10.9392 26.1824 10.651 26.0723C10.3629 25.9621 10.0999 25.795 9.87783 25.5808C9.65574 25.3667 9.47909 25.1099 9.35842 24.8259C9.23776 24.5419 9.17557 24.2365 9.17557 23.9279C9.17557 23.6193 9.23776 23.3139 9.35842 23.0299C9.47909 22.7459 9.65574 22.4891 9.87783 22.275C10.0999 22.0608 10.3629 21.8937 10.651 21.7835C10.9392 21.6733 11.2465 21.6225 11.5548 21.6338H21.355C21.6632 21.6225 21.9706 21.6733 22.2587 21.7835C22.5468 21.8937 22.8098 22.0608 23.0319 22.275C23.254 22.4891 23.4306 22.7459 23.5513 23.0299C23.672 23.3139 23.7341 23.6193 23.7341 23.9279C23.7341 24.2365 23.672 24.5419 23.5513 24.8259C23.4306 25.1099 23.254 25.3667 23.0319 25.5808C22.8098 25.795 22.5468 25.9621 22.2587 26.0723C21.9706 26.1824 21.6632 26.2333 21.355 26.2219H18.9104C18.8692 26.2227 18.8299 26.2395 18.8007 26.2686C18.7716 26.2978 18.7549 26.3371 18.7541 26.3783V33.8063C18.7615 34.8759 19.1899 35.8996 19.9465 36.6554C20.7031 37.4112 21.7269 37.8382 22.7961 37.8439H22.8492C23.5758 37.8435 24.2879 37.641 24.9061 37.2591V37.2591C27.9487 35.4142 30.3044 32.6241 31.6136 29.3145C32.9229 26.0048 33.1138 22.3575 32.1574 18.9292C31.2009 15.5008 29.1495 12.4797 26.3162 10.3269C23.483 8.17414 20.0235 7.00792 16.4658 7.00626L16.4627 7ZM4.89628 26.5347C4.38037 26.5353 3.87587 26.3828 3.44665 26.0964C3.01743 25.81 2.68279 25.4027 2.48507 24.9259C2.28736 24.4492 2.23547 23.9245 2.33596 23.4182C2.43646 22.9119 2.68484 22.4469 3.04964 22.0819C3.41444 21.717 3.87926 21.4685 4.38529 21.3679C4.89131 21.2674 5.41578 21.3193 5.8923 21.5171C6.36882 21.7149 6.77596 22.0497 7.0622 22.4791C7.34844 22.9086 7.50089 23.4133 7.50028 23.9295C7.49865 24.6178 7.22549 25.2776 6.7402 25.7654C6.25491 26.2533 5.59672 26.5298 4.90878 26.5347H4.89628ZM16.4627 18.7721C15.6625 18.7727 14.8801 18.5359 14.2145 18.0916C13.5489 17.6473 13.0299 17.0154 12.7233 16.276C12.4166 15.5365 12.3361 14.7227 12.4918 13.9374C12.6475 13.1522 13.0325 12.4308 13.5981 11.8645C14.1637 11.2982 14.8845 10.9124 15.6692 10.756C16.454 10.5996 17.2675 10.6795 18.0068 10.9858C18.7462 11.292 19.3781 11.8107 19.8227 12.4763C20.2673 13.1419 20.5047 13.9245 20.5047 14.725C20.4981 15.7952 20.07 16.8197 19.3133 17.5762C18.5567 18.3327 17.5324 18.7601 16.4627 18.7659V18.7721ZM27.9822 26.5347C27.4664 26.5347 26.9622 26.3816 26.5334 26.0949C26.1046 25.8081 25.7704 25.4006 25.5732 24.9238C25.376 24.447 25.3245 23.9224 25.4254 23.4163C25.5262 22.9102 25.7748 22.4455 26.1398 22.0808C26.5047 21.7162 26.9695 21.468 27.4755 21.3677C27.9814 21.2674 28.5057 21.3195 28.9821 21.5174C29.4584 21.7153 29.8654 22.0501 30.1515 22.4795C30.4375 22.9088 30.5899 23.4134 30.5893 23.9295C30.5877 24.6204 30.3123 25.2826 29.8237 25.7709C29.335 26.2593 28.6728 26.5339 27.9822 26.5347V26.5347Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_2401_7169">
        <rect width="32.9182" height="31" fill="white" transform="translate(0 7)"/>
      </clipPath>
    </defs>
  </svg>
);

export default LogoTernoaExplorer;