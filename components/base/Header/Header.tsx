import React, { useState } from 'react';
import Link from 'next/link';
import style from './Header.module.scss';
import LogoTernoaScan from 'components/assets/LogoTernoaScan';
import Hamburger from 'components/assets/Hamburger';
import Setting from 'components/assets/Setting';
import Metamask from 'components/assets/Providers/Metamask';
import WalletConnect from 'components/assets/Providers/WalletConnect';
import { middleEllipsis, formatCaps } from 'utils/strings';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ChainTypes } from 'interfaces';
import { actions } from 'redux/walletUser/actions';
import ClickAwayListener from 'react-click-away-listener';

export interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const dispatch = useAppDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCapsInputFocused, setIsCapsInputFocused] = useState(false)
    return (
        <header>
            <div className={style.header}>
                <Link href="/">
                    <a>
                        <LogoTernoaScan className={style.logo} />
                    </a>
                </Link>
                <div className="py-1 py-md-1">
                    <input
                        type="text"
                        value={''}
                        onChange={(e) => {
                            
                        }}
                        className={style.searchContainer}
                        style={{ backgroundColor: "#14142E" }}
                        min={0}
                        onFocus={(e) => {
                            setIsCapsInputFocused(true)
                        }}
                        onBlur={() => setIsCapsInputFocused(false)}
                    />
                </div>
                <div className={"d-md-none"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger className={style.hamburger + " mx-2"} />
                </div>
            </div>
        </header>
    )
}

export default Header;
