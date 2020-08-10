import React from 'react';
// import Select from 'react-select';
// Styles
import { CustomSelect } from './style';


export default function SelectProffy({...props}) {
    const options = [
        { value: 'math', label: 'Math' },
        { value: 'portugese', label: 'Portugese' },
        { value: 'english', label: 'English' }
      ]
      
    return (
        <>
            {/* <label htmlFor={ label.toLowerCase() }>{ label }</label> */}
            <CustomSelect
                classNamePrefix="Select" 
                {...props}
                options={options} 
                // name={ label.toLowerCase() } 
                // id={label.toLowerCase()}
            />
        </>
    );
}