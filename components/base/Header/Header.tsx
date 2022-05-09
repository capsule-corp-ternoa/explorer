import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './Header.module.scss';
import LogoTernoaExplorer from 'components/assets/LogoTernoaExplorer';
import BackMobile from 'components/assets/BackMobile';
import Account from 'components/assets/MenuIcons/Account';
import Block from 'components/assets/MenuIcons/Block';
import Event from 'components/assets/MenuIcons/Event';
import NFT from 'components/assets/MenuIcons/NFT';
import Extrinsic from 'components/assets/MenuIcons/Extrinsic';
import Transfer from 'components/assets/MenuIcons/Transfer';
import Network from 'components/assets/Network/index';
import Hamburger from 'components/assets/Hamburger';
import SearchBar from '../SearchBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useMediaQuery } from 'react-responsive';
import DownArrow from 'components/assets/DownArrow';
import TernoaLogoIcon from 'components/assets/TernoaLogoIcon';

export interface HeaderProps {
    searchBar?: Boolean
    back?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLaptop, setIsLaptop] = useState(false);
    const [isChain, setIsChain] = useState(false);
    const [isAccount, setIsAccount] = useState(false);
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

    const onClickChain = () => {
        if(isChain) setIsChain(false);
        else setIsChain(true);
    }
    
    const onClickAccount = () => {
        if(isAccount) setIsAccount(false);
        else setIsAccount(true);
    }

    const openMenu = () => {
        if(router.route == '/block' || router.route == '/extrinsic' || router.route == '/nft' || router.route == '/event') {
            setIsChain(true);
        } 
        if (router.route == '/account' || router.route == '/trans') {
            setIsAccount(true);
        }
        if(isMenuOpen) setIsMenuOpen(false);
        else setIsMenuOpen(true);
    }

    return (
        <header>
            <div className="only-desktop">
                <div className={style.header}>
                    <Link href="/">
                        <a className={style.headerLogo}>
                            <TernoaLogoIcon />
                            <span className={style.logo}>ternoa explorer</span>
                        </a>
                    </Link>
                    {(props.searchBar || props.searchBar == undefined) && 
                        <div className="col-lg-4 px-0 mt-4 mt-lg-0">
                            <SearchBar />
                        </div>
                    }
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a className={style.navBarDash}>
                                Home
                            </a>
                        </Link>
                        <Dropdown onMouseOver={overMenu} onMouseLeave={leaveMenu} toggle={toggle} isOpen={menu} className={`${style.navBarDropdown}`}>
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
                            <DropdownMenu className={style.dropdownMenu}>
                                <div className={style.dropdownItem}>
                                    <Link href="/block">
                                        <a><Block className={style.dropdownItem}/></a>
                                    </Link>
                                </div>
                                <div className={style.dropdownItem}>
                                    <Link href="/extrinsic">
                                        <a><Extrinsic className={style.dropdownItem}/></a>
                                    </Link>
                                </div>
                                {process.env.NEXT_PUBLIC_HIDE_NFT !== "true" && <div className={style.dropdownItem}>
                                    <Link href="/nft">
                                        <a><NFT className={style.dropdownItem}/></a>
                                    </Link>
                                </div>}
                                <div className={style.dropdownItem}>
                                    <Link href="/event">
                                        <a><Event className={style.dropdownItem}/></a>
                                    </Link>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown onMouseOver={overMenu1} onMouseLeave={leaveMenu1} toggle={toggle1} isOpen={menu1} className={style.navBarDropdown}>
                            <DropdownToggle
                                className={style.navBarDropdownItem}
                                id="page-header-user-dropdown"
                                tag="button"
                            >
                                <div className="d-flex flex-row align-items-center">
                                    <span className={style.navBarItem}>Accounts</span>
                                    <DownArrow className={style.downArrowItem} />
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={style.dropdownMenu}>
                                <div className={style.dropdownItem}>
                                    <Link href='/account'>
                                        <a>
                                        <Account className={style.dropdownItem}/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={style.dropdownItem}>
                                    <Link href='/trans'>
                                        <a>
                                        <Transfer className={style.dropdownItem}/>
                                        </a>
                                    </Link>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                        <Network />
                    </div>
                </div>
            </div>
            {!props.back && 
                <div className="only-mobile">
                    <div className={`${style.header} row`}>
                        <Link href="/">
                            <a className={`${style.headerLogo} col-8`}>
                                <TernoaLogoIcon />
                                <span className={style.logo}>ternoa explorer</span>
                            </a>
                        </Link>
                        <div className="col-2">
                            <div className="d-flex justify-content-end">
                                <div onClick={() => openMenu()}>
                                    <Hamburger className={`${style.hamburger}`} />
                                </div>
                            </div>
                        </div>
                        {(props.searchBar || props.searchBar == undefined) && 
                            <div className="col-xl-4 px-0 mt-4 mt-xl-0">
                                <SearchBar />
                            </div>
                        }
                    </div>
                </div> 
            }
            {props.back && 
                <div className="only-mobile">
                    <div className={`${style.header} row`}>
                        <Link href={props.back}>
                            <a className="col-2 d-flex justify-content-start">
                                <BackMobile />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={`${style.headerLogo} justify-content-center col`}>
                                <TernoaLogoIcon />
                                <span className={style.logo}>ternoa explorer</span>
                            </a>
                        </Link>
                        <div className="col-2 px-0 mx-0">
                            <div className="d-flex justify-content-end">
                                <div onClick={() => openMenu()}>
                                    <Hamburger className={`${style.hamburger}`} />
                                </div>
                            </div>
                        </div>
                        {(props.searchBar || props.searchBar == undefined) && 
                            <div className="col-xl-4 px-0 mt-4 mt-xl-0">
                                <SearchBar />
                            </div>
                        }
                    </div>
                </div>
            }
            <Modal 
                classNames={{ modalAnimationIn: 'mobileMenuAnimationIn', modalAnimationOut: 'mobileMenuAnimationOut'}} 
                open={isMenuOpen} 
                onClose={()=>setIsMenuOpen(false)}
            >
                <div className={style.mobileMenu + " flex flex-col flex-items-center"}>
                    <span
                        className={style.mobileMenuItem + " " + (router.route == '/' ? style.activeMobileMenuItem : '')}
                        onClick={()=>router.push("/")}
                    >
                        Home
                    </span>
                    <div>
                        <div className="flex flex-row flex-items-center flex-cont-center" onClick={() => onClickChain()}>
                            <span className={style.mobileMenuItem + " " + (router.route == '/block' || router.route == '/extrinsic' || router.route == '/nft' || router.route == '/event' ? style.activeMobileMenuItem : '')}>Chain</span>
                            { isChain ? <DownArrow className={style.downArrowMobile} /> : <DownArrow className={style.downArrowMobile} /> }
                        </div>
                        { isChain && <div className={style.menuContainerMobile + " flex flex-column flex-items-center"}>
                            <span
                                className={style.submenuMobile + " " + (router.route == '/block' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/block")}
                            >
                                Blocks
                            </span>
                            <span
                                className={style.submenuMobile + " " + (router.route == '/extrinsic' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/extrinsic")}
                            >
                                Extrinsics
                            </span>
                            {process.env.NEXT_PUBLIC_HIDE_NFT !== "true" && <span
                                className={style.submenuMobile + " " + (router.route == '/nft' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/nft")}
                            >
                                NFT Extrinsics 
                            </span>}
                            <span
                                className={style.submenuMobile + " " + (router.route == '/event' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/event")}
                            >
                                Events
                            </span>
                        </div> }
                    </div>
                    <div>
                        <div className="flex flex-row flex-items-center flex-cont-center" onClick={() => onClickAccount()}>
                            <span className={style.mobileMenuItem + " " + (router.route == '/account' || router.route == '/trans' ? style.activeMobileMenuItem : '')}>Account</span>
                            { isAccount ? <DownArrow className={style.downArrowMobile} /> : <DownArrow className={style.downArrowMobile} /> }
                        </div>
                        { isAccount && <div className={style.menuContainerMobile + " flex flex-column flex-items-center"}>
                            <span
                                className={style.submenuMobile + " " + (router.route == '/account' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/account")}
                            >
                                All accounts
                            </span>
                            <span
                                className={style.submenuMobile + " " + (router.route == '/trans' ? style.activeSubmenuMobile : '')}
                                onClick={()=>router.push("/trans")}
                            >
                                Transfers
                            </span>
                        </div> }
                    </div>
                    <Network />
                </div>
            </Modal>
        </header>
    )
}

export default Header;