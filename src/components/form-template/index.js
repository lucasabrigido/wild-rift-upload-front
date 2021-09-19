import React, {memo} from 'react';

import './styles.scss';


const FormTemplate = ({ className='', children}) => {
    return (
        <form className={`main-form ${className}`} >
            {children}
        </form>
    )
};

export default memo(FormTemplate);