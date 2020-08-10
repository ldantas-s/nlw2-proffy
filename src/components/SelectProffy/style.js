import styled from 'styled-components';
import ReactSelect from 'react-select';


export const CustomSelect = styled(ReactSelect)`
    & .Select__indicator Select__dropdown-indicator {
        border-color: green;
    }
    & .react-select-container .react-select__control .react-select__value-container {
        border: 5px solid red;
        background: orangered;
    }
`;