import React from 'react';
import { FormFieldWrapper } from './style';


export default function FormFieldProffy({ label }) {


    return (
        <FormFieldWrapper>
            <FormFieldWrapper.Label htmlFor={ label.toLowerCase() }>{ label }</FormFieldWrapper.Label>
            <FormFieldWrapper.Input type="text" name={ label.toLowerCase() } id={ label.toLowerCase() } />
        </FormFieldWrapper>
    );
}