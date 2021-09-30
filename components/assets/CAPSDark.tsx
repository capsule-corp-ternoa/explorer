import React from 'react';

interface CAPSDarkProps {
  className?: string;
}

const CAPSDark: React.FC<CAPSDarkProps> = ({ className }) => (
  <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.2173 13.0443C34.4202 13.8964 34.5591 14.7733 34.6285 15.6699L34.2672 15.6978C34.3004 16.1274 34.3173 16.5617 34.3173 17C34.3173 17.4383 34.3004 17.8726 34.2672 18.3022L34.6285 18.3301C34.5591 19.2267 34.4202 20.1036 34.2173 20.9557L33.8648 20.8717C33.6617 21.7239 33.3932 22.5505 33.0647 23.346L33.3996 23.4843C33.0592 24.3088 32.6557 25.1006 32.1953 25.8535L31.8861 25.6645C31.432 26.4072 30.9212 27.1113 30.3597 27.7709L30.6356 28.0058C30.0604 28.6815 29.4332 29.3113 28.7602 29.8891L28.5242 29.6142C27.8667 30.1786 27.1647 30.6922 26.4241 31.1489L26.6143 31.4574C25.8628 31.9208 25.0724 32.327 24.2492 32.6698L24.1098 32.3353C23.3152 32.6662 22.4894 32.9368 21.638 33.1414L21.7226 33.4937C20.8709 33.6984 19.9941 33.8384 19.0977 33.9083L19.0695 33.547C18.64 33.5806 18.2058 33.5976 17.7676 33.5976C17.3294 33.5976 16.8952 33.5806 16.4657 33.547L16.4375 33.9083C15.5411 33.8384 14.6643 33.6984 13.8125 33.4937L13.8972 33.1414C13.0458 32.9368 12.2199 32.6662 11.4253 32.3353L11.286 32.6698C10.4628 32.327 9.67241 31.9208 8.92091 31.4574L9.11112 31.1489C8.37052 30.6922 7.66846 30.1786 7.011 29.6142L6.77496 29.8891C6.10196 29.3113 5.47476 28.6815 4.89954 28.0058L5.17547 27.7709C4.61402 27.1113 4.1032 26.4072 3.64904 25.6645L3.33989 25.8535C2.87947 25.1006 2.47602 24.3088 2.13554 23.4843L2.47048 23.346C2.14201 22.5505 1.87345 21.7239 1.67043 20.8717L1.31792 20.9557C1.11494 20.1036 0.976069 19.2267 0.906714 18.3301L1.26801 18.3022C1.23477 17.8726 1.21784 17.4383 1.21784 17C1.21784 16.5617 1.23477 16.1274 1.26801 15.6978L0.906714 15.6699C0.976069 14.7733 1.11494 13.8964 1.31792 13.0443L1.67043 13.1283C1.87345 12.2761 2.14201 11.4495 2.47048 10.654L2.13554 10.5157C2.47602 9.69119 2.87947 8.89944 3.33989 8.14649L3.64904 8.33554C4.1032 7.59283 4.61402 6.88867 5.17548 6.22912L4.89954 5.99423C5.47476 5.31851 6.10197 4.68866 6.77496 4.11089L7.011 4.38584C7.66847 3.82141 8.37053 3.3078 9.11112 2.85108L8.92091 2.54264C9.67241 2.07919 10.4628 1.67302 11.286 1.33018L11.4253 1.66471C12.2199 1.3338 13.0458 1.06321 13.8972 0.858639L13.8126 0.506294C14.6643 0.301642 15.5411 0.161618 16.4375 0.0916817L16.4657 0.452957C16.8952 0.419448 17.3294 0.402374 17.7676 0.402374C18.2058 0.402374 18.64 0.419447 19.0695 0.452957L19.0977 0.0916816C19.9941 0.161618 20.8709 0.301642 21.7226 0.506294L21.638 0.858639C22.4894 1.06322 23.3152 1.3338 24.1098 1.66471L24.2492 1.33018C25.0724 1.67302 25.8628 2.07919 26.6143 2.54264L26.4241 2.85108C27.1647 3.3078 27.8667 3.82141 28.5242 4.38584L28.7602 4.11089C29.4332 4.68866 30.0604 5.31852 30.6356 5.99423L30.3597 6.22912C30.9212 6.88867 31.432 7.59283 31.8861 8.33554L32.1953 8.14649C32.6557 8.89944 33.0592 9.69119 33.3996 10.5157L33.0647 10.654C33.3932 11.4495 33.6617 12.2761 33.8648 13.1283L34.2173 13.0443Z" fill="#070714" stroke="#333351" stroke-width="0.724746" stroke-dasharray="2.9 2.9"/>
    <path d="M22.1025 15.8329C21.8124 15.5368 21.4188 15.3752 21.0044 15.3752H14.747C14.3396 15.3752 13.9528 15.53 13.6696 15.8127C13.3796 16.0954 13.2207 16.4723 13.2207 16.8694C13.2207 17.5424 13.6903 18.1347 14.3603 18.3097C14.4846 18.3434 14.6158 18.3568 14.747 18.3568H15.9281C16.1698 18.3568 16.3632 18.5453 16.3632 18.7808V22.9672C16.3632 23.021 16.3632 23.0816 16.3701 23.1354C16.4599 23.896 17.1022 24.4546 17.8895 24.4546C17.9033 24.4546 17.9171 24.4546 17.924 24.4546C18.7459 24.4344 19.4159 23.7546 19.4159 22.9335V18.7808C19.4159 18.5453 19.6092 18.3568 19.851 18.3568H20.9698C21.7986 18.3568 22.5031 17.7107 22.5307 16.9232C22.5445 16.5127 22.3926 16.129 22.1025 15.8329Z" fill="#9C9CBA"/>
    <path d="M17.8752 14.3991C18.9928 14.3991 19.8988 13.5161 19.8988 12.427C19.8988 11.3379 18.9928 10.455 17.8752 10.455C16.7576 10.455 15.8516 11.3379 15.8516 12.427C15.8516 13.5161 16.7576 14.3991 17.8752 14.3991Z" fill="#9C9CBA"/>
  </svg>
);

export default CAPSDark;