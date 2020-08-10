import React from 'react';
import { FormFieldWrapper } from './style';


export default function FormFieldProffy({ label, type, ...rest }) {
    
    const tag = type === 'textarea' ? 'textarea' : 'input';    

    return (
        <FormFieldWrapper>
            <FormFieldWrapper.Label htmlFor={ label.toLowerCase() }>{ label }</FormFieldWrapper.Label>
            <FormFieldWrapper.Input 
                as={tag} 
                name={ label.toLowerCase() } 
                id={ label.toLowerCase() } 
                {...rest}
                // autoComplete={ autocomplete || 'off'}
            />
        </FormFieldWrapper>
    );
}