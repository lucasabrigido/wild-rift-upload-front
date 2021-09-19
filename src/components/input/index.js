import React, {memo} from 'react';
import TextField from '@mui/material/TextField';



const Input = ({defaultValue, label, ...props}) => {
    return (
        <TextField
            id='outlined-uncontrolled'
            label={label}
            defaultValue={defaultValue}
            {...props}
      />
    )
};

export default memo(Input);