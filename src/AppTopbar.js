import React, { useRef }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import logo from './images/amphenol-logo.png';
import profile from './images/profile-pic.png';
import { Menu } from 'primereact/menu';
import { useStoreActions } from 'easy-peasy';

export const AppTopbar = (props) => {
    const menu = useRef(null);
    let history = useHistory();
    const setIsAuthenticated = useStoreActions((actions) => actions.tabModel.setIsAuthenticated);

    let items = [
        {
            label: "Logout",
            icon: 'pi pi-fw pi-power-off',
            command: () => {
                history.replace("/");
                setIsAuthenticated(false)
            },
        },
    ];

    return (
        <div className="layout-topbar">
        <Menu model={items} popup ref={menu} />
            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>
            <Link to="/" className="layout-topbar-logo">
                {/* <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/> */}
                <span><img src={logo} className='' alt='logo' /></span>
            </Link>

            <div className="logo-link ms-sm-5 hover_cursor" onClick={(e) => menu.current.toggle(e)}>
                <img className="rightLogo mr-2" height="30" width="30" src={profile} />
            </div>

            <button type="button" style={{ visibility: "hidden" }} className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                {/* <i className="pi pi-ellipsis-v" /> */}
            </button>

        </div>
    );
}
