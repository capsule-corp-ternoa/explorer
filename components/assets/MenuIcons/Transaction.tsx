import React from 'react';

interface AccountProps {
  className?: string;
}

const Account: React.FC<AccountProps> = ({ className }) => (
  <svg className={className} width="99" height="16" viewBox="0 0 99 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8">
      <path d="M5.94922 0.722092L5.94824 0.722967L6.07422 4.83115C6.08691 5.23237 5.75684 5.56709 5.33789 5.57872H5.31543C4.90527 5.57872 4.56836 5.26725 4.55664 4.87353L4.48926 2.66412C2.64941 3.8785 1.51758 5.88856 1.51758 8.04315C1.51758 10.5275 2.95898 12.766 5.27734 13.8865C5.65234 14.0667 5.80273 14.5036 5.61328 14.8625C5.47949 15.1158 5.21289 15.262 4.93457 15.262C4.82031 15.262 4.70312 15.2371 4.59375 15.1839C1.75977 13.8151 0 11.0791 0 8.04315C0 5.4375 1.35352 3.00381 3.55859 1.51537L0.917969 1.58928H0.895508C0.486328 1.58928 0.149414 1.27781 0.136719 0.884092C0.125 0.482905 0.455078 0.148155 0.874023 0.13653L5.08594 0.0185923L5.12109 0.00999138C5.13574 0.00538531 5.15137 0.000795808 5.16797 0.000311087C5.58691 -0.0113139 5.9375 0.304311 5.94922 0.705499V0.722092Z"/>
      <path d="M12.3887 14.4736L15.0283 14.3997C15.4424 14.3789 15.7988 14.7037 15.8105 15.1048C15.8223 15.506 15.4932 15.8407 15.0742 15.8524L10.8623 15.9703L10.8271 15.9789C10.8125 15.9835 10.7969 15.9881 10.7803 15.9886H10.7578C10.3477 15.9886 10.0117 15.6771 9.99902 15.2834L9.99805 15.2685V15.2668L9.87207 11.1586C9.86035 10.7574 10.1904 10.4227 10.6094 10.4111C11.0254 10.3903 11.3779 10.7151 11.3906 11.1162L11.458 13.3257C13.2969 12.1113 14.4287 10.1012 14.4287 7.94666C14.4287 5.46228 12.9883 3.22381 10.6689 2.10331C10.2939 1.92225 10.1436 1.48537 10.333 1.12653C10.5215 0.768561 10.9785 0.624842 11.3535 0.805092C14.1865 2.17397 15.9473 4.91 15.9473 7.94587C15.9473 10.5523 14.5938 12.9852 12.3887 14.4736Z"/>
    </g>
    <path opacity="0.8" d="M30.012 12V4.788H27.528V3.48H33.96V4.788H31.476V12H30.012ZM34.5409 12V5.724H35.8009L35.8609 6.756C36.0209 6.404 36.2409 6.132 36.5209 5.94C36.8089 5.74 37.1449 5.64 37.5289 5.64C37.6489 5.64 37.7649 5.648 37.8769 5.664C37.9889 5.68 38.0889 5.708 38.1769 5.748L38.0209 7.092C37.9329 7.06 37.8409 7.04 37.7449 7.032C37.6489 7.016 37.5529 7.008 37.4569 7.008C36.9769 7.008 36.6009 7.168 36.3289 7.488C36.0569 7.808 35.9209 8.252 35.9209 8.82V12H34.5409ZM40.9609 12.18C40.6409 12.18 40.3449 12.132 40.0729 12.036C39.8089 11.94 39.5769 11.804 39.3769 11.628C39.1769 11.452 39.0209 11.244 38.9089 11.004C38.7969 10.764 38.7409 10.5 38.7409 10.212C38.7409 9.812 38.8449 9.464 39.0529 9.168C39.2689 8.864 39.5689 8.628 39.9529 8.46C40.3369 8.292 40.7849 8.208 41.2969 8.208C41.5769 8.208 41.8449 8.236 42.1009 8.292C42.3569 8.34 42.6009 8.412 42.8329 8.508V8.112C42.8329 7.832 42.7809 7.588 42.6769 7.38C42.5729 7.164 42.4249 6.996 42.2329 6.876C42.0409 6.756 41.8089 6.696 41.5369 6.696C41.2489 6.696 40.9889 6.772 40.7569 6.924C40.5249 7.076 40.3529 7.288 40.2409 7.56L38.9689 7.272C39.0649 6.92 39.2369 6.616 39.4849 6.36C39.7409 6.104 40.0449 5.904 40.3969 5.76C40.7569 5.616 41.1449 5.544 41.5609 5.544C41.9529 5.544 42.3089 5.608 42.6289 5.736C42.9569 5.864 43.2369 6.044 43.4689 6.276C43.7009 6.508 43.8809 6.784 44.0089 7.104C44.1369 7.424 44.2009 7.78 44.2009 8.172V12H42.9409L42.8929 11.172C42.7249 11.476 42.4729 11.72 42.1369 11.904C41.8009 12.088 41.4089 12.18 40.9609 12.18ZM40.1329 10.152C40.1329 10.328 40.1809 10.488 40.2769 10.632C40.3729 10.768 40.5049 10.876 40.6729 10.956C40.8489 11.036 41.0529 11.076 41.2849 11.076C41.5809 11.076 41.8449 11.012 42.0769 10.884C42.3089 10.756 42.4929 10.584 42.6289 10.368C42.7649 10.144 42.8329 9.892 42.8329 9.612V9.468C42.6249 9.38 42.4089 9.312 42.1849 9.264C41.9689 9.208 41.7449 9.18 41.5129 9.18C41.0969 9.18 40.7609 9.268 40.5049 9.444C40.2569 9.62 40.1329 9.856 40.1329 10.152ZM45.6854 12V5.724H46.9454L46.9934 6.588C47.1774 6.268 47.4334 6.016 47.7614 5.832C48.0974 5.64 48.4814 5.544 48.9134 5.544C49.3854 5.544 49.7934 5.656 50.1374 5.88C50.4894 6.104 50.7614 6.42 50.9534 6.828C51.1454 7.236 51.2414 7.716 51.2414 8.268V12H49.8614V8.424C49.8614 7.912 49.7454 7.512 49.5134 7.224C49.2894 6.936 48.9734 6.792 48.5654 6.792C48.2774 6.792 48.0174 6.86 47.7854 6.996C47.5614 7.132 47.3854 7.316 47.2574 7.548C47.1294 7.78 47.0654 8.048 47.0654 8.352V12H45.6854ZM54.8764 12.18C54.4684 12.18 54.0884 12.112 53.7364 11.976C53.3924 11.84 53.0964 11.648 52.8484 11.4C52.6084 11.144 52.4364 10.844 52.3324 10.5L53.5804 10.176C53.6844 10.448 53.8524 10.66 54.0844 10.812C54.3164 10.964 54.5844 11.04 54.8884 11.04C55.2004 11.04 55.4564 10.968 55.6564 10.824C55.8564 10.672 55.9564 10.48 55.9564 10.248C55.9564 10.048 55.8764 9.88 55.7164 9.744C55.5564 9.608 55.2964 9.508 54.9364 9.444L54.5404 9.372C53.8684 9.252 53.3604 9.036 53.0164 8.724C52.6804 8.412 52.5124 8.012 52.5124 7.524C52.5124 7.132 52.6124 6.788 52.8124 6.492C53.0124 6.196 53.2884 5.964 53.6404 5.796C53.9924 5.628 54.3964 5.544 54.8524 5.544C55.2444 5.544 55.6044 5.612 55.9324 5.748C56.2604 5.884 56.5364 6.076 56.7604 6.324C56.9844 6.572 57.1444 6.864 57.2404 7.2L56.0044 7.5C55.9084 7.244 55.7564 7.044 55.5484 6.9C55.3484 6.748 55.1124 6.672 54.8404 6.672C54.5604 6.672 54.3284 6.744 54.1444 6.888C53.9604 7.024 53.8684 7.2 53.8684 7.416C53.8684 7.6 53.9484 7.752 54.1084 7.872C54.2764 7.992 54.5564 8.088 54.9484 8.16L55.3444 8.232C55.9844 8.344 56.4764 8.564 56.8204 8.892C57.1644 9.22 57.3364 9.628 57.3364 10.116C57.3364 10.412 57.2764 10.688 57.1564 10.944C57.0364 11.192 56.8644 11.412 56.6404 11.604C56.4244 11.788 56.1644 11.928 55.8604 12.024C55.5644 12.128 55.2364 12.18 54.8764 12.18ZM60.4374 12.18C60.1174 12.18 59.8214 12.132 59.5494 12.036C59.2854 11.94 59.0534 11.804 58.8534 11.628C58.6534 11.452 58.4974 11.244 58.3854 11.004C58.2734 10.764 58.2174 10.5 58.2174 10.212C58.2174 9.812 58.3214 9.464 58.5294 9.168C58.7454 8.864 59.0454 8.628 59.4294 8.46C59.8134 8.292 60.2614 8.208 60.7734 8.208C61.0534 8.208 61.3214 8.236 61.5774 8.292C61.8334 8.34 62.0774 8.412 62.3094 8.508V8.112C62.3094 7.832 62.2574 7.588 62.1534 7.38C62.0494 7.164 61.9014 6.996 61.7094 6.876C61.5174 6.756 61.2854 6.696 61.0134 6.696C60.7254 6.696 60.4654 6.772 60.2334 6.924C60.0014 7.076 59.8294 7.288 59.7174 7.56L58.4454 7.272C58.5414 6.92 58.7134 6.616 58.9614 6.36C59.2174 6.104 59.5214 5.904 59.8734 5.76C60.2334 5.616 60.6214 5.544 61.0374 5.544C61.4294 5.544 61.7854 5.608 62.1054 5.736C62.4334 5.864 62.7134 6.044 62.9454 6.276C63.1774 6.508 63.3574 6.784 63.4854 7.104C63.6134 7.424 63.6774 7.78 63.6774 8.172V12H62.4174L62.3694 11.172C62.2014 11.476 61.9494 11.72 61.6134 11.904C61.2774 12.088 60.8854 12.18 60.4374 12.18ZM59.6094 10.152C59.6094 10.328 59.6574 10.488 59.7534 10.632C59.8494 10.768 59.9814 10.876 60.1494 10.956C60.3254 11.036 60.5294 11.076 60.7614 11.076C61.0574 11.076 61.3214 11.012 61.5534 10.884C61.7854 10.756 61.9694 10.584 62.1054 10.368C62.2414 10.144 62.3094 9.892 62.3094 9.612V9.468C62.1014 9.38 61.8854 9.312 61.6614 9.264C61.4454 9.208 61.2214 9.18 60.9894 9.18C60.5734 9.18 60.2374 9.268 59.9814 9.444C59.7334 9.62 59.6094 9.856 59.6094 10.152ZM67.994 12.18C67.546 12.18 67.134 12.1 66.758 11.94C66.382 11.772 66.054 11.544 65.774 11.256C65.494 10.96 65.274 10.612 65.114 10.212C64.962 9.812 64.886 9.376 64.886 8.904C64.886 8.432 64.966 7.992 65.126 7.584C65.286 7.176 65.506 6.82 65.786 6.516C66.066 6.212 66.394 5.976 66.77 5.808C67.154 5.632 67.57 5.544 68.018 5.544C68.45 5.544 68.846 5.624 69.206 5.784C69.566 5.936 69.874 6.156 70.13 6.444C70.394 6.724 70.582 7.056 70.694 7.44L69.386 7.752C69.25 7.448 69.058 7.212 68.81 7.044C68.57 6.876 68.298 6.792 67.994 6.792C67.674 6.792 67.386 6.884 67.13 7.068C66.874 7.252 66.67 7.504 66.518 7.824C66.374 8.136 66.302 8.492 66.302 8.892C66.302 9.284 66.374 9.636 66.518 9.948C66.662 10.252 66.858 10.492 67.106 10.668C67.362 10.844 67.658 10.932 67.994 10.932C68.314 10.932 68.606 10.852 68.87 10.692C69.134 10.524 69.33 10.288 69.458 9.984L70.754 10.284C70.642 10.668 70.45 11.004 70.178 11.292C69.906 11.572 69.582 11.792 69.206 11.952C68.83 12.104 68.426 12.18 67.994 12.18ZM74.4337 12.18C73.8017 12.18 73.3057 12 72.9457 11.64C72.5857 11.272 72.4057 10.748 72.4057 10.068V6.84H71.3017V5.724H72.4057V3.6H73.7857V5.724H75.6097V6.84H73.7857V9.924C73.7857 10.26 73.8537 10.52 73.9897 10.704C74.1337 10.88 74.3417 10.968 74.6137 10.968C74.7577 10.968 74.9137 10.948 75.0817 10.908C75.2497 10.86 75.4057 10.796 75.5497 10.716L75.8617 11.76C75.6777 11.888 75.4617 11.988 75.2137 12.06C74.9737 12.14 74.7137 12.18 74.4337 12.18ZM78.475 3.972C78.475 4.124 78.435 4.264 78.355 4.392C78.283 4.52 78.183 4.624 78.055 4.704C77.927 4.776 77.787 4.812 77.635 4.812C77.483 4.812 77.343 4.776 77.215 4.704C77.087 4.624 76.983 4.52 76.903 4.392C76.831 4.264 76.795 4.124 76.795 3.972C76.795 3.82 76.831 3.68 76.903 3.552C76.983 3.424 77.087 3.324 77.215 3.252C77.343 3.172 77.483 3.132 77.635 3.132C77.787 3.132 77.927 3.172 78.055 3.252C78.183 3.324 78.283 3.424 78.355 3.552C78.435 3.68 78.475 3.82 78.475 3.972ZM76.951 12V5.724H78.331V12H76.951ZM82.7381 12.18C82.2821 12.18 81.8581 12.1 81.4661 11.94C81.0821 11.772 80.7461 11.54 80.4581 11.244C80.1701 10.94 79.9461 10.588 79.7861 10.188C79.6261 9.78 79.5461 9.336 79.5461 8.856C79.5461 8.384 79.6261 7.948 79.7861 7.548C79.9461 7.14 80.1701 6.788 80.4581 6.492C80.7541 6.188 81.0981 5.956 81.4901 5.796C81.8901 5.628 82.3221 5.544 82.7861 5.544C83.2421 5.544 83.6621 5.628 84.0461 5.796C84.4381 5.956 84.7781 6.188 85.0661 6.492C85.3541 6.788 85.5781 7.136 85.7381 7.536C85.8981 7.936 85.9781 8.376 85.9781 8.856C85.9781 9.336 85.8981 9.78 85.7381 10.188C85.5781 10.588 85.3501 10.94 85.0541 11.244C84.7661 11.54 84.4221 11.772 84.0221 11.94C83.6301 12.1 83.2021 12.18 82.7381 12.18ZM82.7621 10.932C83.1061 10.932 83.4141 10.844 83.6861 10.668C83.9581 10.484 84.1701 10.236 84.3221 9.924C84.4821 9.612 84.5621 9.256 84.5621 8.856C84.5621 8.456 84.4821 8.104 84.3221 7.8C84.1701 7.488 83.9581 7.244 83.6861 7.068C83.4141 6.884 83.1061 6.792 82.7621 6.792C82.4181 6.792 82.1101 6.884 81.8381 7.068C81.5661 7.244 81.3501 7.488 81.1901 7.8C81.0381 8.104 80.9621 8.456 80.9621 8.856C80.9621 9.256 81.0381 9.612 81.1901 9.924C81.3501 10.236 81.5661 10.484 81.8381 10.668C82.1101 10.844 82.4181 10.932 82.7621 10.932ZM87.1932 12V5.724H88.4532L88.5012 6.588C88.6852 6.268 88.9412 6.016 89.2692 5.832C89.6052 5.64 89.9892 5.544 90.4212 5.544C90.8932 5.544 91.3012 5.656 91.6452 5.88C91.9972 6.104 92.2692 6.42 92.4612 6.828C92.6532 7.236 92.7492 7.716 92.7492 8.268V12H91.3692V8.424C91.3692 7.912 91.2532 7.512 91.0212 7.224C90.7972 6.936 90.4812 6.792 90.0732 6.792C89.7852 6.792 89.5252 6.86 89.2932 6.996C89.0692 7.132 88.8932 7.316 88.7652 7.548C88.6372 7.78 88.5732 8.048 88.5732 8.352V12H87.1932ZM96.3842 12.18C95.9762 12.18 95.5962 12.112 95.2442 11.976C94.9002 11.84 94.6042 11.648 94.3562 11.4C94.1162 11.144 93.9442 10.844 93.8402 10.5L95.0882 10.176C95.1922 10.448 95.3602 10.66 95.5922 10.812C95.8242 10.964 96.0922 11.04 96.3962 11.04C96.7082 11.04 96.9642 10.968 97.1642 10.824C97.3642 10.672 97.4642 10.48 97.4642 10.248C97.4642 10.048 97.3842 9.88 97.2242 9.744C97.0642 9.608 96.8042 9.508 96.4442 9.444L96.0482 9.372C95.3762 9.252 94.8682 9.036 94.5242 8.724C94.1882 8.412 94.0202 8.012 94.0202 7.524C94.0202 7.132 94.1202 6.788 94.3202 6.492C94.5202 6.196 94.7962 5.964 95.1482 5.796C95.5002 5.628 95.9042 5.544 96.3602 5.544C96.7522 5.544 97.1122 5.612 97.4402 5.748C97.7682 5.884 98.0442 6.076 98.2682 6.324C98.4922 6.572 98.6522 6.864 98.7482 7.2L97.5122 7.5C97.4162 7.244 97.2642 7.044 97.0562 6.9C96.8562 6.748 96.6202 6.672 96.3482 6.672C96.0682 6.672 95.8362 6.744 95.6522 6.888C95.4682 7.024 95.3762 7.2 95.3762 7.416C95.3762 7.6 95.4562 7.752 95.6162 7.872C95.7842 7.992 96.0642 8.088 96.4562 8.16L96.8522 8.232C97.4922 8.344 97.9842 8.564 98.3282 8.892C98.6722 9.22 98.8442 9.628 98.8442 10.116C98.8442 10.412 98.7842 10.688 98.6642 10.944C98.5442 11.192 98.3722 11.412 98.1482 11.604C97.9322 11.788 97.6722 11.928 97.3682 12.024C97.0722 12.128 96.7442 12.18 96.3842 12.18Z"/>
  </svg>
);

export default Account;
