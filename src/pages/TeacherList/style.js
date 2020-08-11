import styled from 'styled-components';
// Components-Style
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export const SearchForm = styled.form`

    & label {
        color: var(--color-text-in-primary);
    }
    @media(min-width: 1024px) {
        & {
            display: flex;
            justify-content: center;
        }
        & > ${FormFieldWrapper} {
            margin: 2rem .4rem -5rem;  
        }
        & > * {
            flex-basis: 300px;
        }
    }
`;

export const MainList = styled.main`
    /* border: 1px solid red; */
    padding: 2rem 5%;
    height: 100vh;
    @media(min-width: 1024px) {
        & {
            padding: 2rem 24%;
        }
    }
`;