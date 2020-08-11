import React from 'react';
// Styles
import { CustomSelect } from './style';
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export default function SelectProffy({ options, label, ...props}) {
    const subjects = [
        { value: 'math', label: 'Math' },
        { value: 'portugese', label: 'Portugese' },
        { value: 'english', label: 'English' }
    ];
    const days = [
        { value: '0', label: 'Sunday' },
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Sartuday' },
    ];
    return (
        <FormFieldWrapper>
            <FormFieldWrapper.Label htmlFor={ label.toLowerCase() }>{ label }</FormFieldWrapper.Label>
            <CustomSelect
                classNamePrefix="Select"
                options={options === 'days' ? days : subjects} 
                id={label.toLowerCase()}
                {...props}
            />
        </FormFieldWrapper>
    );
}