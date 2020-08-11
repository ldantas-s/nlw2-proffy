import React from 'react';
// Styles
import { CustomSelect } from './style';
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export default function SelectProffy({ options, label, ...props}) {
    return (
        <FormFieldWrapper>
            <FormFieldWrapper.Label htmlFor={ label.toLowerCase() }>{ label }</FormFieldWrapper.Label>
            <CustomSelect
                classNamePrefix="Select"
                options={options} 
                id={label.toLowerCase()}
                {...props}
            />
        </FormFieldWrapper>
    );
}