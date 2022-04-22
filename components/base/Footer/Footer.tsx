import Link from 'next/link';
import style from './Footer.module.scss';
import Discord from 'components/assets/SocialMedias/Discord';
import Telegram from 'components/assets/SocialMedias/Telegram';
import Twitter from 'components/assets/SocialMedias/Twitter';
import Instagram from 'components/assets/SocialMedias/Instagram';

const Footer: React.FC<{}> = () => {
    const year = new Date().getFullYear();
    
    return(
        <div className='container mb-3'>
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center py-sm-3'>
                <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <Link href="https://discord.com/invite/cNZTGtGJNR">
                        <a target="_blank" rel="noreferrer noopener">
                            <Discord className={style.socialLogo}/>
                        </a>
                    </Link>
                    <Link href="https://t.me/ternoa">
                        <a target="_blank" rel="noreferrer noopener">
                            <Telegram className={style.socialLogo}/>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/ternoa_">
                        <a target="_blank" rel="noreferrer noopener">
                            <Twitter className={style.socialLogo}/>
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/ternoa_/">
                        <a target="_blank" rel="noreferrer noopener">
                            <Instagram className={style.socialLogo}/>
                        </a>
                    </Link>
                </div>
                <Link href="https://www.ternoa.com/">
                    <a className={style.footerTernoa} target="_blank" rel="noreferrer noopener">
                        Ternoa.com
                    </a>
                </Link>
            </div>
            <div/>
            <hr className="d-none d-sm-block text-white-50 w-100" />
            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center py-2'>
                <div className={style.footerCopyright}>© {year} Ternoa Scan. All rights reserved.</div>
                <div>
                    <Link href="https://ternoahelp.zendesk.com/hc/fr/articles/360019045538-Terms-of-Use">
                        <a className={style.footerTerms} target="_blank" rel="noreferrer noopener">
                            Terms
                        </a>
                    </Link>
                    <Link href="https://ternoahelp.zendesk.com/hc/fr/articles/360018925097-Privacy-Policy">
                        <a className={style.footerPrivacy} target="_blank" rel="noreferrer noopener">
                            Privacy
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;