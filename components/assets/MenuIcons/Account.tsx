import React from 'react';

interface AccountProps {
  className?: string;
}

const Account: React.FC<AccountProps> = ({ className }) => (
  <svg className={className} width="98" height="16" viewBox="0 0 98 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"/>
    <path opacity="0.8" d="M27.228 13L30.624 4.48H32.184L35.592 13H34.08L33.276 10.888H29.484L28.68 13H27.228ZM29.964 9.64H32.796L31.38 5.956L29.964 9.64ZM36.5682 13V4.072H37.9482V13H36.5682ZM39.4393 13V4.072H40.8193V13H39.4393ZM44.3491 13L47.7451 4.48H49.3051L52.7131 13H51.2011L50.3971 10.888H46.6051L45.8011 13H44.3491ZM47.0851 9.64H49.9171L48.5011 5.956L47.0851 9.64ZM56.3338 13.18C55.8858 13.18 55.4738 13.1 55.0978 12.94C54.7218 12.772 54.3938 12.544 54.1138 12.256C53.8338 11.96 53.6138 11.612 53.4538 11.212C53.3018 10.812 53.2258 10.376 53.2258 9.904C53.2258 9.432 53.3058 8.992 53.4658 8.584C53.6258 8.176 53.8458 7.82 54.1258 7.516C54.4058 7.212 54.7338 6.976 55.1098 6.808C55.4938 6.632 55.9098 6.544 56.3578 6.544C56.7898 6.544 57.1858 6.624 57.5458 6.784C57.9058 6.936 58.2138 7.156 58.4698 7.444C58.7338 7.724 58.9218 8.056 59.0338 8.44L57.7258 8.752C57.5898 8.448 57.3978 8.212 57.1498 8.044C56.9098 7.876 56.6378 7.792 56.3338 7.792C56.0138 7.792 55.7258 7.884 55.4698 8.068C55.2138 8.252 55.0098 8.504 54.8578 8.824C54.7138 9.136 54.6418 9.492 54.6418 9.892C54.6418 10.284 54.7138 10.636 54.8578 10.948C55.0018 11.252 55.1978 11.492 55.4458 11.668C55.7018 11.844 55.9978 11.932 56.3338 11.932C56.6538 11.932 56.9458 11.852 57.2098 11.692C57.4738 11.524 57.6698 11.288 57.7978 10.984L59.0938 11.284C58.9818 11.668 58.7898 12.004 58.5178 12.292C58.2458 12.572 57.9218 12.792 57.5458 12.952C57.1698 13.104 56.7658 13.18 56.3338 13.18ZM63.0135 13.18C62.5655 13.18 62.1535 13.1 61.7775 12.94C61.4015 12.772 61.0735 12.544 60.7935 12.256C60.5135 11.96 60.2935 11.612 60.1335 11.212C59.9815 10.812 59.9055 10.376 59.9055 9.904C59.9055 9.432 59.9855 8.992 60.1455 8.584C60.3055 8.176 60.5255 7.82 60.8055 7.516C61.0855 7.212 61.4135 6.976 61.7895 6.808C62.1735 6.632 62.5895 6.544 63.0375 6.544C63.4695 6.544 63.8655 6.624 64.2255 6.784C64.5855 6.936 64.8935 7.156 65.1495 7.444C65.4135 7.724 65.6015 8.056 65.7135 8.44L64.4055 8.752C64.2695 8.448 64.0775 8.212 63.8295 8.044C63.5895 7.876 63.3175 7.792 63.0135 7.792C62.6935 7.792 62.4055 7.884 62.1495 8.068C61.8935 8.252 61.6895 8.504 61.5375 8.824C61.3935 9.136 61.3215 9.492 61.3215 9.892C61.3215 10.284 61.3935 10.636 61.5375 10.948C61.6815 11.252 61.8775 11.492 62.1255 11.668C62.3815 11.844 62.6775 11.932 63.0135 11.932C63.3335 11.932 63.6255 11.852 63.8895 11.692C64.1535 11.524 64.3495 11.288 64.4775 10.984L65.7735 11.284C65.6615 11.668 65.4695 12.004 65.1975 12.292C64.9255 12.572 64.6015 12.792 64.2255 12.952C63.8495 13.104 63.4455 13.18 63.0135 13.18ZM69.7772 13.18C69.3212 13.18 68.8972 13.1 68.5052 12.94C68.1212 12.772 67.7852 12.54 67.4972 12.244C67.2092 11.94 66.9852 11.588 66.8252 11.188C66.6652 10.78 66.5852 10.336 66.5852 9.856C66.5852 9.384 66.6652 8.948 66.8252 8.548C66.9852 8.14 67.2092 7.788 67.4972 7.492C67.7932 7.188 68.1372 6.956 68.5292 6.796C68.9292 6.628 69.3612 6.544 69.8252 6.544C70.2812 6.544 70.7012 6.628 71.0852 6.796C71.4772 6.956 71.8172 7.188 72.1052 7.492C72.3932 7.788 72.6172 8.136 72.7772 8.536C72.9372 8.936 73.0172 9.376 73.0172 9.856C73.0172 10.336 72.9372 10.78 72.7772 11.188C72.6172 11.588 72.3892 11.94 72.0932 12.244C71.8052 12.54 71.4612 12.772 71.0612 12.94C70.6692 13.1 70.2412 13.18 69.7772 13.18ZM69.8012 11.932C70.1452 11.932 70.4532 11.844 70.7252 11.668C70.9972 11.484 71.2092 11.236 71.3612 10.924C71.5212 10.612 71.6012 10.256 71.6012 9.856C71.6012 9.456 71.5212 9.104 71.3612 8.8C71.2092 8.488 70.9972 8.244 70.7252 8.068C70.4532 7.884 70.1452 7.792 69.8012 7.792C69.4572 7.792 69.1492 7.884 68.8772 8.068C68.6052 8.244 68.3892 8.488 68.2292 8.8C68.0772 9.104 68.0012 9.456 68.0012 9.856C68.0012 10.256 68.0772 10.612 68.2292 10.924C68.3892 11.236 68.6052 11.484 68.8772 11.668C69.1492 11.844 69.4572 11.932 69.8012 11.932ZM76.9923 13.18C76.4323 13.18 75.9443 13.06 75.5283 12.82C75.1203 12.58 74.8003 12.24 74.5683 11.8C74.3443 11.352 74.2323 10.828 74.2323 10.228V6.724H75.6123V10.252C75.6123 10.772 75.7363 11.184 75.9843 11.488C76.2323 11.784 76.5723 11.932 77.0043 11.932C77.4363 11.932 77.7763 11.784 78.0243 11.488C78.2723 11.184 78.3963 10.772 78.3963 10.252V6.724H79.7763V10.228C79.7763 10.82 79.6603 11.34 79.4283 11.788C79.2043 12.228 78.8843 12.572 78.4683 12.82C78.0523 13.06 77.5603 13.18 76.9923 13.18ZM81.2635 13V6.724H82.5235L82.5715 7.588C82.7555 7.268 83.0115 7.016 83.3395 6.832C83.6755 6.64 84.0595 6.544 84.4915 6.544C84.9635 6.544 85.3715 6.656 85.7155 6.88C86.0675 7.104 86.3395 7.42 86.5315 7.828C86.7235 8.236 86.8195 8.716 86.8195 9.268V13H85.4395V9.424C85.4395 8.912 85.3235 8.512 85.0915 8.224C84.8675 7.936 84.5515 7.792 84.1435 7.792C83.8555 7.792 83.5955 7.86 83.3635 7.996C83.1395 8.132 82.9635 8.316 82.8355 8.548C82.7075 8.78 82.6435 9.048 82.6435 9.352V13H81.2635ZM90.7227 13.18C90.0907 13.18 89.5947 13 89.2347 12.64C88.8747 12.272 88.6947 11.748 88.6947 11.068V7.84H87.5907V6.724H88.6947V4.6H90.0747V6.724H91.8987V7.84H90.0747V10.924C90.0747 11.26 90.1427 11.52 90.2787 11.704C90.4227 11.88 90.6307 11.968 90.9027 11.968C91.0467 11.968 91.2027 11.948 91.3707 11.908C91.5387 11.86 91.6947 11.796 91.8387 11.716L92.1507 12.76C91.9667 12.888 91.7507 12.988 91.5027 13.06C91.2627 13.14 91.0027 13.18 90.7227 13.18ZM95.3881 13.18C94.9801 13.18 94.6001 13.112 94.2481 12.976C93.9041 12.84 93.6081 12.648 93.3601 12.4C93.1201 12.144 92.9481 11.844 92.8441 11.5L94.0921 11.176C94.1961 11.448 94.3641 11.66 94.5961 11.812C94.8281 11.964 95.0961 12.04 95.4001 12.04C95.7121 12.04 95.9681 11.968 96.1681 11.824C96.3681 11.672 96.4681 11.48 96.4681 11.248C96.4681 11.048 96.3881 10.88 96.2281 10.744C96.0681 10.608 95.8081 10.508 95.4481 10.444L95.0521 10.372C94.3801 10.252 93.8721 10.036 93.5281 9.724C93.1921 9.412 93.0241 9.012 93.0241 8.524C93.0241 8.132 93.1241 7.788 93.3241 7.492C93.5241 7.196 93.8001 6.964 94.1521 6.796C94.5041 6.628 94.9081 6.544 95.3641 6.544C95.7561 6.544 96.1161 6.612 96.4441 6.748C96.7721 6.884 97.0481 7.076 97.2721 7.324C97.4961 7.572 97.6561 7.864 97.7521 8.2L96.5161 8.5C96.4201 8.244 96.2681 8.044 96.0601 7.9C95.8601 7.748 95.6241 7.672 95.3521 7.672C95.0721 7.672 94.8401 7.744 94.6561 7.888C94.4721 8.024 94.3801 8.2 94.3801 8.416C94.3801 8.6 94.4601 8.752 94.6201 8.872C94.7881 8.992 95.0681 9.088 95.4601 9.16L95.8561 9.232C96.4961 9.344 96.9881 9.564 97.3321 9.892C97.6761 10.22 97.8481 10.628 97.8481 11.116C97.8481 11.412 97.7881 11.688 97.6681 11.944C97.5481 12.192 97.3761 12.412 97.1521 12.604C96.9361 12.788 96.6761 12.928 96.3721 13.024C96.0761 13.128 95.7481 13.18 95.3881 13.18Z"/>
  </svg>
);

export default Account;