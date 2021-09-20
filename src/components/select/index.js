import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const MySelect = ({value, items, onChange, className='', label}) => {
    return (
        <FormControl className={className}>
            <InputLabel >{label}</InputLabel>
            <Select
                className={className+'-select'}
                value={value}
                label={label}
                onChange={onChange}
            >
                {items.map(({label, value}, index)=> (
                    <MenuItem key={index} value={value}>{label}</MenuItem>
                ))}
            </Select>
      </FormControl>
    )
};

export default MySelect;