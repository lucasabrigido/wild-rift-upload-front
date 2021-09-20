import React, {memo} from 'react';

import './styles.scss';

const FieldError = ({text, className=''}) => {
  return (
    <div className={`container-field-error ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default memo(FieldError);
