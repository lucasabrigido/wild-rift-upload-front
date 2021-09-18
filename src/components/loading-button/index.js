import React from 'react';
import logo from '../../assets/gifs/loading.gif';
import './styles.scss';

export const buttonTypes = {
    default: 'default',
    link: 'link',
}

const LoadingButton = ({loading, children, type='default', className, style, disabled, text, ...props}) => {
    return (
        <button className={`custom-button ${buttonTypes[type] || ''} ${className || ''}`} style={style} disabled={loading ? loading : disabled} {...props} >
            {loading && <img style={{width: '30px', height: '30px', marginRight: '5px'}} src={logo} alt="loading..." />}
            {text && text}
            {children}
        </button>
    )
};


export default LoadingButton;