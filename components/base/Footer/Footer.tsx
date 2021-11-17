import React from 'react';
import style from './Footer.module.scss';
import FooterLogo from 'components/assets/FooterLogo';
import Discord from 'components/assets/SocialMedias/Discord';
import Telegram from 'components/assets/SocialMedias/Telegram';
import Twitter from 'components/assets/SocialMedias/Twitter';
import Instagram from 'components/assets/SocialMedias/Instagram';

const Footer: React.FC<{}> = () => {
    return(
        <div className={style.footer + " row pt-3 mt-3"}>
            <div className={"d-none d-md-flex col-md-12 mb-4 d-flex flex-row align-items-center justify-content-center"}>
                <FooterLogo />
            </div>
            <div className={"d-md-none col-12 mb-2 d-flex flex-row align-items-center justify-content-center"}>
                <p className={style.footerCopyright}>© 2021 Ternoa Scan. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;