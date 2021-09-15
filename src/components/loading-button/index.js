import React from 'react';
import logo from '../../assets/gifs/loading.gif';
import './styles.scss';

const LoadingButton = ({loading, children, className, style, disabled, text, ...props}) => {
    return (
        <button className={`custom-button ${className || ''}`} style={style} disabled={loading ? loading : disabled} {...props} >
            {loading && <img style={{width: '30px', height: '30px'}} src={logo} alt="loading..." />}
            {text && <span style={{fontSize: '1.8em', color: '#000', fontWeight: 'bolder'}} >{text}</span>}
            {children}
        </button>
    )
};


export default LoadingButton;