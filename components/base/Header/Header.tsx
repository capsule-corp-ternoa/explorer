import React, { useState } from 'react';
import Link from 'next/link';
import style from './Header.module.scss';
import LogoTernoaScan from 'components/assets/LogoTernoaScan';
import Hamburger from 'components/assets/Hamburger';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Search from 'components/assets/Search';
import { actions } from 'redux/walletUser/actions';
import ClickAwayListener from 'react-click-away-listener';

export interface HeaderProps {
    searchBar?: Boolean
}

const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [isCapsInputFocused, setIsCapsInputFocused] = useState(false)
    return (
        <header>
            <div className={style.header}>
                <Link href="/">
                    <a>
                        <LogoTernoaScan className={style.logo} />
                    </a>
                </Link>
                <div className={`${style.searchBoxContainer} py-1 py-md-1 position-relative`}>
                    {(props.searchBar || props.searchBar == undefined) && <div className={style.mobileSearchBar}>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if(e.keyCode === 13) setSearchText('');
                            }}
                            className={style.searchContainer}
                            placeholder="Search by adresse / Txn Hash / Block / NFT"
                            style={{ backgroundColor: "#14142E" }}
                            min={0}
                            onFocus={(e) => {
                                setIsCapsInputFocused(true)
                            }}
                            onBlur={() => setIsCapsInputFocused(false)}
                        />
                        <Search className={style.search + " position-absolute"}/>
                    </div>}
                </div>
                <div className={"d-md-none"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger className={style.hamburger + " mx-2"} />
                </div>
            </div>
        </header>
    )
}

export default Header;
