import React from 'react'

interface LogoProps {
    className?: string;
}

const LogoTernoaScan: React.FC<LogoProps> = ({ className }) => (
  <svg width="167" height="29" viewBox="0 0 167 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M125.849 16.5029C125.644 16.5029 125.449 16.4639 125.263 16.3857C125.083 16.3027 124.924 16.1953 124.787 16.0635C124.65 15.9268 124.543 15.7681 124.465 15.5874C124.387 15.4019 124.348 15.2065 124.348 15.0015V11.9985C124.348 11.7935 124.387 11.6006 124.465 11.4199C124.543 11.2344 124.65 11.0757 124.787 10.9438C124.924 10.8071 125.083 10.6997 125.263 10.6216C125.449 10.5386 125.644 10.4971 125.849 10.4971H130.947C131.152 10.4971 131.345 10.5386 131.525 10.6216C131.711 10.6997 131.872 10.8071 132.009 10.9438C132.146 11.0757 132.253 11.2344 132.331 11.4199C132.409 11.6006 132.448 11.7935 132.448 11.9985V13.3535H130.947V11.9985H125.849V15.0015H130.947C131.152 15.0015 131.345 15.0405 131.525 15.1187C131.711 15.1968 131.872 15.3042 132.009 15.4409C132.146 15.5776 132.253 15.7388 132.331 15.9243C132.409 16.105 132.448 16.2979 132.448 16.5029V19.4985C132.448 19.7036 132.409 19.8989 132.331 20.0845C132.253 20.2651 132.146 20.4238 132.009 20.5605C131.872 20.6973 131.711 20.8047 131.525 20.8828C131.345 20.9609 131.152 21 130.947 21H125.703C125.498 21 125.302 20.9609 125.117 20.8828C124.936 20.8047 124.777 20.6973 124.641 20.5605C124.504 20.4238 124.396 20.2651 124.318 20.0845C124.24 19.8989 124.201 19.7036 124.201 19.4985V18.1509H125.703V19.4985H130.947V16.5029H125.849ZM135.158 11.9985C135.158 11.7935 135.197 11.6006 135.275 11.4199C135.354 11.2344 135.461 11.0757 135.598 10.9438C135.734 10.8071 135.893 10.6997 136.074 10.6216C136.259 10.5386 136.455 10.4971 136.66 10.4971H142.358C142.563 10.4971 142.756 10.5386 142.937 10.6216C143.122 10.6997 143.283 10.8071 143.42 10.9438C143.557 11.0757 143.664 11.2344 143.742 11.4199C143.82 11.6006 143.859 11.7935 143.859 11.9985V13.3535H142.358V11.9985H136.66V19.4985H142.358V18.1509H143.859V19.4985C143.859 19.7036 143.82 19.8989 143.742 20.0845C143.664 20.2651 143.557 20.4238 143.42 20.5605C143.283 20.6973 143.122 20.8047 142.937 20.8828C142.756 20.9609 142.563 21 142.358 21H136.66C136.455 21 136.259 20.9609 136.074 20.8828C135.893 20.8047 135.734 20.6973 135.598 20.5605C135.461 20.4238 135.354 20.2651 135.275 20.0845C135.197 19.8989 135.158 19.7036 135.158 19.4985V11.9985ZM150.913 10.4971L154.963 21H153.461L152.531 18.583H147.792L146.862 21H145.361L149.411 10.4971H150.913ZM148.364 17.0815H151.953L150.166 12.4526L148.364 17.0815ZM158.266 21H156.765V10.4971H158.266L164.58 18.6416V10.4971H166.081V21H164.58L158.266 12.8555V21Z" fill="white" fillOpacity="0.6"/>
    <path d="M45.0153 22.1676C44.1988 22.1676 43.4943 22.0083 42.9019 21.6898C42.3095 21.3712 41.8612 20.9093 41.541 20.304C41.2208 19.6988 41.0607 18.9501 41.0607 18.0741V12.5789H39.0273V10.0623H41.0447V6.98438H44.1828V10.0623H47.4169V12.5789H44.1828V17.6918C44.1828 18.2493 44.2948 18.6953 44.535 18.9979C44.7752 19.3006 45.1434 19.4598 45.6397 19.4598C45.8959 19.4598 46.1681 19.428 46.4563 19.3483C46.7445 19.2687 47.0326 19.1731 47.2888 19.0616L47.8492 21.4031C47.4649 21.626 47.0326 21.8172 46.5523 21.9605C46.072 22.088 45.5597 22.1676 45.0153 22.1676Z" fill="white"/>
    <path d="M55.0696 22.1673C54.189 22.1673 53.3725 22.0081 52.636 21.7054C51.8995 21.4028 51.2591 20.9727 50.7147 20.4153C50.1703 19.8578 49.7541 19.2047 49.4659 18.4242C49.1617 17.6597 49.0176 16.8155 49.0176 15.9235C49.0176 15.0475 49.1617 14.2352 49.4659 13.4706C49.7701 12.7061 50.1864 12.053 50.7147 11.4956C51.2431 10.9381 51.8675 10.508 52.5879 10.1895C53.3084 9.87089 54.0769 9.72754 54.9255 9.72754C55.7901 9.72754 56.5746 9.87089 57.2951 10.1735C57.9995 10.4762 58.6079 10.8903 59.1203 11.4478C59.6326 12.0052 60.0169 12.6583 60.289 13.4069C60.5612 14.1715 60.7053 15.0156 60.7053 15.9554V16.7199H52.2197C52.3478 17.596 52.668 18.2809 53.1803 18.7747C53.6927 19.2684 54.3331 19.5233 55.1016 19.5233C55.646 19.5233 56.1263 19.3959 56.5746 19.141C57.0229 18.8862 57.3751 18.5198 57.6633 18.042L60.4652 18.9339C60.193 19.6029 59.7927 20.1763 59.2484 20.6542C58.704 21.132 58.0796 21.4984 57.3591 21.7532C56.6386 22.0399 55.8861 22.1673 55.0696 22.1673ZM54.9095 12.1327C54.221 12.1327 53.6446 12.3557 53.1803 12.8017C52.716 13.2476 52.3958 13.8529 52.2517 14.6334H57.4712C57.3591 13.8529 57.0709 13.2476 56.6066 12.8017C56.1583 12.3557 55.5819 12.1327 54.9095 12.1327Z" fill="white"/>
    <path d="M62.6426 21.8331V10.0623H65.5405L65.6526 11.8462C65.9568 11.225 66.357 10.7472 66.8694 10.4127C67.3817 10.0782 67.9741 9.91895 68.6626 9.91895C68.8707 9.91895 69.0788 9.93487 69.287 9.96673C69.4951 9.99859 69.6872 10.0464 69.8474 10.1101L69.5111 13.1842C69.351 13.1205 69.1749 13.0886 69.0148 13.0568C68.8387 13.0408 68.6626 13.0249 68.4865 13.0249C67.6219 13.0249 66.9494 13.2957 66.4851 13.8213C66.0208 14.3469 65.7967 15.0956 65.7967 16.0672V21.8331H62.6426Z" fill="white"/>
    <path d="M71.5449 21.8329V10.062H74.4428L74.5389 11.5752C74.8751 11.0177 75.3554 10.5558 75.9638 10.2213C76.5722 9.88682 77.2607 9.72754 78.0292 9.72754C78.8938 9.72754 79.6463 9.9346 80.3027 10.3328C80.9591 10.7469 81.4555 11.3203 81.8077 12.0849C82.1599 12.8494 82.3521 13.7414 82.3521 14.7608V21.8329H79.214V15.159C79.214 14.3467 79.0219 13.6936 78.6536 13.2317C78.2854 12.7698 77.757 12.5309 77.1006 12.5309C76.6203 12.5309 76.204 12.6424 75.8518 12.8494C75.4995 13.0724 75.2113 13.3591 75.0032 13.7573C74.7951 14.1396 74.683 14.5856 74.683 15.0794V21.8329H71.5449Z" fill="white"/>
    <path d="M90.5504 22.1673C89.6698 22.1673 88.8533 22.0081 88.1008 21.7054C87.3483 21.3869 86.7079 20.9568 86.1475 20.3993C85.5871 19.8418 85.1709 19.1888 84.8667 18.4242C84.5624 17.6597 84.4023 16.8474 84.4023 15.9554C84.4023 15.0634 84.5624 14.2352 84.8667 13.4866C85.1869 12.7379 85.6192 12.0849 86.1795 11.5115C86.7399 10.954 87.3963 10.508 88.1488 10.1895C88.9013 9.87089 89.7339 9.72754 90.6305 9.72754C91.5111 9.72754 92.3276 9.88682 93.0801 10.1895C93.8326 10.508 94.473 10.9381 95.0334 11.4956C95.5938 12.053 96.01 12.7061 96.3142 13.4547C96.6184 14.2033 96.7785 15.0316 96.7785 15.9235C96.7785 16.8155 96.6184 17.6438 96.3142 18.3924C95.994 19.1569 95.5617 19.81 95.0014 20.3834C94.441 20.9409 93.7846 21.3869 93.0321 21.7054C92.2636 22.0081 91.447 22.1673 90.5504 22.1673ZM90.5824 19.364C91.1428 19.364 91.6551 19.2207 92.1034 18.918C92.5517 18.6154 92.904 18.2172 93.1601 17.7075C93.4163 17.1978 93.5444 16.6085 93.5444 15.9554C93.5444 15.3024 93.4163 14.713 93.1601 14.2033C92.904 13.6936 92.5517 13.2795 92.1034 12.9928C91.6551 12.6902 91.1428 12.5468 90.5824 12.5468C90.0221 12.5468 89.5097 12.6902 89.0614 12.9928C88.6131 13.2954 88.2609 13.6936 88.0047 14.2033C87.7486 14.713 87.6205 15.3024 87.6205 15.9554C87.6205 16.6085 87.7486 17.1978 88.0047 17.7075C88.2609 18.2172 88.6131 18.6313 89.0614 18.918C89.5097 19.2047 90.0221 19.364 90.5824 19.364Z" fill="white"/>
    <path d="M102.494 22.168C101.886 22.168 101.325 22.0724 100.813 21.8972C100.301 21.722 99.8682 21.4672 99.484 21.1327C99.0997 20.7982 98.8116 20.4159 98.6034 19.9699C98.3953 19.524 98.2832 19.0302 98.2832 18.5046C98.2832 17.7559 98.4913 17.1029 98.8916 16.5454C99.2919 15.9879 99.8682 15.5419 100.589 15.2234C101.325 14.9048 102.174 14.7455 103.15 14.7455C103.647 14.7455 104.111 14.7933 104.543 14.873C104.992 14.9685 105.408 15.096 105.824 15.2552V14.5703C105.824 13.9014 105.632 13.3598 105.248 12.9457C104.864 12.5315 104.351 12.3245 103.695 12.3245C103.198 12.3245 102.75 12.4519 102.35 12.6908C101.95 12.9297 101.661 13.2802 101.501 13.7262L98.6995 13.1687C98.8596 12.4838 99.1958 11.8944 99.6761 11.3688C100.156 10.8591 100.749 10.4609 101.453 10.1742C102.158 9.88749 102.91 9.74414 103.743 9.74414C104.511 9.74414 105.2 9.85564 105.824 10.0946C106.449 10.3335 106.993 10.668 107.441 11.114C107.89 11.5599 108.242 12.0856 108.498 12.6908C108.738 13.2961 108.866 13.9651 108.866 14.7137V21.8495H106.064L105.968 20.4637C105.648 20.9734 105.2 21.3875 104.607 21.7061C104.015 22.0087 103.311 22.168 102.494 22.168ZM101.373 18.3294C101.373 18.7435 101.549 19.0939 101.886 19.3487C102.222 19.6195 102.686 19.747 103.246 19.747C103.743 19.747 104.175 19.6355 104.575 19.4284C104.96 19.2213 105.264 18.9346 105.488 18.5683C105.712 18.2019 105.824 17.8037 105.824 17.3577V17.2462C105.488 17.1188 105.152 17.0073 104.767 16.9277C104.399 16.848 104.015 16.8003 103.647 16.8003C102.942 16.8003 102.382 16.9436 101.982 17.2144C101.565 17.5011 101.373 17.8674 101.373 18.3294Z" fill="white"/>
    <g clipPath="url(#clip0_0:1)">
      <path d="M15.3996 1.79658e-06C12.0687 -0.00161497 8.82898 1.08802 6.17551 3.10239C3.52204 5.11676 1.60084 7.94501 0.705597 11.1549C-0.189651 14.3647 -0.00970821 17.7795 1.21792 20.8774C2.44556 23.9753 4.65334 26.5858 7.50381 28.3098C8.08391 28.662 8.74948 28.8482 9.42804 28.8482H9.47776C9.97354 28.8509 10.4649 28.7552 10.9235 28.5666C11.3821 28.3781 11.7987 28.1004 12.1493 27.7496C12.4998 27.3989 12.7774 26.982 12.9659 26.5233C13.1543 26.0645 13.25 25.5728 13.2473 25.0768V18.1281C13.2465 18.0895 13.2309 18.0528 13.2036 18.0255C13.1764 17.9982 13.1396 17.9826 13.1011 17.9818H10.8083C10.52 17.9925 10.2325 17.9449 9.96291 17.8418C9.69337 17.7388 9.44737 17.5824 9.2396 17.3821C9.03184 17.1817 8.86658 16.9415 8.7537 16.6759C8.64082 16.4102 8.58265 16.1245 8.58265 15.8358C8.58265 15.5471 8.64082 15.2614 8.7537 14.9957C8.86658 14.73 9.03184 14.4898 9.2396 14.2895C9.44737 14.0892 9.69337 13.9328 9.96291 13.8297C10.2325 13.7267 10.52 13.6791 10.8083 13.6897H19.9763C20.2646 13.6791 20.5522 13.7267 20.8217 13.8297C21.0912 13.9328 21.3372 14.0892 21.545 14.2895C21.7528 14.4898 21.918 14.73 22.0309 14.9957C22.1438 15.2614 22.202 15.5471 22.202 15.8358C22.202 16.1245 22.1438 16.4102 22.0309 16.6759C21.918 16.9415 21.7528 17.1817 21.545 17.3821C21.3372 17.5824 21.0912 17.7388 20.8217 17.8418C20.5522 17.9449 20.2646 17.9925 19.9763 17.9818H17.6894C17.6509 17.9826 17.6141 17.9982 17.5868 18.0255C17.5596 18.0528 17.5439 18.0895 17.5432 18.1281V25.0768C17.5501 26.0775 17.9509 27.0351 18.6587 27.7421C19.3664 28.4492 20.3242 28.8487 21.3244 28.854H21.3741C22.0538 28.8536 22.72 28.6642 23.2983 28.3069C26.1446 26.5811 28.3483 23.9709 29.5731 20.8748C30.7979 17.7787 30.9765 14.3667 30.0817 11.1595C29.187 7.95235 27.2679 5.12618 24.6174 3.11228C21.967 1.09839 18.7307 0.0074088 15.4025 0.00585907L15.3996 1.79658e-06ZM4.57944 18.2744C4.09681 18.275 3.62486 18.1323 3.22334 17.8644C2.82181 17.5965 2.50875 17.2154 2.32379 16.7694C2.13883 16.3234 2.09029 15.8326 2.1843 15.359C2.27832 14.8854 2.51067 14.4503 2.85193 14.1089C3.1932 13.7675 3.62804 13.535 4.10141 13.441C4.57479 13.3469 5.06542 13.3955 5.5112 13.5805C5.95697 13.7656 6.33785 14.0788 6.60562 14.4805C6.87339 14.8822 7.01601 15.3544 7.01544 15.8372C7.01391 16.4811 6.75838 17.0984 6.3044 17.5548C5.85041 18.0112 5.23469 18.2698 4.59113 18.2744H4.57944ZM15.3996 11.0126C14.6511 11.0132 13.9191 10.7917 13.2965 10.376C12.6738 9.96036 12.1883 9.36925 11.9014 8.67751C11.6146 7.98577 11.5392 7.22445 11.6849 6.48986C11.8306 5.75526 12.1908 5.0804 12.7199 4.55064C13.249 4.02087 13.9232 3.66 14.6574 3.51368C15.3915 3.36737 16.1525 3.44215 16.8441 3.72862C17.5358 4.01508 18.1269 4.50034 18.5429 5.123C18.9588 5.74567 19.1808 6.47774 19.1808 7.22666C19.1747 8.22781 18.7742 9.1862 18.0664 9.89386C17.3585 10.6015 16.4003 11.0014 15.3996 11.0068V11.0126ZM26.1759 18.2744C25.6934 18.2744 25.2218 18.1312 24.8206 17.863C24.4195 17.5947 24.1069 17.2134 23.9224 16.7674C23.7379 16.3214 23.6897 15.8306 23.7841 15.3572C23.8784 14.8838 24.111 14.449 24.4524 14.1079C24.7938 13.7667 25.2286 13.5346 25.7019 13.4408C26.1752 13.3469 26.6657 13.3957 27.1113 13.5808C27.5569 13.7659 27.9376 14.0791 28.2052 14.4808C28.4729 14.8824 28.6154 15.3545 28.6149 15.8372C28.6133 16.4836 28.3558 17.1031 27.8986 17.5599C27.4415 18.0167 26.822 18.2736 26.1759 18.2744Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_0:1">
        <rect width="30.7944" height="29" fill="white"/>
      </clipPath>
    </defs>
  </svg>

);

export default LogoTernoaScan;