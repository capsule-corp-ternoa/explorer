import React from 'react';

interface NFTProps {
  className?: string;
}

const NFT: React.FC<NFTProps> = ({ className }) => (
  <svg className={className} width="105" height="19" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M26.84 13V4.48H28.136L32.384 10.576V4.48H33.812V13H32.516L28.268 6.88V13H26.84ZM35.9564 13V7.84H34.8524V6.724H35.9564V6.28C35.9564 5.816 36.0524 5.412 36.2444 5.068C36.4364 4.716 36.7004 4.444 37.0364 4.252C37.3724 4.052 37.7564 3.952 38.1884 3.952C38.4364 3.952 38.6604 3.984 38.8604 4.048C39.0684 4.104 39.2524 4.176 39.4124 4.264L39.1004 5.32C38.9964 5.264 38.8764 5.22 38.7404 5.188C38.6124 5.148 38.4844 5.128 38.3564 5.128C38.0124 5.128 37.7564 5.236 37.5884 5.452C37.4204 5.66 37.3364 5.96 37.3364 6.352V6.724H39.1364V7.84H37.3364V13H35.9564ZM42.8712 13.18C42.2392 13.18 41.7432 13 41.3832 12.64C41.0232 12.272 40.8432 11.748 40.8432 11.068V7.84H39.7392V6.724H40.8432V4.6H42.2232V6.724H44.0472V7.84H42.2232V10.924C42.2232 11.26 42.2912 11.52 42.4272 11.704C42.5712 11.88 42.7792 11.968 43.0512 11.968C43.1952 11.968 43.3512 11.948 43.5192 11.908C43.6872 11.86 43.8432 11.796 43.9872 11.716L44.2992 12.76C44.1152 12.888 43.8992 12.988 43.6512 13.06C43.4112 13.14 43.1512 13.18 42.8712 13.18ZM48.0392 13V4.48H53.1992V5.74H49.4792V7.972H52.8392V9.232H49.4792V11.74H53.3192V13H48.0392ZM54.1875 13L56.5755 9.688L54.4515 6.724H56.0115L57.3555 8.824L58.7355 6.724H60.2355L58.1115 9.688L60.4995 13H58.8795L57.3315 10.6L55.7595 13H54.1875ZM63.9883 13.18C63.3563 13.18 62.8603 13 62.5003 12.64C62.1403 12.272 61.9603 11.748 61.9603 11.068V7.84H60.8563V6.724H61.9603V4.6H63.3403V6.724H65.1643V7.84H63.3403V10.924C63.3403 11.26 63.4083 11.52 63.5443 11.704C63.6883 11.88 63.8963 11.968 64.1683 11.968C64.3123 11.968 64.4683 11.948 64.6363 11.908C64.8043 11.86 64.9603 11.796 65.1043 11.716L65.4163 12.76C65.2323 12.888 65.0163 12.988 64.7683 13.06C64.5283 13.14 64.2683 13.18 63.9883 13.18ZM66.5057 13V6.724H67.7657L67.8257 7.756C67.9857 7.404 68.2057 7.132 68.4857 6.94C68.7737 6.74 69.1097 6.64 69.4937 6.64C69.6137 6.64 69.7297 6.648 69.8417 6.664C69.9537 6.68 70.0537 6.708 70.1417 6.748L69.9857 8.092C69.8977 8.06 69.8057 8.04 69.7097 8.032C69.6137 8.016 69.5177 8.008 69.4217 8.008C68.9417 8.008 68.5657 8.168 68.2937 8.488C68.0217 8.808 67.8857 9.252 67.8857 9.82V13H66.5057ZM73.8866 13.18C73.4226 13.18 72.9946 13.1 72.6026 12.94C72.2186 12.772 71.8826 12.54 71.5946 12.244C71.3066 11.948 71.0826 11.6 70.9226 11.2C70.7706 10.792 70.6946 10.344 70.6946 9.856C70.6946 9.384 70.7706 8.948 70.9226 8.548C71.0826 8.148 71.2986 7.8 71.5706 7.504C71.8506 7.2 72.1786 6.964 72.5546 6.796C72.9306 6.628 73.3386 6.544 73.7786 6.544C74.2186 6.544 74.6186 6.624 74.9786 6.784C75.3466 6.936 75.6626 7.156 75.9266 7.444C76.1986 7.732 76.4066 8.076 76.5506 8.476C76.6946 8.868 76.7666 9.304 76.7666 9.784V10.192H72.1226C72.1626 10.56 72.2586 10.88 72.4106 11.152C72.5706 11.416 72.7746 11.62 73.0226 11.764C73.2706 11.908 73.5586 11.98 73.8866 11.98C74.5426 11.98 75.0546 11.688 75.4226 11.104L76.6346 11.572C76.4906 11.9 76.2786 12.188 75.9986 12.436C75.7266 12.676 75.4066 12.86 75.0386 12.988C74.6786 13.116 74.2946 13.18 73.8866 13.18ZM73.7786 7.66C73.4986 7.66 73.2466 7.724 73.0226 7.852C72.8066 7.98 72.6226 8.16 72.4706 8.392C72.3186 8.624 72.2146 8.896 72.1586 9.208H75.3266C75.2786 8.896 75.1866 8.624 75.0506 8.392C74.9146 8.16 74.7346 7.98 74.5106 7.852C74.2946 7.724 74.0506 7.66 73.7786 7.66ZM77.9432 13V6.724H79.2032L79.2512 7.588C79.4352 7.268 79.6912 7.016 80.0192 6.832C80.3552 6.64 80.7392 6.544 81.1712 6.544C81.6432 6.544 82.0512 6.656 82.3952 6.88C82.7472 7.104 83.0192 7.42 83.2112 7.828C83.4032 8.236 83.4992 8.716 83.4992 9.268V13H82.1192V9.424C82.1192 8.912 82.0032 8.512 81.7712 8.224C81.5472 7.936 81.2312 7.792 80.8232 7.792C80.5352 7.792 80.2752 7.86 80.0432 7.996C79.8192 8.132 79.6432 8.316 79.5152 8.548C79.3872 8.78 79.3232 9.048 79.3232 9.352V13H77.9432ZM87.1342 13.18C86.7262 13.18 86.3462 13.112 85.9942 12.976C85.6502 12.84 85.3542 12.648 85.1062 12.4C84.8662 12.144 84.6942 11.844 84.5902 11.5L85.8382 11.176C85.9422 11.448 86.1102 11.66 86.3422 11.812C86.5742 11.964 86.8422 12.04 87.1462 12.04C87.4582 12.04 87.7142 11.968 87.9142 11.824C88.1142 11.672 88.2142 11.48 88.2142 11.248C88.2142 11.048 88.1342 10.88 87.9742 10.744C87.8142 10.608 87.5542 10.508 87.1942 10.444L86.7982 10.372C86.1262 10.252 85.6182 10.036 85.2742 9.724C84.9382 9.412 84.7702 9.012 84.7702 8.524C84.7702 8.132 84.8702 7.788 85.0702 7.492C85.2702 7.196 85.5462 6.964 85.8982 6.796C86.2502 6.628 86.6542 6.544 87.1102 6.544C87.5022 6.544 87.8622 6.612 88.1902 6.748C88.5182 6.884 88.7942 7.076 89.0182 7.324C89.2422 7.572 89.4022 7.864 89.4982 8.2L88.2622 8.5C88.1662 8.244 88.0142 8.044 87.8062 7.9C87.6062 7.748 87.3702 7.672 87.0982 7.672C86.8182 7.672 86.5862 7.744 86.4022 7.888C86.2182 8.024 86.1262 8.2 86.1262 8.416C86.1262 8.6 86.2062 8.752 86.3662 8.872C86.5342 8.992 86.8142 9.088 87.2062 9.16L87.6022 9.232C88.2422 9.344 88.7342 9.564 89.0782 9.892C89.4222 10.22 89.5942 10.628 89.5942 11.116C89.5942 11.412 89.5342 11.688 89.4142 11.944C89.2942 12.192 89.1222 12.412 88.8982 12.604C88.6822 12.788 88.4222 12.928 88.1182 13.024C87.8222 13.128 87.4942 13.18 87.1342 13.18ZM92.2524 4.972C92.2524 5.124 92.2124 5.264 92.1324 5.392C92.0604 5.52 91.9604 5.624 91.8324 5.704C91.7044 5.776 91.5644 5.812 91.4124 5.812C91.2604 5.812 91.1204 5.776 90.9924 5.704C90.8644 5.624 90.7604 5.52 90.6804 5.392C90.6084 5.264 90.5724 5.124 90.5724 4.972C90.5724 4.82 90.6084 4.68 90.6804 4.552C90.7604 4.424 90.8644 4.324 90.9924 4.252C91.1204 4.172 91.2604 4.132 91.4124 4.132C91.5644 4.132 91.7044 4.172 91.8324 4.252C91.9604 4.324 92.0604 4.424 92.1324 4.552C92.2124 4.68 92.2524 4.82 92.2524 4.972ZM90.7284 13V6.724H92.1084V13H90.7284ZM96.4315 13.18C95.9835 13.18 95.5715 13.1 95.1955 12.94C94.8195 12.772 94.4915 12.544 94.2115 12.256C93.9315 11.96 93.7115 11.612 93.5515 11.212C93.3995 10.812 93.3235 10.376 93.3235 9.904C93.3235 9.432 93.4035 8.992 93.5635 8.584C93.7235 8.176 93.9435 7.82 94.2235 7.516C94.5035 7.212 94.8315 6.976 95.2075 6.808C95.5915 6.632 96.0075 6.544 96.4555 6.544C96.8875 6.544 97.2835 6.624 97.6435 6.784C98.0035 6.936 98.3115 7.156 98.5675 7.444C98.8315 7.724 99.0195 8.056 99.1315 8.44L97.8235 8.752C97.6875 8.448 97.4955 8.212 97.2475 8.044C97.0075 7.876 96.7355 7.792 96.4315 7.792C96.1115 7.792 95.8235 7.884 95.5675 8.068C95.3115 8.252 95.1075 8.504 94.9555 8.824C94.8115 9.136 94.7395 9.492 94.7395 9.892C94.7395 10.284 94.8115 10.636 94.9555 10.948C95.0995 11.252 95.2955 11.492 95.5435 11.668C95.7995 11.844 96.0955 11.932 96.4315 11.932C96.7515 11.932 97.0435 11.852 97.3075 11.692C97.5715 11.524 97.7675 11.288 97.8955 10.984L99.1915 11.284C99.0795 11.668 98.8875 12.004 98.6155 12.292C98.3435 12.572 98.0195 12.792 97.6435 12.952C97.2675 13.104 96.8635 13.18 96.4315 13.18ZM102.521 13.18C102.113 13.18 101.733 13.112 101.381 12.976C101.037 12.84 100.741 12.648 100.493 12.4C100.253 12.144 100.081 11.844 99.9769 11.5L101.225 11.176C101.329 11.448 101.497 11.66 101.729 11.812C101.961 11.964 102.229 12.04 102.533 12.04C102.845 12.04 103.101 11.968 103.301 11.824C103.501 11.672 103.601 11.48 103.601 11.248C103.601 11.048 103.521 10.88 103.361 10.744C103.201 10.608 102.941 10.508 102.581 10.444L102.185 10.372C101.513 10.252 101.005 10.036 100.661 9.724C100.325 9.412 100.157 9.012 100.157 8.524C100.157 8.132 100.257 7.788 100.457 7.492C100.657 7.196 100.933 6.964 101.285 6.796C101.637 6.628 102.041 6.544 102.497 6.544C102.889 6.544 103.249 6.612 103.577 6.748C103.905 6.884 104.181 7.076 104.405 7.324C104.629 7.572 104.789 7.864 104.885 8.2L103.649 8.5C103.553 8.244 103.401 8.044 103.193 7.9C102.993 7.748 102.757 7.672 102.485 7.672C102.205 7.672 101.973 7.744 101.789 7.888C101.605 8.024 101.513 8.2 101.513 8.416C101.513 8.6 101.593 8.752 101.753 8.872C101.921 8.992 102.201 9.088 102.593 9.16L102.989 9.232C103.629 9.344 104.121 9.564 104.465 9.892C104.809 10.22 104.981 10.628 104.981 11.116C104.981 11.412 104.921 11.688 104.801 11.944C104.681 12.192 104.509 12.412 104.285 12.604C104.069 12.788 103.809 12.928 103.505 13.024C103.209 13.128 102.881 13.18 102.521 13.18Z"/>
    <g opacity="0.8">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.65845 2.10316L8.6556 1.64582C10.1178 1.512 11.4142 2.56162 11.5512 3.99022L12.581 14.7316C12.9229 14.4157 13.1137 13.9479 13.1137 13.4231V2.59802C13.1137 1.64145 12.32 0.866005 11.3409 0.866005H5.35781C4.55474 0.866005 3.87638 1.38772 3.65845 2.10316ZM12.4902 15.8072C12.1884 16.7913 11.3012 17.5472 10.1899 17.6489L4.182 18.1988C2.71979 18.3326 1.42339 17.283 1.28642 15.8544L0.248098 5.02466C0.111128 3.59607 1.18545 2.32948 2.64767 2.19566L2.73158 2.18798C2.9328 0.947964 4.032 0 5.35781 0H11.3409C12.8095 0 14.0001 1.16317 14.0001 2.59802V13.4231C14.0001 14.4951 13.4053 15.412 12.4902 15.8072ZM1.13062 4.94389C1.03931 3.9915 1.75553 3.14711 2.73034 3.05789L8.73827 2.50806C9.71308 2.41884 10.5773 3.11859 10.6687 4.07098L11.707 14.9007C11.7983 15.8531 11.0821 16.6975 10.1073 16.7867L4.09933 17.3365C3.12452 17.4257 2.26026 16.726 2.16895 15.7736L1.13062 4.94389Z"/>
      <path d="M9.02562 9.38378C9.05099 9.81439 8.70736 10.1827 8.26623 10.223L7.66863 10.2777C7.61735 10.2824 7.56752 10.2969 7.52199 10.3203C7.47646 10.3438 7.43611 10.3757 7.40326 10.4144C7.37041 10.453 7.3457 10.4976 7.33054 10.5455C7.31537 10.5934 7.31006 10.6438 7.3149 10.6937L7.54202 13.0632C7.58353 13.4963 7.27095 13.899 6.82676 13.95C6.62388 13.9737 6.4193 13.9224 6.25344 13.8064C6.08757 13.6903 5.97249 13.5178 5.93091 13.323C5.9247 13.2939 5.92011 13.2645 5.91716 13.2349L5.68801 10.8442C5.6783 10.7429 5.62766 10.6495 5.54725 10.5846C5.46683 10.5197 5.36321 10.4886 5.25919 10.4981L4.6252 10.5561C4.41219 10.571 4.20173 10.504 4.03888 10.3696C3.87604 10.2352 3.77374 10.044 3.75389 9.83692C3.73405 9.62988 3.79823 9.42345 3.9327 9.26183C4.06717 9.1002 4.26124 8.99621 4.47337 8.97215L8.13381 8.63724C8.24313 8.62728 8.35338 8.63888 8.45797 8.67131C8.56256 8.70374 8.65936 8.75636 8.74259 8.82604C8.82582 8.89571 8.89378 8.981 8.94241 9.07683C8.99103 9.17265 9.01933 9.27704 9.02562 9.38378Z"/>
      <path d="M6.19522 8.07225C6.79286 8.01757 7.23 7.47932 7.1716 6.87004C7.1132 6.26075 6.58138 5.81116 5.98374 5.86584C5.38609 5.92052 4.94895 6.45877 5.00736 7.06805C5.06576 7.67734 5.59758 8.12693 6.19522 8.07225Z"/>
    </g>
  </svg>
);

export default NFT;