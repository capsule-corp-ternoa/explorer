import React from 'react';

interface BlockProps {
  className?: string;
}

const Block: React.FC<BlockProps> = ({ className }) => (
  <svg className={className} width="66" height="18" viewBox="0 0 66 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M29.84 14V5.48H32.792C33.352 5.48 33.832 5.572 34.232 5.756C34.64 5.932 34.956 6.184 35.18 6.512C35.404 6.84 35.516 7.228 35.516 7.676C35.516 8.084 35.42 8.444 35.228 8.756C35.044 9.068 34.776 9.312 34.424 9.488C34.88 9.648 35.236 9.916 35.492 10.292C35.748 10.66 35.876 11.092 35.876 11.588C35.876 12.076 35.752 12.5 35.504 12.86C35.256 13.22 34.904 13.5 34.448 13.7C34 13.9 33.468 14 32.852 14H29.84ZM31.256 6.728V8.984H32.66C33.108 8.984 33.452 8.888 33.692 8.696C33.932 8.504 34.052 8.224 34.052 7.856C34.052 7.504 33.928 7.228 33.68 7.028C33.44 6.828 33.1 6.728 32.66 6.728H31.256ZM31.256 12.752H32.792C33.304 12.752 33.7 12.64 33.98 12.416C34.26 12.184 34.4 11.868 34.4 11.468C34.4 11.052 34.26 10.732 33.98 10.508C33.7 10.284 33.304 10.172 32.792 10.172H31.256V12.752ZM37.1034 14V5.072H38.4834V14H37.1034ZM42.8905 14.18C42.4345 14.18 42.0105 14.1 41.6185 13.94C41.2345 13.772 40.8985 13.54 40.6105 13.244C40.3225 12.94 40.0985 12.588 39.9385 12.188C39.7785 11.78 39.6985 11.336 39.6985 10.856C39.6985 10.384 39.7785 9.948 39.9385 9.548C40.0985 9.14 40.3225 8.788 40.6105 8.492C40.9065 8.188 41.2505 7.956 41.6425 7.796C42.0425 7.628 42.4745 7.544 42.9385 7.544C43.3945 7.544 43.8145 7.628 44.1985 7.796C44.5905 7.956 44.9305 8.188 45.2185 8.492C45.5065 8.788 45.7305 9.136 45.8905 9.536C46.0505 9.936 46.1305 10.376 46.1305 10.856C46.1305 11.336 46.0505 11.78 45.8905 12.188C45.7305 12.588 45.5025 12.94 45.2065 13.244C44.9185 13.54 44.5745 13.772 44.1745 13.94C43.7825 14.1 43.3545 14.18 42.8905 14.18ZM42.9145 12.932C43.2585 12.932 43.5665 12.844 43.8385 12.668C44.1105 12.484 44.3225 12.236 44.4745 11.924C44.6345 11.612 44.7145 11.256 44.7145 10.856C44.7145 10.456 44.6345 10.104 44.4745 9.8C44.3225 9.488 44.1105 9.244 43.8385 9.068C43.5665 8.884 43.2585 8.792 42.9145 8.792C42.5705 8.792 42.2625 8.884 41.9905 9.068C41.7185 9.244 41.5025 9.488 41.3425 9.8C41.1905 10.104 41.1145 10.456 41.1145 10.856C41.1145 11.256 41.1905 11.612 41.3425 11.924C41.5025 12.236 41.7185 12.484 41.9905 12.668C42.2625 12.844 42.5705 12.932 42.9145 12.932ZM50.2362 14.18C49.7882 14.18 49.3762 14.1 49.0002 13.94C48.6242 13.772 48.2962 13.544 48.0162 13.256C47.7362 12.96 47.5162 12.612 47.3562 12.212C47.2042 11.812 47.1282 11.376 47.1282 10.904C47.1282 10.432 47.2082 9.992 47.3682 9.584C47.5282 9.176 47.7482 8.82 48.0282 8.516C48.3082 8.212 48.6362 7.976 49.0122 7.808C49.3962 7.632 49.8122 7.544 50.2602 7.544C50.6922 7.544 51.0882 7.624 51.4482 7.784C51.8082 7.936 52.1162 8.156 52.3722 8.444C52.6362 8.724 52.8242 9.056 52.9362 9.44L51.6282 9.752C51.4922 9.448 51.3002 9.212 51.0522 9.044C50.8122 8.876 50.5402 8.792 50.2362 8.792C49.9162 8.792 49.6282 8.884 49.3722 9.068C49.1162 9.252 48.9122 9.504 48.7602 9.824C48.6162 10.136 48.5442 10.492 48.5442 10.892C48.5442 11.284 48.6162 11.636 48.7602 11.948C48.9042 12.252 49.1002 12.492 49.3482 12.668C49.6042 12.844 49.9002 12.932 50.2362 12.932C50.5562 12.932 50.8482 12.852 51.1122 12.692C51.3762 12.524 51.5722 12.288 51.7002 11.984L52.9962 12.284C52.8842 12.668 52.6922 13.004 52.4202 13.292C52.1482 13.572 51.8242 13.792 51.4482 13.952C51.0722 14.104 50.6682 14.18 50.2362 14.18ZM54.1307 14V5.072H55.5107V10.316L58.0787 7.724H59.7587L56.9387 10.508L60.0467 14H58.2347L55.5107 10.832V14H54.1307ZM62.935 14.18C62.527 14.18 62.147 14.112 61.795 13.976C61.451 13.84 61.155 13.648 60.907 13.4C60.667 13.144 60.495 12.844 60.391 12.5L61.639 12.176C61.743 12.448 61.911 12.66 62.143 12.812C62.375 12.964 62.643 13.04 62.947 13.04C63.259 13.04 63.515 12.968 63.715 12.824C63.915 12.672 64.015 12.48 64.015 12.248C64.015 12.048 63.935 11.88 63.775 11.744C63.615 11.608 63.355 11.508 62.995 11.444L62.599 11.372C61.927 11.252 61.419 11.036 61.075 10.724C60.739 10.412 60.571 10.012 60.571 9.524C60.571 9.132 60.671 8.788 60.871 8.492C61.071 8.196 61.347 7.964 61.699 7.796C62.051 7.628 62.455 7.544 62.911 7.544C63.303 7.544 63.663 7.612 63.991 7.748C64.319 7.884 64.595 8.076 64.819 8.324C65.043 8.572 65.203 8.864 65.299 9.2L64.063 9.5C63.967 9.244 63.815 9.044 63.607 8.9C63.407 8.748 63.171 8.672 62.899 8.672C62.619 8.672 62.387 8.744 62.203 8.888C62.019 9.024 61.927 9.2 61.927 9.416C61.927 9.6 62.007 9.752 62.167 9.872C62.335 9.992 62.615 10.088 63.007 10.16L63.403 10.232C64.043 10.344 64.535 10.564 64.879 10.892C65.223 11.22 65.395 11.628 65.395 12.116C65.395 12.412 65.335 12.688 65.215 12.944C65.095 13.192 64.923 13.412 64.699 13.604C64.483 13.788 64.223 13.928 63.919 14.024C63.623 14.128 63.295 14.18 62.935 14.18Z"/>
    <path opacity="0.8" d="M15.2797 5.7L10.6749 3.315C10.2897 3.1125 9.80415 3.1125 9.41902 3.315L4.81421 5.7C4.42908 5.9025 4.18628 6.27 4.18628 6.675V11.4375C4.18628 11.8425 4.42908 12.21 4.81421 12.4125L9.41902 14.7975C9.80415 15 10.2897 15 10.6749 14.7975L15.2797 12.4125C15.6648 12.21 15.9076 11.8425 15.9076 11.4375V6.675C15.9076 6.27 15.6648 5.9025 15.2797 5.7ZM5.86075 11.22V7.755L9.20971 9.495V12.9525L5.86075 11.22ZM10.0469 8.1975L6.69799 6.4575L10.0469 4.725L13.3959 6.4575L10.0469 8.1975ZM10.8842 12.9525V9.495L14.2331 7.755V11.22L10.8842 12.9525ZM5.86075 1.5H2.93042C2.23551 1.5 1.67456 2.0025 1.67456 2.625V5.25H3.34904V3H5.86075V1.5ZM14.2331 1.5H17.1635C17.8584 1.5 18.4193 2.0025 18.4193 2.625V5.25H16.7449V3H14.2331V1.5ZM5.86075 16.5H2.93042C2.23551 16.5 1.67456 15.9975 1.67456 15.375V12.75H3.34904V15H5.86075V16.5ZM14.2331 16.5H17.1635C17.8584 16.5 18.4193 15.9975 18.4193 15.375V12.75H16.7449V15H14.2331V16.5Z"/>
  </svg>
);

export default Block;
