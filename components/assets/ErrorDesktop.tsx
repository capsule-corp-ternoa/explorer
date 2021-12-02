import React from 'react';

interface ErrorDesktopProps {
  className?: string;
}

const ErrorDesktop: React.FC<ErrorDesktopProps> = ({ className }) => (
  <svg className={className} width="551" height="456" viewBox="0 0 551 456" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect opacity="0.25" x="61" y="24" width="437" height="393.95" rx="28" fill="url(#paint0_linear_2401_7169)"/>
  <rect x="81.2498" y="48.8521" width="396.711" height="345.166" rx="27" fill="url(#paint1_linear_2401_7169)"/>
  <g opacity="0.45">
  {/* <mask id="mask0_2401_7169" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="163" y="147" width="244" height="139">
  <rect x="163" y="147" width="243.576" height="138.949" fill="white"/>
  </mask> */}
  <g mask="url(#mask0_2401_7169)">
  <path fillRule="evenodd" clipRule="evenodd" d="M245.113 223.923L240.419 220.184L236.702 220.047L236.79 177.466L232.097 173.726L232.124 177.485L222.035 177.443L191.08 226.409L191.428 231.14L187.025 231.87L191.719 235.609L220.717 235.685L217.216 247.948L221.91 251.687L236.581 251.7L236.58 235.654L245.048 235.78L245.113 223.923ZM222.112 197.594L222.058 223.792L205.692 223.77L221.17 199.287L222.112 197.594Z" fill="url(#paint2_linear_2401_7169)" fillOpacity="0.5"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M240.427 220.118L240.361 231.975L231.968 231.942L231.97 247.988L217.298 247.975L217.297 231.928L187.024 231.888L186.393 222.603L217.34 173.722L232.179 173.753L232.034 220.084L240.427 220.118ZM217.363 220.071L217.425 193.789L216.483 195.482L200.996 220.049L217.363 220.071Z" fill="url(#paint3_linear_2401_7169)"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M378.937 223.132L374.243 219.392L370.526 219.256L370.614 176.674L365.92 172.935L365.947 176.693L355.859 176.652L324.903 225.617L325.252 230.349L320.849 231.078L325.543 234.818L354.541 234.894L351.04 247.156L355.734 250.895L370.405 250.909L370.404 234.862L378.872 234.989L378.937 223.132ZM355.935 196.803L355.882 223.001L339.515 222.979L354.993 198.496L355.935 196.803Z" fill="url(#paint4_linear_2401_7169)" fillOpacity="0.5"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M374.25 219.326L374.185 231.183L365.792 231.15L365.793 247.197L351.122 247.183L351.121 231.137L320.847 231.096L320.217 221.812L351.164 172.93L366.002 172.962L365.857 219.293L374.25 219.326ZM351.186 219.279L351.249 192.997L350.307 194.69L334.82 219.257L351.186 219.279Z" fill="url(#paint5_linear_2401_7169)"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M306.259 188.503L301.687 181.289L301.257 182.984C297.791 180.325 293.295 178.764 287.947 178.36C279.926 177.754 273.595 179.899 268.894 184.977C264.181 189.97 261.491 197.666 260.728 207.992L259.665 221.453C259.29 227.516 259.745 232.855 261.005 237.301L259.378 236.685L264.071 244.139C264.192 244.378 264.396 244.605 264.517 244.844C268.35 250.538 274.278 253.687 282.299 254.294C290.415 254.972 296.818 252.73 301.423 247.581C306.04 242.516 308.73 234.82 309.505 224.578L310.543 210.949C311.219 201.752 309.854 194.317 306.476 188.814C306.38 188.742 306.355 188.574 306.259 188.503ZM289.898 238.915L280.363 241.881C278.198 241.088 276.613 239.608 275.607 237.441C274.214 234.388 273.705 229.829 274.164 223.754L275.564 205.694C276.086 200.039 277.262 195.916 279.105 193.409C280.949 190.903 283.589 189.737 287.038 189.995C290.571 190.241 293.112 191.836 294.492 194.806C295.811 197.355 296.361 201.049 296.215 205.791L289.898 238.915Z" fill="url(#paint6_linear_2401_7169)" fillOpacity="0.5"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M297.408 241.245C292.791 246.31 286.389 248.552 278.284 247.958C270.263 247.352 264.336 244.202 260.503 238.509C256.669 232.816 255.088 225.07 255.734 215.105L256.676 201.405C257.439 191.079 260.213 183.371 264.842 178.389C269.555 173.396 275.875 171.166 283.896 171.773C291.917 172.379 297.844 175.529 301.677 181.222C305.498 186.831 307.092 194.661 306.446 204.626L305.491 218.242C304.716 228.484 302.026 236.18 297.408 241.245ZM290.491 188.554C289.027 185.597 286.57 183.989 283.037 183.744C279.587 183.486 276.935 184.568 275.104 187.158C273.26 189.664 272.084 193.787 271.563 199.443L270.15 217.418C269.691 223.494 270.2 228.052 271.593 231.105C272.987 234.159 275.539 235.838 279.085 236.167C282.63 236.497 285.341 235.235 287.16 232.561C288.978 229.887 290.129 225.596 290.638 219.856L292.005 202.145C292.451 195.985 291.942 191.427 290.491 188.554Z" fill="url(#paint7_linear_2401_7169)"/>
  </g>
  </g>
  <path opacity="0.25" d="M29.688 67.0556L28.3587 69.9674L0.56958 61.4218L4.30434 50.4707L29.688 67.0556Z" fill="url(#paint8_linear_2401_7169)"/>
  <path opacity="0.25" d="M33.866 57.4349L31.3973 60.9798L0 37.052L8.67223 28L33.866 57.4349Z" fill="url(#paint9_linear_2401_7169)"/>
  <path opacity="0.25" d="M537.35 49.5125C536.005 49.6649 534.649 49.3536 533.506 48.6301C532.362 47.9066 531.5 46.8143 531.062 45.534C529.397 40.7331 528.267 37.0507 528.823 33.419C529.497 29.111 532.269 26.3124 535.289 23.5936C537.326 21.7639 538.589 19.1983 538.515 17.0629C538.459 15.6461 537.829 14.5205 536.529 13.5269C532.689 10.579 527.705 16.4373 527.481 16.6914C527.481 16.6914 523.246 21.2097 519.275 17.4477C515.304 13.6857 518.313 9.15027 518.313 9.15027C520.32 6.80048 522.712 4.80864 525.387 3.25966C531.769 -0.377892 538.29 -0.0478249 543.742 4.11823C547.82 7.24491 550.171 11.6837 550.363 16.6157C550.585 22.3046 547.914 28.2241 543.214 32.4415C541.007 34.4249 540.623 35.0815 540.535 35.2873C540.361 36.1911 541.742 40.1702 542.264 41.6706C542.553 42.5095 542.651 43.4026 542.55 44.2842C542.449 45.1659 542.152 46.0138 541.681 46.7657C541.21 47.5177 540.576 48.1547 539.827 48.63C539.077 49.1053 538.231 49.4068 537.35 49.5125V49.5125Z" fill="url(#paint10_linear_2401_7169)"/>
  <path opacity="0.25" d="M542.562 69.6289C546.338 69.1909 549.043 65.7754 548.605 62C548.167 58.2247 544.752 55.5191 540.977 55.9571C537.201 56.395 534.496 59.8106 534.934 63.5859C535.371 67.3613 538.787 70.0668 542.562 69.6289Z" fill="url(#paint11_linear_2401_7169)"/>
  <path opacity="0.25" d="M526.2 410.043L509.029 408.491C509.029 408.491 509.779 415.687 505.463 421.381C499.7 428.815 494.067 429.954 494.067 429.954L509.133 455.945C509.133 455.945 502.241 438.406 507.951 432.161C513.66 425.916 526.117 430.218 526.117 430.218C526.117 430.218 515.392 422.855 516.843 416.843C518.182 410.956 526.2 410.043 526.2 410.043Z" fill="url(#paint12_linear_2401_7169)"/>
  <defs>
  <linearGradient id="paint0_linear_2401_7169" x1="61" y1="225.582" x2="497.574" y2="225.582" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint1_linear_2401_7169" x1="81.2498" y1="221.434" x2="477.961" y2="221.434" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0E1439"/>
  <stop offset="0.223958" stopColor="#121339"/>
  <stop offset="0.515625" stopColor="#171139"/>
  <stop offset="0.723958" stopColor="#1B1038"/>
  <stop offset="1" stopColor="#1F0E38"/>
  </linearGradient>
  <linearGradient id="paint2_linear_2401_7169" x1="189.372" y1="209.656" x2="247.107" y2="215.755" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint3_linear_2401_7169" x1="187.95" y1="207.864" x2="242.249" y2="213.6" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint4_linear_2401_7169" x1="323.196" y1="208.864" x2="380.93" y2="214.963" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint5_linear_2401_7169" x1="321.774" y1="207.072" x2="376.073" y2="212.809" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint6_linear_2401_7169" x1="257.102" y1="221.42" x2="312.189" y2="213.207" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint7_linear_2401_7169" x1="254.349" y1="214.751" x2="308.041" y2="206.746" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint8_linear_2401_7169" x1="0.56958" y1="60.4471" x2="29.6596" y2="60.4471" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint9_linear_2401_7169" x1="0" y1="44.8756" x2="33.833" y2="44.8756" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  <linearGradient id="paint10_linear_2401_7169" x1="518.883" y1="27.6133" x2="551.221" y2="23.8623" gradientUnits="userSpaceOnUse">
  <stop stopColor="#B80DEF"/>
  <stop offset="1" stopColor="#FF00FF"/>
  </linearGradient>
  <linearGradient id="paint11_linear_2401_7169" x1="534.952" y1="63.7458" x2="548.611" y2="62.1615" gradientUnits="userSpaceOnUse">
  <stop stopColor="#B80DEF"/>
  <stop offset="1" stopColor="#FF00FF"/>
  </linearGradient>
  <linearGradient id="paint12_linear_2401_7169" x1="509.115" y1="408.486" x2="511.7" y2="455.758" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0B4BFE"/>
  <stop offset="1" stopColor="#B80DEF"/>
  </linearGradient>
  </defs>
  </svg>
);

export default ErrorDesktop;