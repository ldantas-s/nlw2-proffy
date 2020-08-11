import styled from 'styled-components';
import Select from 'react-select';


// react-select
// classNamePrefix-container
    // classNamePrefix__control
        // classNamePrefix__value-container
        // classNamePrefix__indicators
            // classNamePrefix__indicator-separator
            // classNamePrefix__indicator
                //svg
    // classNamePrefix__menu
        // classNamePrefix__menu-list
            // classNamePrefix__option
    
    // '--is-disabled'
    // '--is-focused'
    // '--is-selected'


export const CustomSelect = styled(Select)`

    & .Select__control{
        border: 1px solid var(--color-line-in-white) !important;
        box-shadow: none;
    }

    & .Select__value-container {
        padding: 1.1rem;
        border-radius: .8rem;
        background: var(--color-input-background);
    }
    & .Select__indicators {
        background: var(--color-input-background);
    }
    & .Select__indicator-separator {
        display: none;
    }
    & .Select__menu {
        border-top: 0;
        background: var(--color-input-background);
        margin-top: 0;
    }
    & .Select__option {
        color: var(--color-text-complement);
    }
    & .Select__option:hover {
        border-left: 2px solid var(--color-primary);
        background: var(--color-line-in-white);
        transition: all 100ms linear;
    }
    & .Select__option--is-selected,
    & .Select__option--is-focused {
        border-left: 2px solid var(--color-primary);
        background: var(--color-line-in-white);
        color: var(--color-text-title);
    }


`;