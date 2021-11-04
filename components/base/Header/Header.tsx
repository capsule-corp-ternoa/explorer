import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './Header.module.scss';
import LogoTernoaScan from 'components/assets/LogoTernoaScan';
import Hamburger from 'components/assets/Hamburger';
import Search from 'components/assets/Search';
import SearchBar from '../SearchBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useMediaQuery } from 'react-responsive';
import DownArrow from 'components/assets/DownArrow';

export interface HeaderProps {
    searchBar?: Boolean
}

const Header: React.FC<HeaderProps> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
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

    const leaveMenu = () => {
        timeout = setTimeout(() => {
            setMenu(false)
        }, 200);
    }

    const overMenu = () => {
        clearTimeout(timeout)
        setMenu(true)
        setMenu1(false)
    }

    const leaveMenu1 = () => {
        timeout = setTimeout(() => {
            setMenu1(false)
        }, 200);
    }

    const overMenu1 = () => {
        clearTimeout(timeout)
        setMenu(false)
        setMenu1(true)
    }

    return (
        <header>
            <div className={style.header + ' row no-padding-vertical ' + ((props.searchBar || props.searchBar == undefined)? '': ' headerNoSearchBar')}>
                <div className={'no-padding-vertical col col-md-2 col-lg-2 flex flex-cont-start'}>
                    <Link href="/">
                        <a><LogoTernoaScan className={'w-100'} /></a>
                    </Link>
                </div>
                <div className="d-block d-md-none col no-padding-vertical">
                    <div className="flex flex-cont-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Hamburger className={style.hamburger + " mx-2"} />
                    </div>
                </div>
                
                <div className={'no-padding-vertical col-md-5 col-lg-4 ' + style.searchBoxContainer}>
                    {(props.searchBar || props.searchBar == undefined) && <SearchBar />}
                </div>
                <div className={'d-none d-md-block col-md-3 col-lg-3 no-padding-vertical'}>
                <div className={'flex flex-cont-end flex-items-center '}>
                    <span className={style.navBarItem}>
                        <Link href="/">
                            <a>
                                Dashboard
                            </a>
                        </Link>
                    </span>
                    <Dropdown onMouseOver={overMenu} onMouseLeave={leaveMenu} toggle={toggle} isOpen={menu} className={style.navBarDropdown + ' mx-2 mx-md-2 mx-lg-3 mx-xl-4'}>
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
                            <p className={style.dropdownItem}>
                                <Link href="/extrinsic">
                                    <a>Exrinsics</a>
                                </Link>
                            </p>
                            <p className={style.dropdownItem}>
                                <Link href="/account">
                                    <a>All Account</a>
                                </Link>
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
                            <p className={style.dropdownItem}>
                                <Link href='/block'>
                                    <a>
                                        Blocks
                                    </a>
                                </Link>
                            </p>
                            <p className={style.dropdownItem}>
                                <Link href='/trans'>
                                    <a>
                                        Transactions
                                    </a>
                                </Link>
                            </p>
                            <p className={style.dropdownItem}>
                                <Link href='/nft'>
                                    <a>
                                        NFT/ Capsule
                                    </a>
                                </Link>
                            </p>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                </div>
            </div>

            <Modal classNames={{
                modalAnimationIn: 'mobileMenuAnimationIn',
                modalAnimationOut: 'mobileMenuAnimationOut'
            }} open={isMenuOpen} onClose={()=>setIsMenuOpen(false)}>
                <div className={style.mobileMenu + " flex flex-col flex-items-center"}>
                    <span
                        className={style.mobileMenuItem + " " + (router.route == '/' ? style.activeMobileMenuItem : '')}
                        onClick={()=>router.push("/")}
                    >
                        Dashboard
                    </span>
                    <span className={style.mobileMenuItem}>Chain</span>
                    <span className={style.mobileMenuItem}>Account</span>
                </div>
            </Modal>

        </header>
    )
}

export default Header;
