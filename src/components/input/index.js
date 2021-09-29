import React, {memo} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";


const Input = ({
    defaultValue,
    label,
    IconLeft=undefined,
    onClickIconRight=undefined,
    onClickIconLeft=undefined,
    IconRight=undefined,
    ...props
}) => {
    return (
        <TextField
            label={label}
            defaultValue={defaultValue}
            {...props}
            InputProps={{
                startAdornment: ( 
                    IconLeft ? 
                        <InputAdornment position="start">
                            <IconLeft onClick={onClickIconLeft} />
                        </InputAdornment>
                        : null
                ),
                endAdornment: (
                    IconRight 
                        ?  <InputAdornment position="end">
                                <IconRight onClick={onClickIconRight} />
                            </InputAdornment>
                        : null
                ),
            }}
        />
    )
};

export default memo(Input);