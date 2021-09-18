import React from 'react';
import { useHistory } from 'react-router';
import Button, { buttonTypes } from '../loading-button';
import LogoLol from '../../assets/images/lol-logo.png'
import Menu from '../../assets/images/menu-burger.png';
import './styles.scss';

let items = [
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
    },
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
    },
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
    }
]


const Header = () => {
    const history = useHistory();

    const redirect = (path) => history.push(path);

    return (
        <header className='header' >
            <div className='container-logo' >
                <img className='logo' alt='logo-lol' src={LogoLol}/>
                <img className='menu' alt='logo-lol' src={Menu}/>
            </div>
            <div className='container-menu' >
                {items.map((menu, index) => {
                    return (
                        <div
                            className='menu-item'
                            key={index}
                            onClick={() => redirect(menu.path)}
                        >
                            <span>
                                {menu.label}
                            </span>
                        </div>
                    )
                })}
            </div>

            <div className='container-profile'>
                <Button className='button-header' type={buttonTypes.link} text='Registrar'/>
                <Button className='button-header' type={buttonTypes.default} text='Login'/>
            </div>
        </header>
    )
};

export default Header;