import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './Header.module.scss';
import LogoTernoaScan from 'components/assets/LogoTernoaScan';
import Hamburger from 'components/assets/Hamburger';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Search from 'components/assets/Search';
import { actions } from 'redux/walletUser/actions';
import ClickAwayListener from 'react-click-away-listener';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useMediaQuery } from 'react-responsive';
import DownArrow from 'components/assets/DownArrow';

export interface HeaderProps {
    searchBar?: Boolean
}

const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [isCapsInputFocused, setIsCapsInputFocused] = useState(false)
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 768px)' });
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);

    let timeout:any = undefined;
    
    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const toggle = () => {
        setMenu(!menu);
    }
    const toggle1 = () => {
        setMenu(!menu1);
    }

    const goAccountIndex = () => {
        router.push("/account");
    }

    const leaveMenu = () => {
        timeout = setTimeout(() => {
            setMenu(false)
        }, 1200);
    }

    const overMenu = () => {
        clearTimeout(timeout)
        setMenu(true)
        setMenu1(false)
    }

    const leaveMenu1 = () => {
        timeout = setTimeout(() => {
            setMenu1(false)
        }, 1200);
    }

    const overMenu1 = () => {
        clearTimeout(timeout)
        setMenu(false)
        setMenu1(true)
    }

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
                            className={style.searchContainer + " input-over-effect position-relative"}
                            placeholder="Search by adresse / Txn Hash / Block / NFT"
                            style={{ backgroundColor: "#14142E" }}
                            min={0}
                            onFocus={(e) => {
                                setIsCapsInputFocused(true)
                            }}
                            onBlur={() => setIsCapsInputFocused(false)}
                        />
                        {isCapsInputFocused && <div className="search-gradient"></div>}
                        <Search className={style.search + " position-absolute"}/>
                    </div>}
                </div>
                {isLaptop && <div className="flex flex-row flex-items-center">
                   <span className={style.navBarItem}>Dashboard</span>
                   <Dropdown onMouseOver={overMenu} onMouseLeave={leaveMenu} toggle={toggle} isOpen={menu} className={style.navBarDropdown}>
                        <DropdownToggle
                            className={style.navBarDropdownItem}
                            id="page-header-user-dropdown"
                            tag="button"
                        >
                            <div className="flex flex-row flex-items-center">
                                <span className={style.navBarItem}>Chain</span>
                                <DownArrow className={style.downArrowItem} />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={style.dropdownMenu} right>
                            <p
                                className={style.dropdownItem}
                                onClick={()=>router.push("./validator")}
                            >
                                Validator
                            </p>
                            <p
                                className={style.dropdownItem}
                            >
                                Nominator
                            </p>
                            <p
                                className={style.dropdownItem}
                                onClick={()=>router.push("./account")}
                            >
                                All Account
                            </p>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown onMouseOver={overMenu1} onMouseLeave={leaveMenu1} toggle={toggle1} isOpen={menu1} className={style.navBarDropdown}>
                        <DropdownToggle
                            className={style.navBarDropdownItem}
                            id="page-header-user-dropdown"
                            tag="button"
                        >
                            <div className="flex flex-row flex-items-center">
                                <span className={style.navBarItem}>Accounts</span>
                                <DownArrow className={style.downArrowItem} />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={style.dropdownMenu} right>
                            <p
                                className={style.dropdownItem}
                                onClick={()=>router.push("./block")}
                            >
                                Blocks
                            </p>
                            <p
                                className={style.dropdownItem}
                                onClick={()=>router.push("./trans")}
                            >
                                Transactions
                            </p>
                            <p
                                className={style.dropdownItem}
                                onClick={()=>router.push("./nft")}
                            >
                                NFT/ Capsule
                            </p>
                        </DropdownMenu>
                    </Dropdown> 
    
                </div>}
                <div className={"d-md-none"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger className={style.hamburger + " mx-2"} />
                </div>
            </div>

            {!isLaptop && <Modal classNames={{
                modalAnimationIn: 'mobileMenuAnimationIn',
                modalAnimationOut: 'mobileMenuAnimationOut'
            }} open={isMenuOpen} onClose={()=>setIsMenuOpen(false)}>
                <div className={style.mobileMenu + " flex flex-col flex-items-center"}>
                    <span className={style.mobileMenuItem + " " + (router.route == '/' ? style.activeMobileMenuItem : '')}>Dashboard</span>
                    <span className={style.mobileMenuItem}>Chain</span>
                    <span onClick={goAccountIndex} className={style.mobileMenuItem}>Account</span>
                </div>
            </Modal>}
        </header>
    )
}

export default Header;
